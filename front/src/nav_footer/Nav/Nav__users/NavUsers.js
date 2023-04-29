import React from "react";
import MainHeader from "./MainHeader";
import './NavUsers.css';
import NavLinks1 from "./NavLinks1";
import {Link} from "react-router-dom"



 const NavUsers = () => {
    return (
          
        <MainHeader>
           
        <h1 className="main-navigation__title">
           <Link to="/"> Astute </Link> 
        </h1>
        <nav className="main-navigation__header-nav"> 
            <NavLinks1/>
        </nav>
        </MainHeader>
       
       
    )
 }
 export default NavUsers;