import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import data from 'data/user.json';
import statis from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <>
      <Profile data={data} />
      <Statistics title="Upload stats" statis={statis} />
      <FriendList data={friends} />
      <TransactionHistory data={transactions} />
    </>
  );
};
