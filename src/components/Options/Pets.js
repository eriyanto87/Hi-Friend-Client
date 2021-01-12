import React from "react";
import "./Options.css";

const PetsOptions = (props) => {
  const options = [
    { text: "Yup!", handler: props.actionProvider.handleYup, id: 1 },
    { text: "Nope!", handler: props.actionProvider.handleNope, id: 2 },
  ];

  const optionMarkup = options.map((option) => (
    <button className="feelings" key={option.id} onClick={option.handler}>
      {" "}
      {option.text}
    </button>
  ));
  return <div className="feelings-options-container">{optionMarkup}</div>;
};

export default PetsOptions;
