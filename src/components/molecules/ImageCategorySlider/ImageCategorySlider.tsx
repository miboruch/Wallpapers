import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import { AppState } from '../../../reducers/rootReducer';
import Button from '../../atoms/Button/Button';
import ImageContent from '../ImageContent/ImageContent';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const StyledSlider = styled(Slider)`
  width: 100%;
  height: 100%;
  z-index: 0;
`;

interface Props {}

type ConnectedProps = Props & LinkStateProps;

const ImageCategorySlider: React.FC<ConnectedProps> = ({ categoryImages }) => {
  console.log(categoryImages);
  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'cubic-bezier(.84, 0, .08, .99)'
  };

  return (
    <StyledWrapper>
      <StyledSlider {...settings}>
        {categoryImages.map(item => (
          <ImageContent imageUrl={item.hits.previewURL} />
        ))}
      </StyledSlider>
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
