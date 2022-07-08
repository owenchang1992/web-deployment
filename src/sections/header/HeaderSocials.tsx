import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const HeaderSocials = () => (
  <div className="header-socials">
    <a href="https://linkedin.com" target="_blank" rel="noreferrer">
      <BsLinkedin />
    </a>
    <a href="https://github.com" target="_blank" rel="noreferrer">
      <BsGithub />
    </a>
  </div>
);

export default HeaderSocials;
