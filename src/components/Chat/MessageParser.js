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
    if (lowerCase.includes("pets")) {
      return this.actionProvider.handlePets();
    }
    if (lowerCase.includes("hobby")) {
      return this.actionProvider.handleHobby();
    }
    if (lowerCase.includes("work")) {
      return this.actionProvider.handleWork();
    }
    if (lowerCase.includes("yup")) {
      return this.actionProvider.handleYup();
    }
    if (lowerCase.includes("nope")) {
      return this.actionProvider.handleNope();
    }
    if (lowerCase.includes("better")) {
      return this.actionProvider.handleBetter();
    }
    if (lowerCase.includes("worse")) {
      return this.actionProvider.handleWorse();
    }
    if (lowerCase.includes("alright")) {
      return this.actionProvider.handleAlright();
    }
    return this.actionProvider.handleDefault();
  };
}

export default MessageParser;
