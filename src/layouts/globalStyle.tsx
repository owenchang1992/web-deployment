import styled from 'styled-components';
import theme from './theme';

const container = {
  width: {
    xs: '90%',
    sm: '90%',
    md: '86%',
    lg: '75%',
    xl: '65%',
  },
};

export const StyledMain = styled.div`
  height: 100vh;
  color: ${theme.palette.white};

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
    margin-top: 5rem;
    scroll-margin-top: 5rem;

    ${theme.breakpoints.down('md')(`
      margin-top: 3rem;
      scroll-margin-top: 3rem;
    `)}

    &:last-child {
      padding-bottom: 4rem;
    }

    &#home {
      margin-top: 0px;
    }

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
  margin: 0 auto 6rem auto;
  max-width: 1200px;
  padding-top: 5rem;

  ${theme.breakpoints.between('xs', 'sm')(`width: ${container.width.xs}`)}
  ${theme.breakpoints.between('sm', 'md')(`width: ${container.width.sm}`)}
  ${theme.breakpoints.between('md', 'lg')(`width: ${container.width.md}`)}
  ${theme.breakpoints.between('lg', 'xl')(`width: ${container.width.lg}`)}
  ${theme.breakpoints.up('xl')(`width: ${container.width.xl}`)}
`;
