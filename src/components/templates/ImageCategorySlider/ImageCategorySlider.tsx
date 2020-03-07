import React, { useContext, useRef } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import { ReactSVG } from 'react-svg';
import { AppState } from '../../../reducers/rootReducer';
import Button from '../../atoms/Button/Button';
import ImageContent from '../../molecules/ImageContent/ImageContent';
import { SliderContext } from '../../../providers/CurrentSlideContext';
import backIcon from '../../../assets/icons/back.svg';
import { Link } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from '../../../types/actionTypes';
import { bindActionCreators } from 'redux';
import { fetchStart } from '../../../actions/categoryImagesAction';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const StyledSlider = styled(Slider)`
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;

  ${({ theme }) => theme.mq.standard} {
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

const NavigationWrapper = styled.section`
  position: absolute;
  right: 2rem;
  bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const StyledIconRight = styled(ReactSVG)`
  fill: #fff;
  width: 25px;
  height: 25px;
  position: relative;
  box-sizing: initial;
  padding: 2rem;
  cursor: pointer;
`;

const StyledIconLeft = styled(StyledIconRight)`
  transform: rotate(180deg);
`;

interface Props {}

type ConnectedProps = Props & LinkStateProps & LinkDispatchProps;

enum SliderAction {
  next = 'next',
  prev = 'prev'
}

const ImageCategorySlider: React.FC<ConnectedProps> = ({ categoryImages, fetchStart }) => {
  const { currentSlide, setSlide }: any = useContext(SliderContext);
  const sliderRef = useRef<Slider>(null);

  const slide = (type: SliderAction): void => {
    const sliderNode = sliderRef.current;

    if (sliderNode) {
      type === 'next' ? sliderNode.slickNext() : sliderNode.slickPrev();
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    fade: true,
    arrows: false,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'cubic-bezier(.84, 0, .08, .99)',
    afterChange: (currentSlide: number) => setSlide(currentSlide)
  };

  return (
    <StyledWrapper>
      <StyledSlider {...settings} ref={sliderRef}>
        {categoryImages.map(item => (
          <ImageContent
            imageUrl={item.hits.largeImageURL}
            key={item.hits.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </StyledSlider>
      <NavigationWrapper>
        <StyledIconLeft src={backIcon} onClick={(): void => slide(SliderAction.prev)} />
        <StyledIconRight src={backIcon} onClick={(): void => slide(SliderAction.next)} />
      </NavigationWrapper>
      <Link to={`/photos-page/${categoryImages[currentSlide].title}?page=1`}>
        <ButtonWrapper onClick={() => fetchStart()}>
          <Button text={`Open ${categoryImages[currentSlide].title} images`} />
        </ButtonWrapper>
      </Link>
    </StyledWrapper>
  );
};

interface LinkStateProps {
  categoryImages: any[];
}

interface LinkDispatchProps {
  fetchStart: () => any;
}

const mapStateToProps = ({
  categoryImagesReducer: { categoryImages }
}: AppState): LinkStateProps => {
  return { categoryImages };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>): LinkDispatchProps => {
  return {
    fetchStart: bindActionCreators(fetchStart, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageCategorySlider);
