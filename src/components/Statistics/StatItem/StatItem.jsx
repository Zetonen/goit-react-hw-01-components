import PropTypes from 'prop-types';

import { Item } from './StatItem.styled';
export const StatItem = ({ label, percentage, style }) => {
  return (
    <Item style={style}>
      <span>{label}</span>
      <span>{percentage}</span>
    </Item>
  );
};

StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
