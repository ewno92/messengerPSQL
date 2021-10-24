import React from "react";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div id="sidebar">
      <div className="user-info">
        <div className="profile-photo-container">photo</div>
        <p className="user-name"></p>
      </div>

      <p className="title">Chats</p>
      <input type="text" placeholder="Search" />
      <div className="search-bar">search-bar</div>
    </div>
  );
};

export default Sidebar;
