import React from 'react';
import styled from 'styled-components';
import Button from '../components/atoms/Button/Button';

interface Props {}

interface WrapperProps {
  imageUrl: string;
}

const StyledWrapper = styled.div<WrapperProps>`
  width: 100%;
  min-height: 100vh;
  color: #000;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    background-image: url(${({ imageUrl }) => imageUrl});
    top: 0;
    left: 0;
    background-size: cover;
  }
`;

const StyledContentWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  ${({ theme }) => theme.mq.standard} {
    width: 65%;
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
    -webkit-box-shadow: 11px 8px 20px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 11px 8px 20px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 11px 8px 20px 0px rgba(0, 0, 0, 0.75);
  }
`;

const ButtonWrapper = styled.div`
  width: 90%;
  height: 50px;
  position: absolute;
  bottom: 0;
  left: 0;

  ${({ theme }) => theme.mq.standard} {
    width: 40%;
    height: 80px;
  }
`;

const PhotosPage: React.FC<Props> = () => {
  return (
    <StyledWrapper
      imageUrl={
        'https://pixabay.com/get/57e3d0434b55a914f6da8c7dda79367d1038d9ed53546c48702778d59244c359ba_1280.jpg'
      }
    >
      <StyledContentWrapper>
        <p>wtf</p>
        <ButtonWrapper>
          <Button text={'test'} />
        </ButtonWrapper>
      </StyledContentWrapper>
    </StyledWrapper>
  );
};

export default PhotosPage;
