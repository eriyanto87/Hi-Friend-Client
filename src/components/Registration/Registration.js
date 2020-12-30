import React from "react";
import "./Registration.css";

export default function Registration() {
  return (
    <>
      <div className="registration-container">
        <h1>Register</h1>
        <p>Create your account. It's free and only takes a minute!</p>
        <form>
          <section className="name">
            <input type="text" placeholder="First Name" />
            {"  "}
            <input type="text" placeholder="Last Name" />
          </section>
          <section className="registration-info">
            <p>
              <input type="text" placeholder="Email" />
            </p>
            <p>
              <input type="text" placeholder="Password" />
            </p>
          </section>
          <button>Register Now</button>
        </form>
      </div>
      <p className="signin-section">
        Already have an account? <a href="/signin">Sign In</a>
      </p>
    </>
  );
}
