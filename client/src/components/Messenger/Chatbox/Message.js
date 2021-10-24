import React from "react";
import "./Message.scss";
const Message = () => {
  return (
    <div id="message">
      <div className="profile-photo-container">
        <img src="" alt="" />
      </div>
      <div className="message-container">
        <p className="user-name-time">santiago 10:55</p>
        <p className="message-text">this is message</p>
      </div>
    </div>
  );
};

export default Message;
