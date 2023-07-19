import styled from "@emotion/styled";
export const Card=styled.div`
    width: 300px;
    margin: 0 auto;
    margin-bottom: 100px;
    background-color: #fff;
    border-radius: 4px;
`;

export const DescriptionProfile = styled.div`
  padding: 40px 0;
`;

export const Avatar = styled.img`
  width: 150px;
  height: 150px;
  margin: 0 auto;
  margin-bottom: 20px;
  border-radius: 50%;
`;

export const Title = styled.h2`
  font-size: 24px;
  line-height: 1.5;
  text-align: center;
`;

export const Text = styled.p`
  margin-top: 10px;
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  color: #bbc2ca;
`;

export const StatsList = styled.ul`
    display: flex;
    justify-content: center;
    background-color: #f3f6f9;
    border-top: 1px solid #c8c7c7d1;
`


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

export const Label = styled.span`
  text-transform: capitalize;
`;

export const Quantity = styled.span`
  font-weight: bold;
  color: #000000;
`;