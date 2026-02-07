import React from "react";
import Card from "../Card/Card";

const Messages = () => {
  return (
    <>
      <h2>Messages</h2>
      <p className="text-xs">Enter to a room to chat</p>
      <div className="flex flex-wrap justify-start gap-3">
        <Card type="room" title="#bugs problems" text="4 people in" />
        <Card type="room" title="#can someone help me?" text="1 people in" />
        <Card type="room" title="#hi everyone! " text="53 people in" />
      </div>
    </>
  );
};

export default Messages;
