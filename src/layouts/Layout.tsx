import React from 'react';
import { ThemeProvider } from 'styled-components';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Nav from '../components/nav/Nav';
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
