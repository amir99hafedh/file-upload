import React from "react";
import { Link } from "react-router-dom";
import "./RowDetailles.css";

function RowDetailles({
  id,
  dateEntree,
  dateNaissance,
  email,
  nom,
  prenom,
  onDelete,
}) {
  const cra = () => {
    window.location.href = `/craUserSalarie/${id}`;
  };

  return (
      <tr onClick={cra} className="lig12">
        <td className="lig1">{email}</td>
        <td className="lig1">{nom}</td>
        <td className="lig1">{prenom}</td>
        <td className="lig1">{dateNaissance}</td>
        <td className="lig1">{dateEntree}</td>

        <td>
          <button className="delete-button" onClick={() => onDelete(id)}>
            Supprimer
          </button>
        </td>
      </tr>
  );
}

export default RowDetailles;
