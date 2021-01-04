import React from "react";
import Home from "../../components/Header/Header";
import Dashboard from "../../components/Dashboard/Dashboard";
import Footer from "../../components/Footer/Footer";

export default function DashboardRoute() {
  return (
    <>
      <Home />
      <Dashboard />
      <Footer />
    </>
  );
}
