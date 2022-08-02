import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline';
import { BasicButton, PrimaryButton } from '../../components/button/Button';
import HeaderSocials from './HeaderSocials';
import HeaderContainer from './StyledHeader';

const Header = () => (
  <HeaderContainer id="home">
    <h5>Welcome</h5>
    <h1>Owen Chang</h1>
    <h5 className="text--light">Frontend Developer</h5>

    <div className="button--group">
      <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
        <BasicButton>Donwload CV</BasicButton>
      </a>
      <a href="#contact">
        <PrimaryButton>{`Let's Talk`}</PrimaryButton>
      </a>
    </div>

    <Suspense fallback={null}>
      <div className="me--container">
        <Spline scene="https://prod.spline.design/50y6ON9iXyUKU-QI/scene.splinecode" />
      </div>
    </Suspense>
    <HeaderSocials />
  </HeaderContainer>
);

export default Header;
