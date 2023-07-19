import PropTypes from 'prop-types';

import {
  Card,
  Avatar,
  Title,
  Text,
  DescriptionProfile,
  StatsList,
  Item,
  Quantity,
  Label,
} from './Profile.styled';
export const Profile = ({ data }) => {
  const { username, tag, location, avatar, stats } = data;
  const { followers, views, likes } = stats;
  return (
    <Card>
      <DescriptionProfile>
        <Avatar src={avatar} alt={username} />
        <Title>{username}</Title>
        <Text>@{tag}</Text>
        <Text>{location}</Text>
      </DescriptionProfile>
      <StatsList>
        <Item>
          <Label>followers</Label>
          <Quantity>{followers}</Quantity>
        </Item>
        <Item>
          <Label>views</Label>
          <Quantity>{views}</Quantity>
        </Item>
        <Item>
          <Label>likes</Label>
          <Quantity>{likes}</Quantity>
        </Item>
      </StatsList>
    </Card>
  );
};

Profile.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
