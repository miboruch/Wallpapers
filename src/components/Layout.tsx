import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

interface Props {
  appTheme?: string;
}

const Layout: React.FC<Props> = ({ appTheme, children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Layout;
