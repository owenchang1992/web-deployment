import React from 'react';
import Image from 'next/image';
import { BasicButton, PrimaryButton } from '../../components/Button';
import HeaderSocials from './HeaderSocials';
import HeaderContainer from './StyledHeader';

const Header = () => (
  <HeaderContainer>
    <h5>Welcome</h5>
    <h1>Owen Chang</h1>
    <h5 className="text-light">Frontend Developer</h5>

    <div className="button-group">
      <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
        <BasicButton>Donwload CV</BasicButton>
      </a>
      <a href="#contact">
        <PrimaryButton>{`Let's Talk`}</PrimaryButton>
      </a>
    </div>

    <div className="me-container">
      <Image src="/me.png" height="350" width="220" />
    </div>
    <HeaderSocials />
  </HeaderContainer>
);

export default Header;
