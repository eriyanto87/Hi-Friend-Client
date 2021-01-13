import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import FeelingsOptions from "../Options/Feelings";
import YesOrNo from "../Options/YesOrNo";
import TopicsOptions from "../Options/Topics";
import PetsOptions from "../Options/Pets";
import BetterOrWorse from "../Options/BetterOrWorse";
import Error from "../Options/Error";
import ChatOptions from "../Options/ChatOptions";
import MyUserAvatar from "../Custom/MyUserAvatar";
import MyBotAvatar from "../Custom/MyBotAvatar";

const botName = "new best friend";
const user = "Friend";

const chatconfig = {
  user: user,
  botName: botName,
  lang: "no",
  customComponents: {
    header: () => (
      <div
        style={{
          background: "#fc9f9f",
          borderBottom: "1px solid black",
          fontSize: "20px",
          padding: "20px",
        }}
      >
        ChatBot Demo
      </div>
    ),
    // Replaces the bot name to custom bot name picked by user
    botAvatar: (props) => <MyBotAvatar {...props} />,
    // Uses custom username
    userAvatar: (props) => <MyUserAvatar {...props} />,
  },
  customStyles: {
    userChatMessage: {
      color: "fb9f9f",
    },
    botMessageBox: {
      backgroundColor: "#3d6c7f",
    },
    chatButton: {
      backgroundColor: "#669db3ff",
    },
  },
  initialMessages: [
    createChatBotMessage(
      `Hi ${user}! I'm your ${botName}.
       You can tell me anything and I will try to answer!`,
      {
        delay: 2000,
        withAvatar: true,
      }
    ),
    createChatBotMessage("How is your day going?", {
      withAvatar: true,
      delay: 5000,
      widget: "feelingsOptions",
    }),
  ],
  widgets: [
    {
      widgetName: "feelingsOptions",
      widgetFunc: (props) => <FeelingsOptions {...props} />,
    },
    {
      widgetName: "YesOrNo",
      widgetFunc: (props) => <YesOrNo {...props} />,
    },
    {
      widgetName: "Topics",
      widgetFunc: (props) => <TopicsOptions {...props} />,
    },
    {
      widgetName: "Pets",
      widgetFunc: (props) => <PetsOptions {...props} />,
    },
    {
      widgetName: "BetterOrWorse",
      widgetFunc: (props) => <BetterOrWorse {...props} />,
    },
    {
      widgetName: "ChatOptions",
      widgetFunc: (props) => <ChatOptions {...props} />,
    },
    {
      widgetName: "Error",
      widgetFunc: (props) => <Error {...props} />,
    },
  ],
};

export default chatconfig;
