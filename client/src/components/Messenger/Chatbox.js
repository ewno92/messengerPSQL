import React from "react";
import "./Chatbox.scss";
import Message from "./Chatbox/Message";
const Chatbox = () => {
  return (
    <div id="chatbox">
      <div className="header">
        <p className="user-name">santiago</p>
        <p className="status">online / offline</p>
      </div>
      <div className="message-box">
        <Message />
        {/* <Message /> */}
        {/* <Message /> */}
        <Message own={true} />
      </div>
      <div className="input-container">
        <input type="text" placeholder="type something..." />
      </div>
    </div>
  );
};

export default Chatbox;
