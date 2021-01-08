import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import Context from "../../Context/Context";
import FeelingsOptions from "../Options/Feelings";
import YesOrNo from "../Options/YesOrNo";

// export default function ChatConfig() {
//   return (
//     <Context.Consumer>
//       {(context) => {
const botName = "new best friend"; //this.context.botName;
const user = "Friend"; //this.context.user;

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
      `Hi ${user}. I'm your ${botName}! 
      You can tell me anything that is on your mind.`
    ),
    createChatBotMessage(
      "How is your day going? (Please type out your answer)",
      {
        withAvatar: true,
        delay: 2000,
        widget: "feelingsOptions",
      }
    ),
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
  ],
};
//         return <>{chatconfig}</>;
//       }}
//     </Context.Consumer>
//   );
// }
export default chatconfig;
