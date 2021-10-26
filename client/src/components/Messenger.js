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

  const post = { id: 1, name: "santiago" };
  return (
    <div id="messenger">
      {/* <button onClick={() => console.log(isAuth())}>Auth</button>
      <button
        onClick={() => {
          signout();
        }}
      >
        Logout
      </button> */}
      <Sidebar />
      <Chatbox />

      <button onClick={() => getData("conversations")}>click</button>
    </div>
  );
};

export default Messenger;
