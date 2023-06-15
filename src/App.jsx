import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <div className="mx-72 flex flex-col justify-center">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Fragment>
  );
}
export default App;
