import React  from "react";
import "./Links.css"
import { Link} from 'react-router-dom'
import CardFreelencer from "./CardFreelencer";


const Links = () =>{
   
   
     
    return (
      <div>
        <div className="box">
          <div>
            <CardFreelencer>
              <h3>Gestion des cras</h3>
              <p className="pra">Saisir votre temps de travail</p>
              <button className="button">
                <Link to="/crafreelencer">Saisir</Link>
              </button>
            </CardFreelencer>
          </div>
          <div>
            <CardFreelencer>
              <h3>Esapce Job</h3>
              <p className="pra">Voir les taches disponible</p>
              <button className="button">
                <Link to="/espaceJob">Consulter</Link>
              </button>
            </CardFreelencer>
          </div>

          <div>
            <CardFreelencer>
              <h3>Facturation</h3>
              <p className="pra">Déposez votre facture</p>
              <button className="button">
                <Link to="/facture">Envoyer</Link>
              </button>
            </CardFreelencer>
          </div>
        </div>
      </div>
    );
    


};

export default Links;