import React, { useContext, useRef } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { Link } from 'react-router-dom';
import { AppState } from '../../../reducers/rootReducer';
import { SliderContext } from '../../../providers/CurrentSlideContext';
import { AppActions } from '../../../types/actionTypes';
import { fetchStart } from '../../../actions/categoryImagesAction';
import Button from '../../atoms/Button/Button';
import ImageContent from '../../molecules/ImageContent/ImageContent';
import backIcon from '../../../assets/icons/back.svg';
import {
  StyledWrapper,
  StyledSlider,
  ButtonWrapper,
  NavigationWrapper,
  StyledIconLeft,
  StyledIconRight
} from './ImageCategorySlider.styles';

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
