import React, { Suspense } from 'react';
import { PrimaryButton } from '../../components/button/Button';
import HeaderSocials from './HeaderSocials';
import HeaderContainer from './StyledHeader';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

const Header = () => (
  <HeaderContainer id="home">
    <h5 className="text--light">Frontend Developer</h5>
    <h1>Owen Chang</h1>

    <div className="me--container">
      <Suspense fallback={<div>Loading</div>}>
        <Spline scene="https://prod.spline.design/50y6ON9iXyUKU-QI/scene.splinecode" />
      </Suspense>
    </div>

    <div className="button--group">
      <a href="#contact">
        <PrimaryButton>{`Let's Talk`}</PrimaryButton>
      </a>
    </div>
    <HeaderSocials />
  </HeaderContainer>
);

export default Header;
