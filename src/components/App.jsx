import './App.css';
import Profile from '../components/Profile/Profile';
import userData from '../userData.json';
import FriendList from './FriendList/FriendList';
import friends from '../friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../transactions.json';



const App = () => {
  return (
    <>
      <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
        />
      </div>

      <div>  <FriendList friends={friends} /></div>
      <div>
        <TransactionHistory items={transactions} /></div>
    </>
  );
};


export default App;