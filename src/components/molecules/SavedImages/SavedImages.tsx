import React, { useContext } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { AppState } from '../../../reducers/rootReducer';
import { SavedImagesContext } from '../../../providers/SavedImagesContext';
import CloseButton from '../../atoms/CloseButton/CloseButton';
import ImageCart from '../ImageCart/ImageCart';

interface OpenProps {
  isOpen: boolean;
}

const StyledWrapper = styled.div<OpenProps>`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  z-index: 110;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition: opacity 0.7s ease, visibility 0.7s ease;

  ${({ theme }) => theme.mq.standard} {
    width: 50%;
    right: 0;
    left: auto;
  }
`;

const CloseButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

const StyledHeader = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 3rem 0;
`;

const StyledHeading = styled.h1`
  font-size: 28px;
  font-family: ${({ theme }) => theme.font.family.avanti};
  letter-spacing: 2px;
`;

const StyledImagesWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const SavedImages: React.FC<LinkStateProps> = ({ savedImages }) => {
  const { isOpen, setBoxState } = useContext(SavedImagesContext);

  return (
    <StyledWrapper isOpen={isOpen}>
      <CloseButtonWrapper>
        <CloseButton setBoxState={setBoxState} />
      </CloseButtonWrapper>
      <StyledHeader>
        <StyledHeading>Saved images</StyledHeading>
      </StyledHeader>
      <StyledImagesWrapper>
        {savedImages.map(item => (
          <ImageCart
            key={item.id}
            id={item.id}
            imageUrl={item.webFormatURL}
            closeBoxState={() => setBoxState(false)}
          />
        ))}
      </StyledImagesWrapper>
    </StyledWrapper>
  );
};

interface LinkStateProps {
  savedImages: any[];
}

const mapStateToProps = ({ savedImagesReducer: { savedImages } }: AppState): LinkStateProps => {
  return { savedImages };
};

export default connect(mapStateToProps)(SavedImages);
