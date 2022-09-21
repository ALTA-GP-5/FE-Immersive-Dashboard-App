import Sidebar from "../components/Sidebar";
import ClassList from "./classList";
import MenteeList from "./menteeList";
import MenteeLog from "./menteeLog";
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
