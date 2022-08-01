import styled from 'styled-components';

const StyledNavbar = styled.div`
  background: rgba(0, 0, 0, 0.1);
  width: max-content;
  padding: 0.7rem 1.7rem;
  position: fixed;
  z-index: 2;
  left: 50%;
  transform: translateX(-50%);
  bottom: 2rem;
  display: flex;
  gap: 0.8rem;
  border-radius: 3rem;
  backdrop-filter: blur(15px);
`;

export const StyledLink = styled.div`
  background: transparent;
  padding: 0.6rem;
  border-radius: 50%;
  display: flex;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.palette.light};

  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }

  &.active {
    background: ${({ theme }) => theme.palette.bg.main};
    color: ${({ theme }) => theme.palette.white};
  }
`;

export default StyledNavbar;
