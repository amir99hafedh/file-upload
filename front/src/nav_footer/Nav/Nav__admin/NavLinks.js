import React,{useContext} from "react";
import './NavLinks.css'
import { NavLink} from 'react-router-dom'
import Button from "../../../users/Admin/FormElements/Button";
import Dashboard1 from "../../../dashboard/Dashboard";

const NavLinks = () =>{
  
    const logout = () =>{
        window.location.href ="/"
    }

    
return (
  <ul className="nav-links">
    <li>
      <Button>
        
        <NavLink to="/dashboard1"> Acceuil </NavLink>
        
      </Button>
    </li>

    <li>
      <Button>
        <NavLink to="/JobAcc">Espace Job</NavLink>
      </Button>
    </li>

    <li>
      <Button>
        <NavLink to="/utilisteur">Utilisateurs</NavLink>
      </Button>
    </li>

    <li>
      <Button onClick={logout}>Déconnecter</Button>
    </li>
  </ul>
);
};

export default NavLinks;
