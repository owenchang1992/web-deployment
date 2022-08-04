import styled from 'styled-components';
import Card from '../../components/cards/BasicCard';

export const ContactContainer = styled(Card)`
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
    border: 2px solid rgba(200, 200, 200, 0.7);
    resize: none;
    color: ${({ theme }) => theme.palette.white};
  }
`;
