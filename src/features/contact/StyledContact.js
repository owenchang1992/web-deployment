import styled from 'styled-components';

export const ContactContainer = styled.div`
  max-width: 40rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;
`;

export const EmailForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  width: 100%;

  > input,
  textarea {
    width: 100%;
    font-size: 1rem;
    padding: 1.2rem;
    border-radius: 0.5rem;
    background: transparent;
    border: 2px solid ${({ theme }) => theme.palette.primary.variant};
    resize: none;
    color: ${({ theme }) => theme.palette.white};
  }
`;
