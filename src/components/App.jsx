// import { Profile } from "./Profile/Profile";
// import user from "../../src/user.json";

// export const App = () => {
//   return ( 
//     <Profile username={user.username} tag={user.tag} location={user.location}
//       avatar={user.avatar } stats={user.stats} />
   
//   );
// };

import { Statistics } from './Statistics/Statistics';
import data from '../../src/data.json';
import { FriendList } from './FriendList/FriendList';
import friends from '../../src/friends.json';
import { Profile } from './Profile/Profile';
import userData from '../../src/user.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../../src/transactions.json';

export const App = () => {
  return (
    <div>
      <Statistics stats={data} title="UPLOAD STATS" />
      <FriendList friends={friends} />
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <TransactionHistory items={transactions} />
    </div>
  );
};