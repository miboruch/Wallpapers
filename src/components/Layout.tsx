import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import GlobalStyle from '../styles/GlobalStyle';

interface Props {
  appTheme?: string;
}

const Layout: React.FC<Props> = ({ appTheme, children }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};

export default Layout;
