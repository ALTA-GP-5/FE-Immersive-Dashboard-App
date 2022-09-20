import Sidebar from "../components/Sidebar";
import ClassList from "./classList";
import UserList from "./userList";

export default function Home() {
  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <div className="w-screen">
        <UserList />
      </div>
    </div>
  );
}
