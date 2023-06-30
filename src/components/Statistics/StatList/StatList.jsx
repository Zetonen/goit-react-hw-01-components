import PropTypes from 'prop-types';

import { StatItem } from '../StatItem/StatItem';
import { List } from './StatList.styled';
import { getRandomHexColor } from 'components/getRandomHexColor';
export const StatList = ({ statis }) => {
  return (
    <List>
      {statis.map(({ id, label, percentage }) => {
        return (
          <StatItem
            style={{ backgroundColor: getRandomHexColor() }}
            key={id}
            label={label}
            percentage={percentage}
          />
        );
      })}
    </List>
  );
};

StatList.propTypes = {
  statis: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
