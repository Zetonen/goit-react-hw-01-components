import styled from '@emotion/styled';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px 15px;
  background-color: #ffffff;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);
  font-size: 24px;
  font-weight: 500;
  border-radius: 10px;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const FriendsAvatar = styled.img`
  width: 48px;
`;

export const FriendsStatus = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({isOnline})=> isOnline ? '#4caf50': '#ff4f55'};
`;
