import Sidebar from "../components/Sidebar";
import ClassList from "./classList";
import Formadduser from "./formadduser";
import Login from "./login";
import MenteeList from "./menteeList";
import MenteeLog from "./menteeLog";
import UserList from "./userList";
import Dashboard from "./Dashboard";
import Header from "../components/header";

export default function Home() {
  return (
    <div className="flex w-screen h-screen">
      <Sidebar />

      <div className="w-screen">
        <Dashboard />
      </div>
    </div>
  );
}
