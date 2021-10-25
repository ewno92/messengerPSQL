import React from "react";
import "./ActiveChat.scss";
const ActiveChat = () => {
  return (
    <div id="active-chat">
      <div className="profile-photo-container">
        <img
          className="profile-photo"
          src="https://res.cloudinary.com/dmlvthmqr/image/upload/v1607914467/messenger/thomas_kwzerk.png"
          alt="profile photo"
        />
        <div className="online-badge"></div>
        <div className="offline-badge"></div>
      </div>
      <div className="body-container">
        <p className="username">santiago</p>
        <p className="typing">
          <i>Typing...</i>
        </p>
      </div>
    </div>
  );
};

export default ActiveChat;
