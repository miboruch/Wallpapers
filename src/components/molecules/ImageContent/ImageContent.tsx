import React from 'react';
import {
  StyledImage,
  StyledContentBox,
  StyledTitle,
  StyledParagraph,
  StyledLine
} from './ImageContent.styles';

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
