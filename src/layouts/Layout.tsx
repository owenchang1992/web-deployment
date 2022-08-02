import React from 'react';
import { ThemeProvider } from 'styled-components';
import { StyledMain, StyledContainer } from './globalStyle';
import theme from './theme';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <StyledMain>
      <StyledContainer>{children}</StyledContainer>
    </StyledMain>
  </ThemeProvider>
);

export default Layout;
