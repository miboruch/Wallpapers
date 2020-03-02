import React from 'react';
import styled from 'styled-components';

interface Props {
  imageUrl: string;
  title: string;
}

const StyledWrapper = styled.div<Props>`
  width: 200px;
  height: 140px;
  border-radius: 20px;
  position: relative;
  background-image: url(${({ imageUrl }) => imageUrl});
  overflow: hidden;
  -webkit-box-shadow: 10px 10px 24px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 10px 24px 0px rgba(0,0,0,0.75);
  box-shadow: 10px 10px 24px 0px rgba(0,0,0,0.75);
  
  &::after{
    content: '${({ title }) => title}';
    position: absolute;
    top: 0;
    right: 0;
    background-color: ${({ theme }) => theme.colors.red};
    border-bottom-left-radius: 20px;
    padding: 0 1rem;
    z-index: 2;
  }
`;

const NextImageCart: React.FC<Props> = ({ imageUrl, title }) => {
  return <StyledWrapper imageUrl={imageUrl} title={title} />;
};

export default NextImageCart;
