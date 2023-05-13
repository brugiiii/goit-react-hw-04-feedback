import styled from '@emotion/styled';

export const Options = styled.ul`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

export const Button = styled.button`
  border-radius: 10px;
  padding: 10px;
  min-width: 100px;

  font-weight: 600;
  font-size: 15px;
  background-color: tomato;
  cursor: pointer;

  &:active {
    filter: brightness(60%);
  }

  &:first-letter {
    text-transform: uppercase;
  }
`;
