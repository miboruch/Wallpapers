import React, { useContext } from 'react';
import { SavedImagesContext } from '../../../providers/SavedImagesContext';
import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import heart from '../../../assets/icons/heart.svg';

const ButtonWrapper = styled.div`
  width: 60px;
  cursor: pointer;
  display: flex;
  justify-content: center;
`;

const StyledIcon = styled(ReactSVG)`
  fill: #fff;
  width: 25px;
  height: 25px;
`;

interface Props {}

const SavedIcon: React.FC<Props> = () => {
  const { setOpen } = useContext(SavedImagesContext);
  return (
    <ButtonWrapper onClick={() => setOpen()}>
      <StyledIcon src={heart} />
    </ButtonWrapper>
  );
};

export default SavedIcon;
