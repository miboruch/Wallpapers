import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import GlobalStyle from '../styles/GlobalStyle';

interface Props {
  appTheme?: string;
}

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  border: 0;
  color: #fff;
  overflow: hidden;
`;

const Layout: React.FC<Props> = ({ appTheme, children }) => {
  return (
    <StyledWrapper>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledWrapper>
  );
};

export default Layout;
