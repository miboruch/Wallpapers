import React from 'react';
import styled from 'styled-components';

interface ImageProps {
  url: string;
}

const StyledImage = styled.div<ImageProps>`
  background-image: url(${({ url }) => url});
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.3);
  background-blend-mode: overlay;
  width: 100%;
  height: 100vh;
  position: relative;
  -webkit-filter: drop-shadow(40px 40px 40px rgba(0, 0, 0, 0.9));
  filter: drop-shadow(40px 40px 40px rgba(0, 0, 0, 0.9));
`;

const StyledContentBox = styled.section`
  width: 100%;
  position: absolute;
  bottom: 200px;
  left: 0;
  padding: 0 2rem;
`;

const StyledTitle = styled.h1`
  font-size: 42px;
`;

const StyledParagraph = styled.p`
  width: 90%;
  font-size: 14px;
  letter-spacing: 1px;
  margin-top: 1rem;
`;

const StyledLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #fff;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 2px;
    left: 0;
    top: -1px;
    background-color: ${({ theme }) => theme.colors.red};
  }
`;

interface Props {
  imageUrl: string;
  title: string;
  description: string;
}

const ImageContent: React.FC<Props> = ({ imageUrl, title, description }) => {
  return (
    <StyledImage url={imageUrl}>
      <StyledContentBox>
        <StyledTitle>{title}</StyledTitle>
        <StyledLine />
        <StyledParagraph>{description}</StyledParagraph>
      </StyledContentBox>
    </StyledImage>
  );
};

export default ImageContent;
