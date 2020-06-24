import React, { useContext } from 'react';
import { SavedImagesContext } from '../../../providers/SavedImagesContext';
import heart from '../../../assets/icons/heart.svg';
import { ButtonWrapper, StyledIcon } from './SavedIcon.styles';

const SavedIcon: React.FC<{}> = () => {
  const { setOpen } = useContext(SavedImagesContext);
  return (
    <ButtonWrapper onClick={() => setOpen()}>
      <StyledIcon src={heart} />
    </ButtonWrapper>
  );
};

export default SavedIcon;
