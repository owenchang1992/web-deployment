import React, { useState, useEffect } from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import Link from 'next/link';
import { useRouter } from 'next/router';
import StyledNavBar, { StyledLink } from './StyledNavbar';

enum NavListType {
  HOME = 'home',
  ABOUT = 'about',
  EXPERIENCE = 'experience',
  CONTACT = 'contact',
}

const Navbar = () => {
  const [currentNav, setCurrentNav] = useState<NavListType>(NavListType.HOME);
  const router = useRouter();
  const getActive = (type: NavListType) =>
    currentNav === type ? 'active' : '';

  useEffect(() => {
    // init currentNav
    setCurrentNav(router.asPath.replace('/#', '') as NavListType);
  }, [router.asPath]);

  useEffect(() => {
    // handle url and anchor on scroll
    const sections = Array.from(document.querySelectorAll('section')).reverse();
    const adjustCurrentNav = () => {
      const targetElement = sections.find((element) => {
        if (
          document.documentElement.scrollTop >=
          element.offsetTop -
            Number(
              getComputedStyle(element)
                .getPropertyValue('margin-top')
                .replace('px', '')
            )
        ) {
          return true;
        }
        return false;
      });

      if (targetElement && targetElement.id !== currentNav) {
        setCurrentNav(targetElement.id as NavListType);
      }
    };

    document.addEventListener('wheel', adjustCurrentNav);

    return () => document.removeEventListener('wheel', adjustCurrentNav);
  }, [currentNav, setCurrentNav]);

  return (
    <StyledNavBar>
      <Link href="/#home">
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
