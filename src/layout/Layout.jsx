import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const cssOverride = {
  position: "absolute",
  textAlign: "center",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  zIndex: "1000",
  background: "rgba(0, 0, 0, 0.3)",
};

export default function Layout() {
  const isLoading = useSelector((state) => state.login.isLoading);
  return (
    <>
      <PulseLoader
        color='#36d7b7'
        cssOverride={cssOverride}
        loading={isLoading}
      />
      <Outlet />
      <ToastContainer />
    </>
  );
}
