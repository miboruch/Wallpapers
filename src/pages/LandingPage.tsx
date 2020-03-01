import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { AppState } from '../reducers/rootReducer';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from '../types/actionTypes';
import { fetchCategoryImages } from '../actions/categoryImagesAction';
import { bindActionCreators } from 'redux';
import Button from '../components/atoms/Button/Button';
import ImageCategorySlider from '../components/molecules/ImageCategorySlider/ImageCategorySlider';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const StyledHeader = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  margin-top: 2rem;
`;

const StyledTitle = styled.p`
  font-size: ${({ theme }) => theme.font.size.m};
  font-weight: 500;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 1rem;
  left: 0;
`;

interface Props {}

type ConnectedProps = Props & LinkDispatchProps & LinkStateProps;

const LandingPage: React.FC<ConnectedProps> = ({ fetchCategory, loading }) => {
  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <StyledWrapper>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <StyledHeader>
            <StyledTitle>Choose category</StyledTitle>
          </StyledHeader>
          <ImageCategorySlider />
          <ButtonWrapper>
            <Button text={'Open images'} />
          </ButtonWrapper>
        </>
      )}
    </StyledWrapper>
  );
};

interface LinkStateProps {
  loading: boolean;
}

interface LinkDispatchProps {
  fetchCategory: () => void;
}

const mapStateToProps = ({ categoryImagesReducer: { loading } }: AppState): LinkStateProps => {
  return { loading };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>): LinkDispatchProps => {
  return {
    fetchCategory: bindActionCreators(fetchCategoryImages, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
