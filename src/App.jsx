import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <div className="flex flex-col items-center">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Fragment>
  );
}
export default App;
