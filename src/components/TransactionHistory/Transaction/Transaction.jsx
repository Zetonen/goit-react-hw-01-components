import PropTypes from 'prop-types';

import { TransactionRow, TransactionItem } from './Transaction.styled';
export const Transaction = ({ type, amount, currency }) => {
  return (
    <TransactionRow>
      <TransactionItem>{type}</TransactionItem>
      <TransactionItem>{amount}</TransactionItem>
      <TransactionItem>{currency}</TransactionItem>
    </TransactionRow>
  );
};

Transaction.propTypes = {
  currency: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
