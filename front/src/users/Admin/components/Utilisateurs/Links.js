import React from "react";
import CardAdmin from "./CardAdmin"
import { Link} from 'react-router-dom'
import "./Links.css"
import NavAdmin from "../../../../nav_footer/Nav/Nav__admin/NavAdmin";

const Links = () =>{
    return (
        <div className="box"> 
           <NavAdmin/>
            <div  >
                <CardAdmin>
            <h3>Freelencer</h3>
            <p className='pra'>
            Contrôler les freelencers
            </p>
            <button className="button">
               <Link to="/userFreelencers">Consulter</Link>
            </button>
            </CardAdmin>
            
            </div>
            <div > 
           <CardAdmin>
            <h3>Salarié</h3>
            <p className='pra'>
            Contrôler les salariés
            </p>
            <button className="button">
               <Link to="/userSalarie">Consulter</Link>
            </button>
            </CardAdmin>
            </div>

           
        </div>

        
        
    )
    
};
export default Links;