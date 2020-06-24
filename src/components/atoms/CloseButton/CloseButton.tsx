import React from 'react';
import { ButtonWrapper, InnerButton } from './CloseButton.styles';

interface Props {
  setBoxState: (value: boolean) => void;
}

const CloseButton: React.FC<Props> = ({ setBoxState }) => {
  return (
    <ButtonWrapper type='button' onClick={() => setBoxState(false)}>
      <InnerButton />
    </ButtonWrapper>
  );
};

export default CloseButton;
