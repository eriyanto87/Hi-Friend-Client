import React from "react";
import { useHistory } from "react-router-dom";
import Context from "../../Context/Context";
import "./Design.css";

export default function Design() {
  let history = useHistory();

  const goToChat = (e, context) => {
    e.preventDefault();
    const bot = e.target.botName.value;
    const botData = {
      bot_name: bot,
    };
    context.postBotName(botData);
    history.push("/chat");
  };

  return (
    <Context.Consumer>
      {(context) => {
        const user = context.user;
        return (
          <section className="design">
            <h1>Hi, {user}</h1>
            <section className="designBot">
              <p>This is the place to design your bot!</p>
              <p>Please input in your bot name here</p>
              <form onSubmit={(e) => goToChat(e, context)}>
                <input
                  type="text"
                  placeholder="Bot Name"
                  name="botName"
                  required
                ></input>
                <p>
                  <button type="submit">I want to chat with my bot!</button>
                </p>
              </form>
            </section>
          </section>
        );
      }}
    </Context.Consumer>
  );
}
