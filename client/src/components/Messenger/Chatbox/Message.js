import React from "react";
import "./Message.scss";
const Message = ({ own }) => {
  return (
    <div id="message">
      <div className={own ? "message-own message" : "message"}>
        <img
          className="profile-photo"
          src="https://res.cloudinary.com/dmlvthmqr/image/upload/v1607914467/messenger/thomas_kwzerk.png"
          alt=""
        />
        <div className="message-container">
          <p className="user-name-time">santiago 10:55</p>
          <p className="message-text">this is message?</p>
        </div>
      </div>
    </div>
  );
};

export default Message;
