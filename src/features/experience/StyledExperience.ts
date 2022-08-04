import styled from 'styled-components';

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
