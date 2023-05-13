import styled from '@emotion/styled';

export const SectionEl = styled.section`
  padding: 20px;
  border: 3px solid black;
  text-align: center;
  width: 450px;
  margin: 0 auto;
  border-radius: 150px;

  &:first-of-type {
    margin-top: 150px;
  }

  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const Title = styled.h2`
  font-size: 30px;
  margin-top: 0;
`;
