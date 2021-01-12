import React from "react";
import "./Options.css";

const TopicsOptions = (props) => {
  const options = [
    { text: "Hobby", handler: props.actionProvider.handleHobby, id: 1 },
    { text: "Pets", handler: props.actionProvider.handlePets, id: 2 },
    { text: "Work", handler: props.actionProvider.handleWork, id: 3 },
  ];

  const optionMarkup = options.map((option) => (
    <button className="feelings" key={option.id} onClick={option.handler}>
      {" "}
      {option.text}
    </button>
  ));
  return <div className="feelings-options-container">{optionMarkup}</div>;
};

export default TopicsOptions;
