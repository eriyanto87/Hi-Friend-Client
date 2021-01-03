import React from "react";
import TokenService from "../../services/token-service";
import { useHistory } from "react-router-dom";
import "./Header.css";

export default function Header() {
  let history = useHistory();

  const logout = () => {
    console.log("logout button works!");
    TokenService.clearAuthToken();
    history.push("/");
  };

  return (
    <div className="home">
      {TokenService.hasAuthToken() ? (
        <div>
          <button className="logout" type="submit" onClick={logout}>
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
}
