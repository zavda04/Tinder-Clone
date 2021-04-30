import React from "react";
import Chat from "./Chat";
import "./Chats.css";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Angelina"
        message="Salut !"
        timestamp="20 second ago"
        profilePic="https://images.alphacoders.com/104/1044927.jpg"
      />
      <Chat
        name="Emma"
        message="Salut !"
        timestamp="10 second ago"
        profilePic="https://img4.goodfon.com/wallpaper/nbig/b/d2/martin-kuhn-anna-martin-kuhn-model-girl-brunette-long-hair-s.jpg"
      />
      <Chat
        name="Judy"
        message="Salut !"
        timestamp="50 second ago"
        profilePic="https://cdn.pixabay.com/photo/2017/04/06/15/30/portrait-2208574_960_720.jpg"
      />
    </div>
  );
}

export default Chats;
