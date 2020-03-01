import React from 'react';
import styled from 'styled-components';

interface Props {
  text: string;
  onClick?: (history: any) => void;
}

const StyledButton = styled.button`
  width: 100%;
  height: 50px;
  background: ${({ theme }) => theme.colors.red};
  color: #fff;
  font-family: ${({ theme }) => theme.font.family.avanti};
  letter-spacing: 1px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  text-transform: uppercase;
`;

const Button: React.FC<Props> = ({ text, onClick }) => {
  return (
    <StyledButton type='button' onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default Button;
