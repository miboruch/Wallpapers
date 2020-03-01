import React from 'react';
import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import backIcon from '../../../assets/icons/back.svg';

interface Props {}

const StyledWrapper = styled.div`
  width: 50px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.2);
  border-bottom-right-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  cursor: pointer;
`;

const StyledIcon = styled(ReactSVG)`
  fill: #fff;
  width: 15px;
  height: 15px;
  transform: translateX(-3px) rotate(180deg);
`;

const BackButton: React.FC<Props> = () => {
  return (
    <StyledWrapper>
      <StyledIcon src={backIcon} />
    </StyledWrapper>
  );
};

export default BackButton;
