import styled from 'styled-components';

const Card = styled.div`
    background: ${({ theme }) => theme.palette.bg.variant};
    padding: 2.4rem;
    border-radius 2rem;
    overflow: hidden;
    border: 1px solid transparent;

    &:hover {
      box-shadow: 0 20px 25px -5px rgb(0 0 0/0.1),0 8px 10px -6px rgb(0 0 0/0.1);
    }
`;

export default Card;
