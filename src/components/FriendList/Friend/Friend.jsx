import PropTypes from 'prop-types';

import { FriendItem, FriendsAvatar, FriendsStatus } from './Friend.styled';
export const Friend = ({ isOnline, avatar, name }) => {
  return (
    <FriendItem>
      <FriendsStatus isOnline={isOnline} />
      <FriendsAvatar src={avatar} alt={name} />
      <p>{name}</p>
    </FriendItem>
  );
};

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
