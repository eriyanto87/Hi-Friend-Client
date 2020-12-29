import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import LandingRoute from "./routes/LandingRoute";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <main>
        <Route exact path="/" component={LandingRoute} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
