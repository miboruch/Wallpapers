import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import { AppState } from '../../../reducers/rootReducer';
import Button from '../../atoms/Button/Button';
import ImageContent from '../ImageContent/ImageContent';
import { categoryQueries } from '../../../utils/imagesCategories';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledSlider = styled(Slider)`
  width: 100%;
  height: 100%;
  z-index: 0;
`;

interface Props {}

type ConnectedProps = Props & LinkStateProps;

const ImageCategorySlider: React.FC<ConnectedProps> = ({ categoryImages }) => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    fade: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'cubic-bezier(.84, 0, .08, .99)'
  };

  return (
    <StyledWrapper>
      <StyledSlider {...settings}>
        {categoryImages.map(item => (
          <ImageContent
            imageUrl={item.hits.largeImageURL}
            key={item.hits.id}
            title={item.title}
            description={item.description}
          />
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
