import styled from 'styled-components';

export const Container = styled.div`
  gap: 2rem;
  margin: 0 auto;

  > div {
    background: ${({ theme }) => theme.palette.bg.variant};
    padding: 2.4rem;
    border-radius 2rem;
    overflow: hidden;
    border: 1px solid transparent;

    &:hover {
      box-shadow: 0 20px 25px -5px rgb(0 0 0/0.1),0 8px 10px -6px rgb(0 0 0/0.1);
    }
  }
`;

export const Frontend = styled.div`
  display: flex;
  flex-direction: column;
  align-items: centerl
  justify-content: center;

  > h3 {
    color: ${({ theme }) => theme.palette.primary.main};
    text-align: center;
    margin-bottom: 2rem;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 230px);
  grid-gap: 0.3rem;
  justify-content: center;
`;

export const Details = styled.div`
  display: flex;
  padding: 1rem;
  gap: 0.5rem;
  width: max-content;

  > div > h4 {
    white-space: nowrap;
  }

  > svg {
    margin: 4px 0;
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;

export const Describe = styled.small`
  color: ${({ theme }) => theme.palette.light};
`;
