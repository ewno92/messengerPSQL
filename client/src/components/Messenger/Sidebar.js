import React from "react";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div id="sidebar">
      <div className="user-panel">
        <img
          className="profile-photo"
          src="https://res.cloudinary.com/dmlvthmqr/image/upload/v1607914467/messenger/thomas_kwzerk.png"
          alt=""
        />
        <p className="user-name">thomas</p>
      </div>

      <p className="title">Chats</p>
      <input className="search-bar" type="text" placeholder="Search" />
    </div>
  );
};

export default Sidebar;
