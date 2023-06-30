import PropTypes from 'prop-types';

import { Avatar, Title, Text, DescriptionProfile } from './Description.styled';
export const Description = ({ username, tag, location, avatar }) => {
  return (
    <DescriptionProfile>
      <Avatar src={avatar} alt={username} />
      <Title>{username}</Title>
      <Text>@{tag}</Text>
      <Text>{location}</Text>
    </DescriptionProfile>
  );
};

Description.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
