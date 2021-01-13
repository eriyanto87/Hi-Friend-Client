class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }
  handleRobot = () => {
    const messages = this.createChatBotMessage("Yes, I am!", {
      delay: 2000,
      withAvatar: true,
    });
    this.addMessageToBotState(messages);
  };

  handleEndChat = () => {
    const messages = this.createChatBotMessage(
      "It was nice chatting with you! Feel free to come back when you need to talk",
      {
        delay: 2000,
        withAvatar: true,
      }
    );
    this.addMessageToBotState(messages);
  };

  handleMorning = () => {
    const messages = this.createChatBotMessage(
      "Good Morning! How's your day going?",
      {
        widget: "feelingsOptions",
        withAvatar: true,
        delay: 2000,
      }
    );
    this.addMessageToBotState(messages);
  };

  handleThankYou = () => {
    const messages = this.createChatBotMessage("You're welcome!", {
      delay: 2000,
      withAvatar: true,
    });
    this.addMessageToBotState(messages);
  };

  handleGreeting = () => {
    const messages = this.createChatBotMessage("What's up?", {
      widget: "feelingsOptions",
      withAvatar: true,
    });
    this.addMessageToBotState(messages);
  };

  handleBad = () => {
    const messages = this.createChatBotMessage(
      "Don't beat yourself up about it. Would you like to talk about it?",
      { delay: 2000, widget: "YesOrNo", withAvatar: true }
    );
    this.addMessageToBotState(messages);
  };

  handleGreat = () => {
    const messages = this.createChatBotMessage(
      "Great to hear! Would you like to talk about what happened that made it a good day?",
      { delay: 2000, widget: "YesOrNo", withAvatar: true }
    );

    this.addMessageToBotState(messages);
  };

  handleAverage = () => {
    const messages = this.createChatBotMessage(
      "Ah! Would you like to talk about it?",
      { delay: 2000, widget: "YesOrNo", withAvatar: true }
    );

    this.addMessageToBotState(messages);
  };

  handleYes = () => {
    const messages = this.createChatBotMessage(
      "Alright, let's hear it! I hope you will feel better after you talk about it! Feel free to answer after you finish your thought!",
      {
        widget: "BetterOrWorse",
        delay: 2000,
        withAvatar: true,
      }
    );
    this.addMessageToBotState(messages);
  };

  handleNo = () => {
    const messages = this.createChatBotMessage(
      "Alright, What do you want to talk about?",
      {
        delay: 2000,
        widget: "Topics",
        withAvatar: true,
      }
    );
    this.addMessageToBotState(messages);
  };

  handleWork = () => {
    const messages = this.createChatBotMessage(
      "What do you like most about your work?",
      {
        delay: 2000,
        withAvatar: true,
      }
    );
    this.addMessageToBotState(messages);
  };

  handlePets = () => {
    const messages = this.createChatBotMessage("Do you have any pets?", {
      widget: "Pets",
      delay: 2000,
      withAvatar: true,
    });
    this.addMessageToBotState(messages);
  };

  handleHobby = () => {
    const messages = this.createChatBotMessage(
      "What do you like to do on your free time?",
      {
        delay: 2000,
        withAvatar: true,
      }
    );
    this.addMessageToBotState(messages);
  };

  handleYup = () => {
    const messages = this.createChatBotMessage(
      "Ah! what kind of pets do you have?",
      {
        delay: 2000,
        withAvatar: true,
      }
    );
    this.addMessageToBotState(messages);
  };

  handleNope = () => {
    const messages = this.createChatBotMessage(
      "If you want pets, what kind do you want?",
      {
        delay: 2000,
        withAvatar: true,
      }
    );
    this.addMessageToBotState(messages);
  };

  handleBye = () => {
    const messages = this.createChatBotMessage("See ya!", {
      delay: 2000,
      withAvatar: true,
    });
    this.addMessageToBotState(messages);
  };

  handleBetter = () => {
    const messages = this.createChatBotMessage(
      "Sometimes it helps to talk it out :)",
      {
        delay: 2000,
        withAvatar: true,
      }
    );
    this.addMessageToBotState(messages);
  };

  handleWorse = () => {
    const messages = this.createChatBotMessage(
      "I'm sorry! Let's change the subject... What do you want to talk about?",
      {
        delay: 2000,
        widget: "Topics",
        withAvatar: true,
      }
    );
    this.addMessageToBotState(messages);
  };

  handleAlright = () => {
    const messages = this.createChatBotMessage("Great!", {
      delay: 1000,
      withAvatar: true,
    });
    this.addMessageToBotState(messages);

    const followUpMessage = this.createChatBotMessage(
      "What else is on your mind?",
      {
        delay: 3500,
        withAvatar: true,
      }
    );
    this.addMessageToBotState(followUpMessage);
  };

  handleError = () => {
    const messageBetter = this.createChatBotMessage(
      "I'm sorry if my answer doesn't make any sense at times. Do you still want to chat with me?",
      {
        widget: "ChatOptions",
        withAvatar: true,
        delay: 3000,
      }
    );
    this.addMessageToBotState(messageBetter);
  };

  handleDefault = () => {
    const message = this.createChatBotMessage(`Tell me more!`, {
      delay: 2000,
      withAvatar: true,
    });

    this.addMessageToBotState(message);
  };

  addMessageToBotState = (messages) => {
    if (Array.isArray(messages)) {
      this.setState((state) => ({
        ...state,
        messages: [...state.messages, ...messages],
      }));
    } else {
      this.setState((state) => ({
        ...state,
        messages: [...state.messages, messages],
      }));
    }
  };
}

export default ActionProvider;
