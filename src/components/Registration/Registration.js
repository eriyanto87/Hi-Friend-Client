import React from "react";
import Context from "../../Context/Context";
import AuthApiService from "../../services/auth-api-service";
import { useHistory } from "react-router-dom";
import "./Registration.css";

export default function Registration() {
  let history = useHistory();

  const handleSubmit = (e, context) => {
    e.preventDefault();
    console.log(history);
    console.log("registration button is clicked");
    const { username, password, first, last } = e.target;
    const postUserData = {
      username: username.value,
      password: password.value,
      first_name: first.value,
      last_name: last.value,
    };

    console.log(postUserData);

    context.setError(null);
    AuthApiService.postUser(postUserData)
      .then((user) => {
        history.push("/signin");
      })
      .catch((res) => {
        console.log(res);
        context.setError(res.error);
      });
  };

  return (
    <Context.Consumer>
      {(context) => {
        console.log(context);
        return (
          <>
            <div className="registration-container">
              <section className="registration-header">
                <h1>Register</h1>
                <p>Create your account. It's free and only takes a minute!</p>
              </section>
              <form onSubmit={(e) => handleSubmit(e, context)}>
                {context.error && <p className="error">{context.error}</p>}
                <section className="name">
                  <p>
                    <input
                      type="text"
                      placeholder="First Name"
                      name="first"
                      required
                    />
                  </p>
                  <p>
                    <input
                      type="text"
                      placeholder="Last Name"
                      name="last"
                      required
                    />
                  </p>
                </section>
                <section className="registration-info">
                  <p>
                    <input
                      type="text"
                      placeholder="Username"
                      name="username"
                      required
                    />
                  </p>
                  <p>
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      required
                    />
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
      }}
    </Context.Consumer>
  );
}
