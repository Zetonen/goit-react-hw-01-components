import PropTypes from 'prop-types';

import { StatsItem } from 'components/Profile/StatsItem/StatsItem';
import { StatsList } from './Stats.styled';
export const Stats = ({ stats }) => {
  const liList = [];
  for (const key in stats) {
    liList.push(<StatsItem key={key} label={key} quantity={stats[key]} />);
  }
  return <StatsList>{liList}</StatsList>;
};

Stats.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
