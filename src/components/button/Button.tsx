import styled from 'styled-components';

export const BasicButton = styled.div`
  display: inline-block;
  color: ${(props) => props.theme.palette.primary.main};
  padding: 0.75rem 1.2rem;
  border-radius: 0.4rem;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  transition: ${({ theme }) => theme.transition.main};
  width: max-content;

  :hover {
    background: ${({ theme }) => theme.palette.white};
    color: ${({ theme }) => theme.palette.bg.main};
    border-color: transparent;
  }
`;

export const PrimaryButton = styled(BasicButton)`
  background: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.bg.main};
`;
