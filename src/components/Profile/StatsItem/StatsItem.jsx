import PropTypes from 'prop-types';

import { Item, Quantity } from './StatsItem.styled';
export const StatsItem = ({ label, quantity }) => {
  label = label[0].toUpperCase() + label.slice(1);
  return (
    <Item>
      <span>{label}</span>
      <Quantity>{quantity}</Quantity>
    </Item>
  );
};

StatsItem.propTypes = {
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};
