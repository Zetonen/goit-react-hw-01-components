import PropTypes from 'prop-types';

import { Description } from 'components/Profile/Description/Description';
import { Stats } from 'components/Profile/Stats/Stats';
import { Card } from './Profile.styled';
export const Profile = ({ data }) => {
  const { username, tag, location, avatar, stats } = data;
  return (
    <Card>
      <Description
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <Stats stats={stats} />
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
