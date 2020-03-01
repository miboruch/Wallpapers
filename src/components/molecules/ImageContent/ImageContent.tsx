import React from 'react';
import styled from 'styled-components';

interface ImageProps {
  url: string;
}

const StyledImage = styled.div<ImageProps>`
  background-image: url(${({ url }) => url});
  width: 200px;
  height: 100px;
`;

interface Props {
  imageUrl: string;
}

const ImageContent: React.FC<Props> = ({ imageUrl }) => {
  return <StyledImage url={imageUrl} />;
};

export default ImageContent;
