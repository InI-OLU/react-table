import React from "react";
import Person from "../../Assets/svg/avatar.png";
import Bell from "../../Assets/svg/bell.svg";
import Plus from "../../Assets/svg/plus.svg";
import "./avatar.css";
const Avatar = () => {
  return (
    <div className="avatar">
      <div className="notification">
        <img src={Bell} alt="" />

        <button className="not-btn">
          <img src={Plus} alt="" />
          <p>Add listings</p>
        </button>
      </div>

      <img src={Person} alt="" />
    </div>
  );
};

export default Avatar;
