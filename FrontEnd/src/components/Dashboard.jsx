import React from "react";
import Nav from "../controllers/Nav";
import "../../public/css/Dashboard.css";
function Dashboard() {
  return (
    <>
      <Nav />
      <div className="Dashboard">
        <div className="d1">
          <div className="ch1"></div>
          <div className="ch1"></div>
          <div className="ch1"></div>
          <div className="ch1"></div>
        </div>
        <div className="d2">
          <div className="ch2"></div>
          <div className="ch2"></div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
