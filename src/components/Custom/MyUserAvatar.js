import React from "react";
import Context from "../../Context/Context";
import "./MyUserAvatar.css";

export default function MyUserAvatar() {
  return (
    <Context.Consumer>
      {(context) => {
        return <div className="user-avatar">{context.user}</div>;
      }}
    </Context.Consumer>
  );
}
