import React, { useContext } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { AppState } from '../reducers/rootReducer';
import { ReactSVG } from 'react-svg';
import searchIcon from '../assets/icons/search.svg';
import ImageCategorySlider from '../components/templates/ImageCategorySlider/ImageCategorySlider';
import { SliderContext } from '../providers/CurrentSlideContext';
import { categoryQueries } from '../utils/imagesCategories';
import { SearchContext } from '../providers/SearchContext';
import Search from '../components/molecules/Search/Search';
import heartIcon from '../assets/icons/heart.svg';
import { SavedImagesContext } from '../providers/SavedImagesContext';
import Spinner from '../components/atoms/Spinner/Spinner';

interface BackgroundImage {
  imageUrl?: string;
}

const StyledWrapper = styled.div<BackgroundImage>`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  transition: all 0.7s ease;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    background-image: url(${({ imageUrl }) => imageUrl});
    background-color: rgba(0, 0, 0, 0.3);
    background-blend-mode: multiply;
    background-position: center right;
    transform: scale(1.4);
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: -1;
    filter: blur(5px);
    transition: all 0.7s ease;
  }
`;

const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;

  ${({ theme }) => theme.mq.standard} {
    width: 65%;
  }
`;

const ContentWrapper = styled.div`
  position: absolute;
  display: none;
  top: 0;
  right: 0;
  width: 35%;
  height: 100vh;
  padding: 2rem;

  ${({ theme }) => theme.mq.standard} {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
  }
`;

const StyledHeader = styled.header`
  width: inherit;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  margin-top: 2rem;
  z-index: 2;
`;

const StyledTitle = styled.p`
  font-size: ${({ theme }) => theme.font.size.m};
  font-weight: 500;
  letter-spacing: 2px;
`;

const StyledHeading = styled.h1`
  font-family: ${({ theme }) => theme.font.family.avanti};
  font-size: 60px;
  letter-spacing: 5px;
  margin-left: 2rem;
`;

const ParagraphWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 4rem;
`;

const StyledDescription = styled.p`
  font-size: 14px;
  margin-left: 2rem;
  padding-bottom: 1rem;
`;

const StyledParagraph = styled.p<ParagraphProps>`
  font-size: 16px;
  color: #fff;
  background-color: ${({ currentSlide, index }) => (currentSlide === index ? '#cb6e61' : 'none')};
  padding: 0.3rem 1rem;
  border-radius: 10px;
  margin-top: 1rem;
  transition: background-color 0.6s ease;
`;

const StyledIcon = styled(ReactSVG)`
  position: absolute;
  top: 50%;
  right: 1rem;
  width: 25px;
  height: 25px;
  fill: #fff;
  transform: translate(-50%, -50%);
  cursor: pointer;

  ${({ theme }) => theme.mq.standard} {
    right: 2rem;
  }
`;

const StyledSavedIcon = styled(StyledIcon)`
  right: auto;
  left: 3rem;
`;

interface ParagraphProps {
  index: number;
  currentSlide: number;
}

interface Props {}

type ConnectedProps = Props & LinkStateProps;

const LandingPage: React.FC<ConnectedProps> = ({ loading, categoryImages }) => {
  const { currentSlide } = useContext(SliderContext);
  const { setOpen } = useContext(SearchContext);
  const { setOpen: setSavedOpen } = useContext(SavedImagesContext);

  return (
    <>
      {loading ? (
        <Spinner/>
      ) : (
        <>
          <Search />
          <StyledWrapper imageUrl={categoryImages[currentSlide].hits.largeImageURL}>
            <SliderWrapper>
              <ImageCategorySlider />
              <StyledHeader>
                <StyledTitle>Choose category</StyledTitle>
                <StyledSavedIcon src={heartIcon} onClick={() => setSavedOpen()} />
                <StyledIcon src={searchIcon} onClick={() => setOpen()} />
              </StyledHeader>
            </SliderWrapper>
            <ContentWrapper>
              <StyledHeading>{categoryImages[currentSlide].title}</StyledHeading>
              <StyledDescription>{categoryImages[currentSlide].description}</StyledDescription>
            </ContentWrapper>
          </StyledWrapper>
        </>
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
