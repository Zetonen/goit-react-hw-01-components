import styled from '@emotion/styled';

export const StatisticsCard = styled.section`
    width: 350px;
    margin: 0 auto;
    margin-bottom: 100px;
`
export const StatisticsTitle = styled.h2`
  padding: 25px 0;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.5;
  color: #575d62;
  text-align: center;
  text-transform: uppercase;
  background-color: #ffffff;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  border-top: 1px solid #c8c7c7d1;
`;
export const Item = styled.li`
  flex-basis: 33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 15px;
  font-size: 18px;
  color: #ffffff;

  &:not(:last-child) {
    border-right: 1px solid #c8c7c7d1;
  }
`;