import React from "react";
import { ThemeProvider } from "styled-components";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Nav from "../components/nav/Nav";
import { StyledLayout } from "./StyledLayout";
import theme from "./theme";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <StyledLayout>
      <Header />
      <Nav />
      {children}
      <Footer />
    </StyledLayout>
  </ThemeProvider>
);

export default Layout;
