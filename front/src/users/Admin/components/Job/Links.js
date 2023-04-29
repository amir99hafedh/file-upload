import React from "react";
import CardAdmin from "../Utilisateurs/CardAdmin"
import { Link} from 'react-router-dom'
import "./Links.css"
import NavAdmin from "../../../../nav_footer/Nav/Nav__admin/NavAdmin";

const Links = () =>{
    return (
        <div className="box"> 
        
        <NavAdmin/>
            <div  >
                <CardAdmin>
            <h3>Récente Job</h3>
            <p className='pra'>
            Voir les les recente Job
            </p>
            <button className="button">
               <Link to="/:userId/job">Consulter</Link>
            </button>
            </CardAdmin>
            
            </div>
            <div > 
           <CardAdmin>
            <h3>Nouveau Job</h3>
            <p className='pra'>
           Ajouter des nouveaux Job
            </p>
            <button className="button">
               <Link to="/job/new">Ajouter</Link>
            </button>
            </CardAdmin>
            </div>
           

           
        </div>

        
        
    )
    
};
export default Links;