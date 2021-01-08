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
            Hi, Friend! Welcome to my app. I am a chatbot! Please sign in using
            these sign in credentials.
            <p>
              Username: DemoAcc <br />
              Password: Password123!
              <br />
              <Link to={{ pathname: `/signin` }}>
                <button> Sign in </button>
              </Link>
            </p>
          </p>
        </section>
        <section className="left-message-bubble">
          <div className="bot-name">BOT</div>
          <p className="message">
            You can also click on the Register button below to sign up for an
            account if you choose not to sign in using our demo account!
            <Link to={{ pathname: `/registration` }}>
              <button> Register </button>
            </Link>
          </p>
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
