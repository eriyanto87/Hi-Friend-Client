import React, { Component } from "react";
import { Link } from "react-router-dom";
import Chatbot from "react-chatbot-kit";
import ActionProvider from "./ActionProvider";
import chatconfig from "./chatconfig";
import config from "../../config";
import MessageParser from "./MessageParser";
import Context from "../../Context/Context";
import TokenService from "../../services/token-service";
import styled from "styled-components";
import "../../App.css";
import "../../index.css";
import "./Chat.css";

export default class Chat extends Component {
  static contextType = Context;

  async componentDidMount() {
    try {
      const response = await fetch(`${config.API_ENDPOINT}/api/bot`, {
        headers: {
          authorization: `bearer ${TokenService.getAuthToken()}`,
        },
      });
      const json = await response.json();
      this.context.setBotName(json.bot_name);
    } catch (error) {
      this.context.setError(error);
    }
  }
  render() {
    return (
      <div>
        <h1 className="chatcomponent">Hi, {this.context.user}</h1>
        <p className="chatcomponent">
          {this.context.botName ? (
            `My bot name is ${this.context.botName}`
          ) : (
            <Link to="/design">
              <button>Click here to name my chatbot</button>
            </Link>
          )}
        </p>
        <p className="instructions">
          You can end chat simply by typing{" "}
          <span className="instruction">"end chat"</span>
        </p>
        <div className="botchat">
          <Chatbot
            style={{ width: "80%", border: "1px solid green" }}
            config={chatconfig}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
          />
        </div>
      </div>
    );
  }
}
