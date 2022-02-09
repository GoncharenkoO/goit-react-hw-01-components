import Profile from "./components/Profile";
import user from "./data/user.json";
import Statistics from "./components/Statistics";
import data from "./data/data.json";
import FriendList from "./components/FriendList";
import friends from "./data/friends.json";
import TransactionHistory from "./components/TransactionHistory";
import transactions from "./data/transactions.json";

const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};

export default App;
