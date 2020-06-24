import React from 'react';
import { StyledButton } from './Button.styles';

interface Props {
  text: string;
  onClick?: (history: any) => void;
}

const Button: React.FC<Props> = ({ text, onClick }) => {
  return (
    <StyledButton type='button' onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default Button;
