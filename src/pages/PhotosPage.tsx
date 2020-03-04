import React, { useEffect } from 'react';
import styled from 'styled-components';
import { withRouter, RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from '../types/actionTypes';
import { bindActionCreators } from 'redux';
import { fetchAllCategoryImages, setCurrentQuery } from '../actions/categoryImagesAction';
import { reverseSlugify } from '../utils/functions';
import { AppState } from '../reducers/rootReducer';
import ImageCart from '../components/molecules/ImageCart/ImageCart';
import BackButton from '../components/atoms/BackButton/BackButton';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  color: #000;
  position: relative;
  background-color: #f2f2f2;
  backdrop-filter: blur(10px);
  background-size: cover;

  ${({ theme }) => theme.mq.standard} {
    min-height: 0;
    height: 100vh;
  }
`;

const StyledContent = styled.div`
  display: none;
  position: fixed;
  top: 50%;
  right: 2rem;
  width: 35%;
  transform: translateY(-50%);
  justify-content: center;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.mq.standard} {
    display: flex;
  }
`;

const StyledTitle = styled.h1`
  font-family: ${({ theme }) => theme.font.family.avanti};
  font-size: 62px;
  letter-spacing: 5px;
  color: #2d2d2d;
  text-align: center;
`;

const StyledParagraph = styled.p`
  text-align: center;
`;

const StyledHeader = styled.header`
  height: 200px;
  width: 100%;
  border: 2px solid #f2f2f2;
  background-image: url('https://pixabay.com/get/57e3d0434b55a914f6da8c7dda79367d1038d9ed53546c48702778d7964dcd51b8_1280.jpg');
  background-color: #f2f2f2;
  background-blend-mode: darken;
  backdrop-filter: blur(15px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  top: 0;
  left: 0;
`;

const StyledHeaderParagraph = styled.p`
  font-size: 32px;
  color: inherit;
  letter-spacing: 1px;
`;

const StyledContentWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  ${({ theme }) => theme.mq.standard} {
    width: 65%;
    min-height: 100vh;
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
    -webkit-box-shadow: 11px 8px 20px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 11px 8px 20px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 11px 8px 20px 0px rgba(0, 0, 0, 0.75);
  }
`;

const StyledImagesWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const ButtonWrapper = styled.div`
  width: 70px;
  height: 70px;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
`;

interface Props extends RouteComponentProps<any> {}

type ConnectedProps = Props & LinkDispatchProps & LinkStateProps;

const PhotosPage: React.FC<ConnectedProps> = ({
  location,
  match,
  setQuery,
  fetchAllQueryImages,
  allCategoryImages,
  loading,
  history
}) => {
  useEffect(() => {
    setQuery(reverseSlugify(match.params.query));
    fetchAllQueryImages(match.params.query, queryString.parse(location.search).page);
  }, [match.params.query]);
  return (
    <StyledWrapper>
      <ButtonWrapper onClick={() => history.push('/')}>
        <BackButton />
      </ButtonWrapper>
      <StyledContent>
        <StyledTitle>{match.params.query}</StyledTitle>
        <StyledParagraph>choose a photo</StyledParagraph>
      </StyledContent>
      <StyledContentWrapper>
        {loading ? (
          <StyledParagraph>Loading...</StyledParagraph>
        ) : (
          <StyledImagesWrapper>
            <StyledHeader>
              <StyledHeaderParagraph>{match.params.query}</StyledHeaderParagraph>
            </StyledHeader>
            {allCategoryImages.map(item => (
              <ImageCart
                key={item.id}
                id={item.id}
                imageUrl={item.webformatURL}
                title={item.tags}
              />
            ))}
          </StyledImagesWrapper>
        )}
      </StyledContentWrapper>
    </StyledWrapper>
  );
};

interface LinkStateProps {
  allCategoryImages: any[];
  loading: boolean;
}

interface LinkDispatchProps {
  setQuery: (query: string) => void;
  fetchAllQueryImages: (query: string, page: string[] | string | null | undefined) => void;
}

const mapStateToProps = ({
  categoryImagesReducer: { allCategoryImages, loading }
}: AppState): LinkStateProps => {
  return { allCategoryImages, loading };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>): LinkDispatchProps => {
  return {
    setQuery: bindActionCreators(setCurrentQuery, dispatch),
    fetchAllQueryImages: bindActionCreators(fetchAllCategoryImages, dispatch)
  };
};

const PhotosPageWithRouter = withRouter(PhotosPage);

export default connect(mapStateToProps, mapDispatchToProps)(PhotosPageWithRouter);
