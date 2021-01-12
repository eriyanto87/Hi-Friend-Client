import React from "react";
import AuthApiService from "../../services/auth-api-service";
import TokenService from "../../services/token-service";
import Context from "../../Context/Context";
import { useHistory } from "react-router-dom";
import "./Signin.css";

export default function Signin() {
  let history = useHistory();

  const handleSignin = (e, context) => {
    e.preventDefault();
    const { username, password } = e.target;
    context.setError(null);

    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then((signinReponse) => {
        TokenService.saveAuthToken(signinReponse.authToken);
        context.setUser(username.value);
        history.push("/chat");
      })
      .catch((res) => {
        context.setError(res.error);
      });
  };

  return (
    <Context.Consumer>
      {(context) => {
        return (
          <>
            <div className="signin-container">
              <section className="signin-header">
                <h1>Sign In Form</h1>
                <p>
                  {" "}
                  Username: Demo <br />
                  Password: Password123!
                </p>
              </section>
              <form onSubmit={(e) => handleSignin(e, context)}>
                <section className="signin-form">
                  {context.error && <p className="error">{context.error}</p>}
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
                <button>Sign In</button>
              </form>
            </div>
            <p className="signin-section">
              Don't have an account? <a href="/registration">Register Here</a>
            </p>
          </>
        );
      }}
    </Context.Consumer>
  );
}
