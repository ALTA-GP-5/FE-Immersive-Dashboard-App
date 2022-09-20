import Sidebar from "../components/Sidebar";
import ClassList from "./classList";

export default function Home() {
  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <div className="w-screen">
        <ClassList />
      </div>
    </div>
  );
}
