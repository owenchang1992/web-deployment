import React from 'react';
import { ThemeProvider } from 'styled-components';
import Footer from '../sections/footer/Footer';
import Header from '../sections/header/Header';
import Nav from '../sections/nav/Nav';
import { StyledMain, StyledContainer } from './globalStyle';
import bgImage from '../../public/bg-texture.png';
import theme from './theme';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <StyledMain bgImage={bgImage}>
      <StyledContainer>
        <Header />
        <Nav />
        {children}
        <Footer />
      </StyledContainer>
    </StyledMain>
  </ThemeProvider>
);

export default Layout;
