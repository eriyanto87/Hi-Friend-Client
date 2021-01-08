import React from "react";
import "./Options.css";

const YesOrNo = (props) => {
  console.log(props.actionProvider);
  const options = [
    { text: "Yes", handler: props.actionProvider.handleYes, id: 1 },
    { text: "No", handler: props.actionProvider.handleNo, id: 2 },
  ];

  const optionMarkup = options.map((option) => (
    <button className="feelings" key={option.id} onClick={option.handler}>
      {" "}
      {option.text}
    </button>
  ));
  return <div className="options-container">{optionMarkup}</div>;
};

export default YesOrNo;
