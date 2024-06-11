import {
  Container,
  FriendList,
  Profile,
  TransactionHistory,
} from "./components";
import userData from "./data/userData.json";
import friendList from "./data/friendList.json";
import transactions from "./data/transactions.json";

const App = () => {
  return (
    <>
      <Container>
        <Profile {...userData} />
        <FriendList friendList={friendList} />
        <TransactionHistory transactions={transactions} />
      </Container>
    </>
  );
};

export default App;
