import React from "react";
import Footer from "../../nav_footer/Footer";
import NavUsers from "../../nav_footer/Nav/Nav__users/NavUsers";
import "./AccSalarie.css";
import Links from "./Links";

const AccSalarie = () => {
  console.log("accSal");
  return (
    <div>
      <NavUsers />
      <div>
        <Links />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AccSalarie;
