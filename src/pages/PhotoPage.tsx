import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router';
import { API_URL } from '../utils/constants';
import { AppState } from '../reducers/rootReducer';
import Spinner from '../components/atoms/Spinner/Spinner';
import ProjectIcons from '../components/molecules/ProjectIcons/ProjectIcons';
import { ReactSVG } from 'react-svg';
import heart from '../assets/icons/heart.svg';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: #2d2d2d;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;

  ${({ theme }) => theme.mq.standard} {
    width: 65%;
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
    overflow: hidden;
    -webkit-box-shadow: 11px 8px 20px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 11px 8px 20px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 11px 8px 20px 0px rgba(0, 0, 0, 0.75);
  }
`;

const StyledContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 3rem;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(1px);

  ${({ theme }) => theme.mq.standard} {
    width: 35%;
    top: 50%;
    bottom: auto;
    left: auto;
    right: 0;
    transform: translateY(-50%);
  }
`;

const StyledTitle = styled.h1`
  font-size: 52px;
  font-family: ${({ theme }) => theme.font.family.avanti};
  text-transform: capitalize;
  margin-bottom: 1rem;
`;

const StyledParagraph = styled.p`
  font-size: 14px;
  letter-spacing: 1px;

  ${({ theme }) => theme.mq.standard} {
    font-size: 16px;
  }
`;

const StyledOpenParagraph = styled(StyledParagraph)`
  margin-top: 2rem;
`;

const StyledLink = styled.a`
  color: #fff;
`;

const IconFlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 2rem;
`;

interface IconProps {
  isSaved: boolean;
}

const StyledIcon = styled(ReactSVG)<IconProps>`
  fill: ${({ isSaved }) => (isSaved ? '#cb6e61' : '#fff')};
  width: 25px;
  height: 25px;
  cursor: pointer;
  margin-right: 2rem;
`;

interface Props {}

type ConnectedProps = Props & RouteComponentProps<any> & LinkStateProps;

const PhotoPage: React.FC<ConnectedProps> = ({ history, match, query }) => {
  const [currentPhoto, setCurrentPhoto] = useState<any[] | undefined>(undefined);
  const [loadError, setLoadError] = useState<string | null>(null);

  const [isSaved, setSaved] = useState<boolean>(false);

  // const loadLikedImages = (): string[] => {
  //   const storedLocal: string | null = localStorage.getItem('liked');
  //   if (storedLocal) {
  //     return JSON.parse(storedLocal);
  //   }
  // };

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { hits }
        } = await axios.get(
          `${API_URL}/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&id=${match.params.id}`
        );
        console.log(hits);
        setCurrentPhoto(hits);
      } catch (error) {
        setLoadError(error);
      }
    })();
  }, []);

  useEffect(() => {}, [localStorage]);

  const saveImage = (id: string): void => {
    let liked: any[];
    const storedLocal: string | null = localStorage.getItem('liked');

    if (storedLocal) {
      liked = JSON.parse(storedLocal);
      localStorage.removeItem('liked');
    } else {
      liked = [];
    }

    liked.push(id);
    localStorage.setItem('liked', JSON.stringify(liked));
  };

  const removeSavedImage = (id: string): void => {
    const storedLikedImages: string | null = localStorage.getItem('liked');
    if (storedLikedImages) {
      const updatedCart: string[] = JSON.parse(storedLikedImages).filter(
        (item: string) => item !== id
      );
      localStorage.setItem('liked', JSON.stringify(updatedCart));
    }
  };

  return (
    <StyledWrapper>
      {loadError ? (
        <p>There was a problem with loading this image</p>
      ) : (
        <>
          {currentPhoto ? (
            <>
              <ProjectIcons
                onBackClick={(): void =>
                  query ? history.push(`/photos-page/${query}?page=1`) : history.push('/')
                }
                onHeartClick={() => {}}
              />
              <StyledImage src={currentPhoto[0].largeImageURL} />
              <StyledContentWrapper>
                <StyledTitle>{currentPhoto[0].tags}</StyledTitle>
                <StyledParagraph>
                  Likes: {isSaved ? parseInt(currentPhoto[0].likes) + 1 : currentPhoto[0].likes}
                </StyledParagraph>
                <StyledParagraph>Comments: {currentPhoto[0].comments}</StyledParagraph>
                <StyledLink href={currentPhoto[0].pageURL} download='true'>
                  <StyledOpenParagraph>Open this image on Pixabay.com</StyledOpenParagraph>
                </StyledLink>
                <IconFlexWrapper>
                  <StyledIcon
                    src={heart}
                    isSaved={isSaved}
                    onClick={
                      isSaved
                        ? () => {
                            removeSavedImage(match.params.id);
                            setSaved(false);
                          }
                        : () => {
                            saveImage(match.params.id);
                            setSaved(true);
                          }
                    }
                  />
                  <StyledParagraph>
                    {isSaved ? 'Unlike this photo' : 'Save in liked photos'}
                  </StyledParagraph>
                </IconFlexWrapper>
              </StyledContentWrapper>
            </>
          ) : (
            <Spinner />
          )}
        </>
      )}
    </StyledWrapper>
  );
};

interface LinkStateProps {
  query: string | null;
}

const mapStateToProps = ({ categoryImagesReducer: { query } }: AppState): LinkStateProps => {
  return { query };
};

const PhotoPageWithRouter = withRouter(PhotoPage);

export default connect(mapStateToProps)(PhotoPageWithRouter);
