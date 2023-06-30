import PropTypes from 'prop-types';

import { Friend } from './Friend/Friend';
import { FriendsBox } from './FriendList.styled';
export const FriendList = ({ data }) => {
  return (
    <FriendsBox>
      {data.map(({ id, isOnline, avatar, name }) => {
        return (
          <Friend key={id} isOnline={isOnline} avatar={avatar} name={name} />
        );
      })}
    </FriendsBox>
  );
};

FriendList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
