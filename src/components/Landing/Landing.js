import React from "react";
import "./Landing.css";

export default function Landing() {
  return (
    <div className="landing">
      <section className="messenger">
        <header className="messengerHeader">
          <h1 className="messengerTitle">Hi, Friend!</h1>
        </header>
      </section>
      <main className="chat">
        <section className="leftMessageBubble">
          <div className="BotName">BOT</div>
          <p className="message">
            Hi, Friend! Welcome to my app. Do you have an account?
          </p>
          <button> Register </button>
          <button> Sign in </button>
        </section>
      </main>
      <form className="inputArea">
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
