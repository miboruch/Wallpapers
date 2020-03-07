import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router';
import { API_URL } from '../utils/constants';
import Spinner from '../components/atoms/Spinner/Spinner';
import BackButton from '../components/atoms/BackButton/BackButton';
import { AppState } from '../reducers/rootReducer';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: #2d2d2d;
`;

const ButtonWrapper = styled.div`
  width: 70px;
  height: 70px;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
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

interface Props {}

type ConnectedProps = Props & RouteComponentProps<any> & LinkStateProps;

const PhotoPage: React.FC<ConnectedProps> = ({ history, match, query }) => {
  const [currentPhoto, setCurrentPhoto] = useState<any[] | undefined>(undefined);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { hits }
        } = await axios.get(
          `${API_URL}/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&id=${match.params.id}`
        );

        setCurrentPhoto(hits);
      } catch (error) {
        setLoadError(error);
      }
    })();
  }, []);

  return (
    <StyledWrapper>
      {loadError ? (
        <p>There was a problem with loading this image</p>
      ) : (
        <>
          {currentPhoto ? (
            <>
              <ButtonWrapper
                onClick={(): void =>
                  query ? history.push(`/photos-page/${query}?page=1`) : history.push('/')
                }
              >
                <BackButton />
              </ButtonWrapper>
              <StyledImage src={currentPhoto[0].largeImageURL} />
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
