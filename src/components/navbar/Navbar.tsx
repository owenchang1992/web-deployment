import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import Link from 'next/link';
import StyledNavBar, { StyledLink } from './StyledNavbar';

enum NavListType {
  HOME = 'home',
  ABOUT = 'about',
  EXPERIENCE = 'experience',
  CONTACT = 'contact',
}

const Navbar = () => {
  const [currentNav, setCurrentNav] = useState<NavListType>(NavListType.HOME);
  const getActive = (type: NavListType) =>
    currentNav === type ? 'active' : '';

  return (
    <StyledNavBar>
      <Link href="/#">
        <StyledLink
          className={`${getActive(NavListType.HOME)}`}
          onClick={() => setCurrentNav(NavListType.HOME)}
        >
          <AiOutlineHome />
        </StyledLink>
      </Link>
      <Link href="#about">
        <StyledLink
          className={`${getActive(NavListType.ABOUT)}`}
          onClick={() => setCurrentNav(NavListType.ABOUT)}
        >
          <AiOutlineUser />
        </StyledLink>
      </Link>
      <Link href="#experience">
        <StyledLink className={`${getActive(NavListType.EXPERIENCE)}`}>
          <BiBook />
        </StyledLink>
      </Link>
      <Link href="#contact">
        <StyledLink
          className={`${getActive(NavListType.CONTACT)}`}
          onClick={() => setCurrentNav(NavListType.CONTACT)}
        >
          <BiMessageSquareDetail />
        </StyledLink>
      </Link>
    </StyledNavBar>
  );
};

export default Navbar;
