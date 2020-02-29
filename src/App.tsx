import React from 'react';
import styled from 'styled-components';
import './App.css';
import Layout from './components/Layout';

interface StyledWrapperProps {
  isLogged: boolean;
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  width: 100px;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.main};
  color: ${({ isLogged }) => (isLogged ? 'yellow' : 'blue')};
`;

function App() {
  return (
    <Layout>
      <StyledWrapper isLogged={true}>hello friend</StyledWrapper>
    </Layout>
  );
}

export default App;
