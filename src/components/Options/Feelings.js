import React from "react";
import "./Options.css";

const FeelingsOptions = (props) => {
  console.log(props.actionProvider);
  const options = [
    { text: "Great!", handler: props.actionProvider.handleGood, id: 1 },
    { text: "Bad", handler: props.actionProvider.handleBad, id: 2 },
    { text: "Average", handler: props.actionProvider.handleAverage, id: 3 },
  ];

  const optionMarkup = options.map((option) => (
    <button className="feelings" key={option.id} onClick={option.handler}>
      {" "}
      {option.text}
    </button>
  ));
  return <div className="feelings-options-container">{optionMarkup}</div>;
};

export default FeelingsOptions;
