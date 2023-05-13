import styled from '@emotion/styled';

export const Stats = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const Item = styled.li`
  width: 120px;
  font-size: 20px;
  font-weight: 500;

  &:last-child {
    width: 230px;
  }
`;

export const Value = styled.span`
  color: tomato;
`;
