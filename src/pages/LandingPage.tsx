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

interface BackgroundImage {
  imageUrl: string;
}

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;

  &::after {
    content: '';
    position: absolute;
    background-color: ${({ theme }) => theme.colors.darkBlue};
    background-position: 10% 10%;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;

  ${({ theme }) => theme.mq.standard} {
    width: 65%;
    overflow: hidden;
  }
`;

interface Props {}

type ConnectedProps = Props & LinkStateProps;

const LandingPage: React.FC<ConnectedProps> = ({ loading, categoryImages }) => {
  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <StyledWrapper>
          <SliderWrapper>
            <ImageCategorySlider />
          </SliderWrapper>
        </StyledWrapper>
      )}
    </>
  );
};

interface LinkStateProps {
  loading: boolean;
  categoryImages: any[];
}

const mapStateToProps = ({
  categoryImagesReducer: { loading, categoryImages }
}: AppState): LinkStateProps => {
  return { loading, categoryImages };
};

export default connect(mapStateToProps)(LandingPage);
