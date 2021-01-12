import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import NotFoundRoute from "./routes/NotFoundRoute/NotFoundRoute";
import LandingRoute from "./routes/LandingRoute/LandingRoute";
import RegistrationRoute from "./routes/RegistrationRoute/RegistrationRoute";
import SigninRoute from "./routes/SigninRoute/SigninRoute";
import DesignRoute from "./routes/DesignRoute/DesignRoute";
import ChatRoute from "./routes/ChatRoute/ChatRoute";
import Context from "./Context/Context";
import Design from "./components/Design/Design";
import config from "./config";
import TokenService from "./services/token-service";

class App extends Component {
  state = {
    user: "",
    botName: "",
    error: null,
    setError: (error) => this.setState({ error: error }),
    setUser: (user) => {
      this.setState({
        user: user,
      });
    },
    setBotName: (botName) => this.setState({ botName: botName }),
    postBotName: (bot) => {
      fetch(`${config.API_ENDPOINT}/api/bot`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${TokenService.getAuthToken()}`,
        },
        body: JSON.stringify(bot),
      })
        .then((res) => res.json())
        .then((data) => {
          this.setState({
            botName: data.bot_name,
          });
        });
    },
  };

  componendDidMount() {}

  render() {
    return (
      <Context.Provider value={this.state}>
        <Switch>
          <Route exact path="/" component={LandingRoute} />
          <Route path="/registration" component={RegistrationRoute} />
          <Route path="/signin" component={SigninRoute} />
          <PrivateRoute path="/design" component={DesignRoute} />
          <PrivateRoute path="/chat" component={ChatRoute} />
          <Route component={NotFoundRoute} />
        </Switch>
      </Context.Provider>
    );
  }
}

export default App;
