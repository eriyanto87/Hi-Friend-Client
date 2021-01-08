class ActionProvider {
  // The action provider receives createChatBotMessage which you can use to define the bots response, and
  // the setState function that allows for manipulating the bots internal state.
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }
  handleRobot = () => {
    const messages = this.createChatBotMessage("Yes, I'm a very good one!", {
      withAvatar: true,
    });
    this.addMessageToBotState(messages);
  };

  handleMorning = () => {
    const messages = this.createChatBotMessage(
      "Good Morning! How's your day going?",
      {
        widget: "feelingsOptions",
        withAvatar: true,
      }
    );
    this.addMessageToBotState(messages);
  };

  handleThankYou = () => {
    const messages = this.createChatBotMessage("You're welcome!", {
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
      { widget: "YesOrNo", withAvatar: true }
    );
    this.addMessageToBotState(messages);
  };

  handleGreat = () => {
    const messages = this.createChatBotMessage(
      "Great to hear! Would you like to talk about what happened that made it a good day?",
      { widget: "YesOrNo", withAvatar: true }
    );

    this.addMessageToBotState(messages);
  };

  handleAverage = () => {
    const messages = this.createChatBotMessage(
      "Ah! Would you like to talk about it?",
      { widget: "YesOrNo", withAvatar: true }
    );

    this.addMessageToBotState(messages);
  };

  handleYes = () => {
    const messages = this.createChatBotMessage("Alright, let's hear it!", {
      withAvatar: true,
    });
    this.addMessageToBotState(messages);
  };

  handleNo = () => {
    const messages = this.createChatBotMessage("Alright, What is your hobby?", {
      withAvatar: true,
    });
    this.addMessageToBotState(messages);
  };
  handleBye = () => {
    const messages = this.createChatBotMessage("See ya!", {
      withAvatar: true,
    });
    this.addMessageToBotState(messages);
  };

  handleBye = () => {
    const messages = this.createChatBotMessage("See ya!", {
      withAvatar: true,
    });
    this.addMessageToBotState(messages);
  };
  handleBye = () => {
    const messages = this.createChatBotMessage("See ya!", {
      withAvatar: true,
    });
    this.addMessageToBotState(messages);
  };
  handleDefault = () => {
    const message = this.createChatBotMessage(`Tell me more!`, {
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
