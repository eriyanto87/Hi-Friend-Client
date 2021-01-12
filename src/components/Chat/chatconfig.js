import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import FeelingsOptions from "../Options/Feelings";
import YesOrNo from "../Options/YesOrNo";
import TopicsOptions from "../Options/Topics";
import PetsOptions from "../Options/Pets";
import BetterOrWorse from "../Options/BetterOrWorse";
import Error from "../Options/Error";
import ChatOptions from "../Options/ChatOptions";

const botName = "new best friend";
const user = "Friend";

const chatconfig = {
  user: user,
  botName: botName,
  lang: "no",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#085f63",
    },
    chatButton: {
      backgroundColor: "#669db3ff",
    },
  },
  initialMessages: [
    createChatBotMessage(
      `Hi ${user}! I'm your ${botName}.
       You can tell me anything and I will try to answer!`
    ),
    createChatBotMessage("How is your day going?", {
      withAvatar: true,
      delay: 2000,
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
