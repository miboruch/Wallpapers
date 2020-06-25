import React from 'react';
import backIcon from '../../../assets/icons/back.svg';
import { StyledWrapper, StyledIcon } from './BackButton.styles';

interface Props {
  onClick: () => void;
}

const BackButton: React.FC<Props> = ({ onClick }) => {
  return (
    <StyledWrapper onClick={onClick}>
      <StyledIcon src={backIcon} />
    </StyledWrapper>
  );
};

export default BackButton;
