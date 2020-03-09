import React, { useContext } from 'react';
import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import heart from '../../../assets/icons/heart.svg';
import BackButton from '../../atoms/BackButton/BackButton';
import { SavedImagesContext } from '../../../providers/SavedImagesContext';
import SavedIcon from '../../atoms/SavedIcon/SavedIcon';

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
  z-index: 90;
`;

interface Props {
  onBackClick: () => void;
  isPhotoPage?: boolean;
}

const ProjectIcons: React.FC<Props> = ({ onBackClick, isPhotoPage }) => {
  return (
    <IconWrapper>
      {isPhotoPage ? null : <SavedIcon />}
      <ButtonWrapper>
        <BackButton onClick={onBackClick} />
      </ButtonWrapper>
    </IconWrapper>
  );
};

export default ProjectIcons;
