import { StaticImageData } from 'next/image';
import styled from 'styled-components';
import theme from './theme';

type LayoutsProps = {
  bgImage: StaticImageData;
};

const container = {
  width: {
    xs: '90%',
    sm: '90%',
    md: '86%',
    lg: '75%',
    xl: '65%',
  },
};

export const StyledMain = styled.div<LayoutsProps>`
  height: 100vh;
  color: ${theme.palette.white};
  background-image: url(${(props) => props.bgImage.src});

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 500;
  }

  h1 {
    font-size: 2.5rem;
  }

  section {
    margin-top: 8rem;

    > h2,
    > h5 {
      text-align: center;
      color: ${theme.palette.light};
    }

    > h2 {
      color: ${theme.palette.primary.main};
      margin-bottom: 3rem;
    }
  }

  .text-light {
    color: ${theme.palette.light};
  }

  a {
    color: ${theme.palette.primary.main};
    transition: ${theme.transition.main};
  }

  a:hover {
    color: ${theme.palette.white};
  }

  img {
    display: block;
    width: 100%;
    object-fit: cover;
  }
`;

export const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;

  ${theme.breakpoints.between('xs', 'sm')(`width: ${container.width.xs}`)}
  ${theme.breakpoints.between('sm', 'md')(`width: ${container.width.sm}`)}
  ${theme.breakpoints.between('md', 'lg')(`width: ${container.width.md}`)}
  ${theme.breakpoints.between('lg', 'xl')(`width: ${container.width.lg}`)}
  ${theme.breakpoints.up('xl')(`width: ${container.width.xl}`)}
`;
