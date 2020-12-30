import React from "react";
import "./Signin.css";

export default function Signin() {
  return (
    <>
      <div className="signin-container">
        <section className="signin-header">
          <h1>Sign In Form</h1>
        </section>
        <form>
          <section className="signin-form">
            <p>
              <input type="text" placeholder="Username" />
            </p>
            <p>
              <input type="text" placeholder="Password" />
            </p>
          </section>
          <button>Sign In</button>
        </form>
      </div>
      <p className="signin-section">
        Don't have an account? <a href="/registration">Register Here</a>
      </p>
    </>
  );
}
