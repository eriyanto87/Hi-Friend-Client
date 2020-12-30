import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import LandingRoute from "./routes/LandingRoute/LandingRoute";
import RegistrationRoute from "./routes/RegistrationRoute/RegistrationRoute";
import SigninRoute from "./routes/SigninRoute/SigninRoute";
import DashboardRoute from "./routes/DashboardRoute/DashboardRoute";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <main>
        <Route exact path="/" component={LandingRoute} />
        <Route path="/registration" component={RegistrationRoute} />
        <Route path="/signin" component={SigninRoute} />
        <Route path="/dashboard" component={DashboardRoute} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
