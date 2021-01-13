import React from "react";
import Home from "../../components/Header/Header";
import Chat from "../../components/Chat/Chat";
import Footer from "../../components/Footer/Footer";
import "./ChatRoute.css";

export default function ChatRoute() {
  return (
    <>
      <Home />
      <Chat />
      <Footer />
    </>
  );
}
