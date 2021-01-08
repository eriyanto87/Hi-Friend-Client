import React, { Component } from "react";
import { Link } from "react-router-dom";
import Chatbot from "react-chatbot-kit";
import ActionProvider from "./ActionProvider";
import chatconfig from "./chatconfig";
import config from "../../config";
import MessageParser from "./MessageParser";
import Context from "../../Context/Context";
import TokenService from "../../services/token-service";
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
      console.log(json);
      this.context.setBotName(json.bot_name);
    } catch (error) {
      console.log(error);
      this.context.setError(error);
    }
  }
  render() {
    console.log(config.API_ENDPOINT);
    console.log(this.context);
    console.log(this.context.botName);
    return (
      <>
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
        <div className="botchat">
          <Chatbot
            config={chatconfig}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
            context={this.context}
          />
        </div>
      </>
    );
  }
}
