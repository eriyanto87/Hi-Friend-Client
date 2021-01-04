import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import NotFoundRoute from "./routes/NotFoundRoute/NotFoundRoute";
import LandingRoute from "./routes/LandingRoute/LandingRoute";
import RegistrationRoute from "./routes/RegistrationRoute/RegistrationRoute";
import SigninRoute from "./routes/SigninRoute/SigninRoute";
import DashboardRoute from "./routes/DashboardRoute/DashboardRoute";
import Footer from "./components/Footer/Footer";
import Context from "./Context/Context";

class App extends Component {
  state = {
    user: {},
    error: null,
    setError: (error) => this.setState({ error: error }),
    name: "evi",
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        <main>
          <Route exact path="/" component={LandingRoute} />
          <Route path="/registration" component={RegistrationRoute} />
          <Route path="/signin" component={SigninRoute} />
          <PrivateRoute path="/dashboard" component={DashboardRoute} />
          <Route component={NotFoundRoute} />
        </main>
        <footer>
          <Footer />
        </footer>
      </Context.Provider>
    );
  }
}

export default App;
