import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import GlobalStyle from '../styles/GlobalStyle';
import Search from './molecules/Search/Search';

interface Props {
  appTheme?: string;
}

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  border: 0;
  color: #fff;
  overflow: hidden;
`;

const Layout: React.FC<Props> = ({ appTheme, children }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <StyledWrapper>{children}</StyledWrapper>
      </ThemeProvider>
    </>
  );
};

export default Layout;
