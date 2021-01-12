import React from "react";
import "./Options.css";

const ChatOptions = (props) => {
  const options = [
    { text: "Yes, Please", handler: props.actionProvider.handleNo, id: 1 },
    {
      text: "Please End Chat",
      handler: props.actionProvider.handleEndChat,
      id: 2,
    },
  ];

  const optionMarkup = options.map((option) => (
    <button className="feelings" key={option.id} onClick={option.handler}>
      {" "}
      {option.text}
    </button>
  ));
  return <div className="feelings-options-container">{optionMarkup}</div>;
};

export default ChatOptions;
