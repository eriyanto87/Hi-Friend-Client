class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse = (message) => {
    console.log(message);
    const lowerCase = message.toLowerCase();

    if (lowerCase.includes("great")) {
      return this.actionProvider.handleGreat();
    }

    if (lowerCase.includes("bad")) {
      return this.actionProvider.handleBad();
    }

    if (lowerCase.includes("average")) {
      return this.actionProvider.handleAverage();
    }

    if (lowerCase.includes("yes")) {
      return this.actionProvider.handleYes();
    }

    if (lowerCase.includes("no")) {
      return this.actionProvider.handleNo();
    }
    if (lowerCase.includes("bye")) {
      return this.actionProvider.handleBye();
    }
    if (
      lowerCase.includes("hello") ||
      lowerCase.includes("hi") ||
      lowerCase.includes("whats up")
    ) {
      return this.actionProvider.handleGreeting();
    }
    if (lowerCase.includes("robot")) {
      return this.actionProvider.handleRobot();
    }
    if (lowerCase.includes("thank you")) {
      return this.actionProvider.handleThankYou();
    }
    if (lowerCase.includes("afternoon")) {
      return this.actionProvider.handleAfternoon();
    }
    return this.actionProvider.handleDefault();
  };
}

export default MessageParser;
