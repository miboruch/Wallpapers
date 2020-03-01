import React from 'react';
import styled from 'styled-components';
import './App.css';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

interface StyledWrapperProps {
  isLogged: boolean;
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  width: 100%;
  height: 100vh;
  border: 0;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  color: #fff;
  overflow: hidden;
`;

function App() {
  return (
    <Layout>
      <StyledWrapper isLogged={true}>
        <Router>
          <Switch>
            <Route path='/' exact component={LandingPage} />
          </Switch>
        </Router>
      </StyledWrapper>
    </Layout>
  );
}

export default App;
