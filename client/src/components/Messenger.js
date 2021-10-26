import React, { useEffect } from "react";
import "./Messenger.scss";
import { Redirect, useHistory } from "react-router-dom";
import { authenticate, isAuth, signout } from "../utils/auth";

import Sidebar from "./Messenger/Sidebar";
import Chatbox from "./Messenger/Chatbox";

import { getData } from "../utils/fetchData";
import { fetchConversations } from "../utils/fetchData";
const Messenger = () => {
  const history = useHistory();
  useEffect(() => {
    !isAuth() && history.push("/");
  }, []);
  // if (isAuth()) return <h1>Sign in</h1>;

  useEffect(() => {}, []);
  const post = { id: 1, name: "santiago" };
  return (
    <div id="messenger">
      <Sidebar />
      <Chatbox />

      <button onClick={() => getData("conversations")}>click</button>
      <button
        onClick={() => {
          localStorage.clear();
          history.push("/");
        }}
      >
        log out
      </button>
    </div>
  );
};

export default Messenger;
