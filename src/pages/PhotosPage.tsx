import React, { useEffect } from 'react';
import styled from 'styled-components';
import { withRouter, RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import queryString from 'query-string';
import Button from '../components/atoms/Button/Button';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from '../types/actionTypes';
import { bindActionCreators } from 'redux';
import { fetchAllCategoryImages, setCurrentQuery } from '../actions/categoryImagesAction';
import { reverseSlugify } from '../utils/functions';

interface WrapperProps {
  imageUrl: string;
}

const StyledWrapper = styled.div<WrapperProps>`
  width: 100%;
  min-height: 100vh;
  color: #000;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    background-image: url(${({ imageUrl }) => imageUrl});
    top: 0;
    left: 0;
    background-size: cover;
  }
`;

const StyledContentWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  ${({ theme }) => theme.mq.standard} {
    width: 65%;
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
    -webkit-box-shadow: 11px 8px 20px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 11px 8px 20px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 11px 8px 20px 0px rgba(0, 0, 0, 0.75);
  }
`;

const ButtonWrapper = styled.div`
  width: 90%;
  height: 50px;
  position: absolute;
  bottom: 0;
  left: 0;

  ${({ theme }) => theme.mq.standard} {
    width: 40%;
    height: 80px;
  }
`;

interface Props extends RouteComponentProps<any> {}

type ConnectedProps = Props & LinkDispatchProps;

const PhotosPage: React.FC<ConnectedProps> = ({
  location,
  match,
  setQuery,
  fetchAllQueryImages
}) => {
  useEffect(() => {
    setQuery(reverseSlugify(match.params.query));
    fetchAllQueryImages(match.params.query, queryString.parse(location.search).page);
  }, [match.params.query]);
  return (
    <StyledWrapper
      imageUrl={
        'https://pixabay.com/get/57e3d0434b55a914f6da8c7dda79367d1038d9ed53546c48702778d59244c359ba_1280.jpg'
      }
    >
      <StyledContentWrapper>
        <p>wtf</p>
        <ButtonWrapper>
          <Button text={'test'} />
        </ButtonWrapper>
      </StyledContentWrapper>
    </StyledWrapper>
  );
};

interface LinkDispatchProps {
  setQuery: (query: string) => void;
  fetchAllQueryImages: (query: string, page: string[] | string | null | undefined) => void;
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>): LinkDispatchProps => {
  return {
    setQuery: bindActionCreators(setCurrentQuery, dispatch),
    fetchAllQueryImages: bindActionCreators(fetchAllCategoryImages, dispatch)
  };
};

const PhotosPageWithRouter = withRouter(PhotosPage);

export default connect(null, mapDispatchToProps)(PhotosPageWithRouter);
