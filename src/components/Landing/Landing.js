import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="landing">
      <section className="messenger">
        <header className="messenger-header">
          <h1 className="messenger-title">Hi, Friend!</h1>
        </header>
      </section>
      <main className="chat">
        <section className="left-message-bubble">
          <div className="bot-name">BOT</div>
          <p className="message">
            Hi, Friend! Welcome to my app. Do you have an account?
          </p>
          <Link to={{ pathname: `/registration` }}>
            <button> Register </button>
          </Link>
          <Link to={{ pathname: `/signin` }}>
            <button> Sign in </button>
          </Link>
        </section>
      </main>
      <form className="input-area">
        <input
          className="input"
          type="text"
          placeholder="Type your message here..."
        />
        <button className="send">SEND</button>
      </form>
    </div>
  );
}
