import React from 'react';
import styled from 'styled-components';
import Button from '../components/atoms/Button/Button';

interface Props {}

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const StyledHeader = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  margin-top: 2rem;
`;

const StyledTitle = styled.p`
  font-size: ${({ theme }) => theme.font.size.m};
  font-weight: 500;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 1rem;
  left: 0;
`;

const LandingPage: React.FC<Props> = () => {
  return (
    <StyledWrapper>
      <StyledHeader>
        <StyledTitle>Choose category</StyledTitle>
      </StyledHeader>
      <ButtonWrapper>
        <Button text={'Open images'} />
      </ButtonWrapper>
    </StyledWrapper>
  );
};

export default LandingPage;
