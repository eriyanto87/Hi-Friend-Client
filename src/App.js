import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import LandingRoute from "./routes/LandingRoute";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingRoute} />
    </div>
  );
}

export default App;
