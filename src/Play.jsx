import { Outlet } from "react-router-dom";
import Header from "./components/Header";

export default function Play() {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  );
}
