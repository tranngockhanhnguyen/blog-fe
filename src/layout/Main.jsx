import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Main() {
  return (
    <div className='sb-nav-fixed'>
      <Header />
      <div id='layoutSidenav'>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}
