import React from 'react';
import BackButton from '../../atoms/BackButton/BackButton';
import SavedIcon from '../../atoms/SavedIcon/SavedIcon';
import { ButtonWrapper, IconWrapper } from './ProjectIcons.styles';

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
