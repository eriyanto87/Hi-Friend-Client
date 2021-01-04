import React from "react";
import "./NotFoundRoute.css";
import Footer from "../../components/Footer/Footer";

export default function NotFoundRoute() {
  return (
    <section className="notfound">
      <h1>Hi, Friend</h1>
      <h2>404 - Page Not Found</h2>
      <p>Try going back to the previous page</p>
      <Footer />
    </section>
  );
}
