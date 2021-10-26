import React, { useEffect, useState } from "react";
import "./Messenger.scss";
import { Redirect, useHistory } from "react-router-dom";
import { authenticate, isAuth, signout } from "../utils/auth";

import Sidebar from "./Messenger/Sidebar";
import Chatbox from "./Messenger/Chatbox";

import { getData } from "../utils/fetchData";

const Messenger = () => {
  const history = useHistory();
  const [conversations, setConversations] = useState([]);
  useEffect(() => {
    !isAuth() && history.push("/");
  }, []);

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await getData("conversations");
        console.log("res", res);
        setConversations(res);
      } catch (error) {
        console.log(error);
      }
    };
    getConversations();
    console.log("con", conversations);
  }, []);

  return (
    <div id="messenger">
      <Sidebar Converstaions={conversations} />
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
