import React, { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import { ReactSVG } from 'react-svg';
import { AppState } from '../../../reducers/rootReducer';
import Button from '../../atoms/Button/Button';
import ImageContent from '../ImageContent/ImageContent';
import { categoryQueries } from '../../../utils/imagesCategories';
import { SliderContext } from '../../../providers/CurrentSlideContext';
import backIcon from '../../../assets/icons/back.svg';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const StyledHeader = styled.header`
  width: inherit;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 2rem;
  left: 0;
  margin-top: 2rem;
  z-index: 2;
`;

const StyledTitle = styled.p`
  font-size: ${({ theme }) => theme.font.size.m};
  font-weight: 500;
  letter-spacing: 2px;
`;

const StyledSlider = styled(Slider)`
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;

  ${({ theme }) => theme.mq.standard} {
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
  }
`;

const ButtonWrapper = styled.div`
  width: 90%;
  position: absolute;
  bottom: 0;
  left: 0;
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

type ConnectedProps = Props & LinkStateProps;

enum SliderAction {
  next = 'next',
  prev = 'prev'
}

const ImageCategorySlider: React.FC<ConnectedProps> = ({ categoryImages }) => {
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
    fade: false,
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
        {/*{categoryImages.map(item => (*/}
        {/*  <ImageContent*/}
        {/*    imageUrl={item.hits.largeImageURL}*/}
        {/*    key={item.hits.id}*/}
        {/*    title={item.title}*/}
        {/*    description={item.description}*/}
        {/*  />*/}
        {/*))}*/}

        {categoryQueries.map(item => (
          <ImageContent
            imageUrl='https://pixabay.com/get/57e5d6464852ad14f6da8c7dda79367d1038d9ed53546c48702778d49145c05fb1_1280.jpg'
            title={item.title}
            description={item.description}
            key={item.title}
          />
        ))}
      </StyledSlider>
      <StyledHeader>
        <StyledTitle>Choose category</StyledTitle>
      </StyledHeader>
      <NavigationWrapper>
        <StyledIconLeft src={backIcon} onClick={() => slide(SliderAction.prev)} />
        <StyledIconRight src={backIcon} onClick={() => slide(SliderAction.next)} />
      </NavigationWrapper>
      <ButtonWrapper>
        <Button text={`Open ${categoryQueries[currentSlide].title} images`} />
      </ButtonWrapper>
    </StyledWrapper>
  );
};

interface LinkStateProps {
  categoryImages: any[];
}

const mapStateToProps = ({
  categoryImagesReducer: { categoryImages }
}: AppState): LinkStateProps => {
  return { categoryImages };
};

export default connect(mapStateToProps)(ImageCategorySlider);
