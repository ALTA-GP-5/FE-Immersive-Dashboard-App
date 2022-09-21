import Sidebar from "../components/Sidebar";
import ClassList from "./classList";
import Formadduser from "./formadduser";
import Login from "./login";
import MenteeList from "./menteeList";
import MenteeLog from "./menteeLog";
import UserList from "./userList";
import Dashboard from "./Dashboard";
import Header from "../components/header";
import Addmentee from "./addmentee";
import NewLog from "./NewLog";
import EditUser from "./editUser";
import EditMentee from "./editMentee";

export default function Home() {
  return (
    <div className="flex w-screen h-screen">
      <Sidebar />

      <div className="w-screen">
        <EditMentee />
      </div>
    </div>
  );
}
