import { UserCard } from "./components/UserCard";
import "./styles.css";

const user = {
  id: 1,
  name: "テスト",
  email: "123@aaa.com",
  address: "ADDRESS",
};

export default function App() {
  return (
    <div className="App">
      <UserCard user={user} />
    </div>
  );
}
