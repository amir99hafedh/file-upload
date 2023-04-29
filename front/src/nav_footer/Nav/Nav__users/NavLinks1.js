import React  from "react";
import './NavLinks.css'
import { Link } from 'react-router-dom'
import Button from "../../../users/Admin/FormElements/Button";
import { NavLink} from 'react-router-dom'


const NavLinks1 = () =>{

   const logout = () =>{
      window.location.href ="/"
  }
  return (
   <ul className="nav-links">
  
            
            
             <li>
            <Button onClick={logout} >
              Déconnecter 
            </Button>
            </li>
            
            
            </ul>
            )
        
    
};

export default NavLinks1;


/*  
<img
className="nav_logo"
src="astute.png"
alt="" > 
</img>
*/ 