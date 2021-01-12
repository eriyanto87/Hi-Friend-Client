import React from "react";
import "./Options.css";

const BetterOrWorse = (props) => {
  const options = [
    { text: "Better", handler: props.actionProvider.handleBetter, id: 1 },
    { text: "Worse", handler: props.actionProvider.handleWorse, id: 2 },
  ];

  const optionMarkup = options.map((option) => (
    <button className="feelings" key={option.id} onClick={option.handler}>
      {" "}
      {option.text}
    </button>
  ));
  return <div className="feelings-options-container">{optionMarkup}</div>;
};

export default BetterOrWorse;
