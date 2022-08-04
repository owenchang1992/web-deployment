import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const HeaderSocials = () => (
  <div className="header--socials">
    <a
      href="https://www.linkedin.com/in/owen-chang-973886134/"
      target="_blank"
      rel="noreferrer"
    >
      <BsLinkedin />
    </a>
    <a href="https://github.com/owenchang1992" target="_blank" rel="noreferrer">
      <BsGithub />
    </a>
  </div>
);

export default HeaderSocials;
