import { Outlet } from "react-router-dom";
import React from "react";

import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="container">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
