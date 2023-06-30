import styled from '@emotion/styled';

export const Item = styled.li`
  flex-basis: 33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 15px;
  font-size: 18px;
  color: #bbc2ca;

  &:not(:last-child) {
    border-right: 1px solid #c8c7c7d1;
  }
`;

export const Quantity = styled.span`
  font-weight: bold;
  color: #000000;
`;
