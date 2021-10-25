import React, { useState } from "react";
import "./Chatbox.scss";
import Message from "./Chatbox/Message";
const Chatbox = () => {
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(text);
    setText("");
  };

  const handleChangeInput = (e) => {
    setText(e.target.value);
  };

  return (
    <div id="chatbox">
      <div className="header">
        <p className="user-name">santiago</p>
        <p className="status">
          <div className="status-badge"></div>online / offline
        </p>
      </div>
      <div className="body-container">
        <div className="message-box">
          <Message />
          {/* <Message /> */}
          {/* <Message /> */}
          <Message own={true} />
        </div>
        <div className="input-container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="type something..."
              value={text}
              onChange={handleChangeInput}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
