import React from "react";
import Context from "../../Context/Context";
import "./MyBotAvatar.css";

export default function MyBotAvatar() {
  return (
    <Context.Consumer>
      {(context) => {
        return <div className="my-bot-avatar">{context.botName}</div>;
      }}
    </Context.Consumer>
  );
}
