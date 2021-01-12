import React from "react";
import TokenService from "../../services/token-service";
import { useHistory } from "react-router-dom";
import Context from "../../Context/Context";
import "./Header.css";

export default function Header() {
  let history = useHistory();

  const logout = (context) => {
    context.setUser("");
    context.setBotName("");
    context.setError("");
    TokenService.clearAuthToken();
    history.push("/");
  };

  return (
    <Context.Consumer>
      {(context) => {
        return (
          <div className="home">
            {TokenService.hasAuthToken() ? (
              <div>
                <button
                  className="logout"
                  type="submit"
                  onClick={() => logout(context)}
                >
                  Log Out
                </button>
              </div>
            ) : (
              <div>
                <a href="/">Go To Home</a>
              </div>
            )}
          </div>
        );
      }}
    </Context.Consumer>
  );
}
