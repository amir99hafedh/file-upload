import React from "react";
import MainHeader from "./MainHeader";
import { Link } from "react-router-dom";
import './NavAdmin.css';
import NavLinks from "./NavLinks";



 const NavAdmin = () => {
    return (
      <MainHeader>
        <h1 className="main-navigation__title">
          <Link to="/dashboard1"> Astute </Link>
        </h1>
        <nav className="main-navigation__header-nav">
         

          <NavLinks />
        </nav>
      </MainHeader>
    );
 }
 export default NavAdmin;