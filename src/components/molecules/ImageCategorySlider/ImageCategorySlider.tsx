import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

interface Props {}

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const StyledSlider = styled(Slider)`
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const ImageCategorySlider: React.FC<Props> = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'cubic-bezier(.84, 0, .08, .99)'
    // beforeChange: (oldIndex, nextSlide) => setSlide(nextSlide),
    // afterChange: current => setSlide(current)
  };

  return (
    <StyledWrapper>
      <StyledSlider {...settings}>
        /* map images, categories and descriptions fetched from redux action */
      </StyledSlider>
    </StyledWrapper>
  );
};

export default ImageCategorySlider;
