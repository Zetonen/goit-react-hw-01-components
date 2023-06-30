import PropTypes from 'prop-types';

import { StatisticsCard } from './Statistics.styled';
import { Title } from './Title/Title';
import { StatList } from './StatList/StatList';
export const Statistics = ({ title, statis }) => {
  return (
    <StatisticsCard>
      <Title title={title} />
      <StatList statis={statis} />
    </StatisticsCard>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  statis: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
