import React from "react";
import Topbar from "../topbar/topbar";
import Sidebar from "../sidebar/sidebar";

const Layout = ({ title, children }) => {
  const layoutStyle = {
    width: "100%",
    display: "grid",
    gridTemplateColumns: '240px auto',
  };
  return (
    <div>
      <Topbar />
      <div style={layoutStyle}>
        <Sidebar active={title} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
