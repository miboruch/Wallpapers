import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  cursor: pointer;
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  position: absolute;
  top: 2rem;
  right: 2rem;
  margin: 0 0.5rem;
  :focus {
    outline: none;
  }
`;

const InnerButton = styled.div`
  position: relative;
  ::before,
  ::after {
    content: '';
    width: 24px;
    height: 1px;
    background: #fff;
    position: absolute;
    left: 0;
    transition: all 0.5s ease;
    top: 0;
  }
  ::before {
    transform: rotate(40deg);
  }
  ::after {
    transform: rotate(-40deg);
  }
`;

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
