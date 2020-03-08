import React, { useContext } from 'react';
import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import heart from '../../../assets/icons/heart.svg';
import BackButton from '../../atoms/BackButton/BackButton';
import { SavedImagesContext } from '../../../providers/SavedImagesContext';

const ButtonWrapper = styled.div`
  width: 60px;
  cursor: pointer;
  display: flex;
  justify-content: center;
`;

const IconWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
`;

const StyledIcon = styled(ReactSVG)`
  fill: #fff;
  width: 25px;
  height: 25px;
`;

interface Props {
  onBackClick: () => void;
  onHeartClick: () => void;
}

const ProjectIcons: React.FC<Props> = ({ onBackClick, onHeartClick }) => {
  const { setOpen } = useContext(SavedImagesContext);

  return (
    <IconWrapper>
      <ButtonWrapper onClick={() => setOpen()}>
        <StyledIcon src={heart} />
      </ButtonWrapper>
      <ButtonWrapper>
        <BackButton onClick={onBackClick} />
      </ButtonWrapper>
    </IconWrapper>
  );
};

export default ProjectIcons;
