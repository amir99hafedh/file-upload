import React from "react";
import "./Links.css";
import { Link } from "react-router-dom";
import CardSalarie from "./CardSalarie";

const Links = () => {
  console.log({ userId: localStorage.getItem("userId") });

  return (
    <div className="box">
      <div>
        <CardSalarie>
          <h3>Gestion des cras</h3>
          <p className="pra">Saisir votre temps de travail</p>
          <button className="button">
            <Link to={`/craSalarie/${localStorage.getItem("userId")}`}>
              Saisir
            </Link>
          </button>
        </CardSalarie>
      </div>
      <div>
        <CardSalarie>
          <h3>Esapce Job</h3>
          <p className="pra">Voir les taches disponible</p>
          <button className="button">
            <Link to="/espaceJob">Consulter</Link>
          </button>
        </CardSalarie>
      </div>
    </div>
  );
};

export default Links;
