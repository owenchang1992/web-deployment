import styled from 'styled-components';

const HeaderContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  min-height: 600px;

  > h5 {
    font-size: 1.2rem;
  }

  .text--light: {
    color: ${({ theme }) => theme.palette.light};
  }

  .button--group {
    margin-top: 2.5rem;
    display: flex;
    gap: 1.2rem;
  }

  .header--socials {
    width: 1.3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    position: absolute;
    left: 0;
    bottom: 5rem;

    > a {
      display: flex;
      font-size: 1.3rem
      align-items: center;
    }

    ::after,
    ::before {
      content: '';
      width: 1px;
      height: 2rem;
      background: ${({ theme }) => theme.palette.primary.main};
    }
  }

  .me--container {
    margin-top: 4rem;
    background: linear-gradient(${({ theme }) =>
      theme.palette.primary.main}, transparent);
    border-radius: 12rem 12rem 0 0;
    padding: 5rem 1.5rem 1.5rem 1.5rem;
    overflow: hiden;
  }

  ${({ theme }) => theme.breakpoints.down('md')(`height: calc(100vh - 3rem;`)}
`;

export default HeaderContainer;
