import React from "react";
import "./sidebar.css";
import DashboardIcon from "../../Assets/icons/DashboardIcon";
import ProfileIcon from "../../Assets/icons/ProfileIcon";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
const Sidebar = ({ active = "" }) => {
  const navigate = useNavigate()
  const links = [
    {
      icon: <DashboardIcon />,
      title: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: <ProfileIcon />,
      title: "Profile",
      path: "/profile",
    },
  ];
  const handlelogout = () => {
    Cookies.remove('Profile')
    navigate('/')
  }
  return (
    <div className="sidebar">
      {links.map((items) => (
        <Link
          key={items.title}
          to={items.path}
          className={`sidebar-links ${active === items.title && "active"}`}
        >
          {items.icon}
          <p>{items.title}</p>
        </Link>

      ))}
      <button onClick={handlelogout}>LOGOUT</button>
    </div>
  );
};

export default Sidebar;
