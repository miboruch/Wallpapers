import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../../reducers/rootReducer';
import { SavedImagesContext } from '../../../providers/SavedImagesContext';
import CloseButton from '../../atoms/CloseButton/CloseButton';
import ImageCart from '../ImageCart/ImageCart';
import {
  StyledWrapper,
  CloseButtonWrapper,
  StyledHeading,
  StyledHeader,
  StyledImagesWrapper
} from './SavedImages.styles';

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
