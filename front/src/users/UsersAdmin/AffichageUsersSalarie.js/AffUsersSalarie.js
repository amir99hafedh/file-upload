import React, { useEffect, useState } from "react";
import RowDetailles from "./RowDetailles";
import axios from "axios";
import NavAdmin from "../../../nav_footer/Nav/Nav__admin/NavAdmin";
import MessageAlert from "../../../Valide/Alert/MessageAlert";
import "./AffUsersSalarie.css"

function AffUsersSalarie() {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:4000/auth/users")
      .then((res) => {
        console.log(" tous les utilisateur", res.data);
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onDelete = (id__) => {
    if (window.confirm("sure")) {
      axios.delete(`http://localhost:4000/auth/users/${id__}`).then((res) => {
        setMessage(res.data.message);
        setShow(true);
        setTimeout(() => {
          setShow(false);
        }, 4000);
      });
    }
  };

  if (users.length === 0) {
    return (
      <div className="center">
        <NavAdmin />
        <br />
        <br />

        <h3>Aucun utilisateur pour le moment</h3>
      </div>
    );
  }

    const filterUsersSalarie = users.filter((user) => user.type === "salarie");


  return (
    <div className="utili">
      <NavAdmin />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <table className="table-salarie">
        <thead className="col123">
          <tr className="col12">
            <th className="col1">Email</th>
            <th className="col1">Nom</th>
            <th className="col1">Prenom</th>
            <th className="col1">Date entré Astute</th>
            <th className="col1">Date de naissance</th>
            <th className="col1">Action</th>
          </tr>
        </thead>
        <tbody className="lig123">
          {filterUsersSalarie.map(({ _id, dateEntree, dateNaissance, email, nom, prenom }) => (
              <RowDetailles
                id={_id}
                email={email}
                dateEntree={dateEntree}
                dateNaissance={dateNaissance}
                nom={nom}
                prenom={prenom}
                onDelete={onDelete}
              />
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AffUsersSalarie;


/*import React, { useEffect, useState } from "react";
import axios from "axios";
import NavAdmin from "../../../nav_footer/Nav/Nav__admin/NavAdmin";
import "./AffUsersSalarie.css";
import MessageAlert from "../../../Valide/Alert/MessageAlert";

function AffUsersSalarie() {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:4000/auth/users")
      .then((res) => {
        console.log(" tous les utilisateur", res.data);
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onDelete = (id__) => {
    if (window.confirm("sure")) {
      axios.delete(`http://localhost:4000/auth/users/${id__}`).then((res) => {
        console.log(res.data);
        setShow(true);
        setTimeout(() => {
          setShow(false);
        }, 4000);
      });
    }
  };

  if (users.length === 0) {
    return (
      <div className="center">
        <NavAdmin />
        <br />
        <br />

        <h3>Aucun utilisateur pour le moment</h3>
      </div>
    );
  }

  const filterUsersSalarie = users.filter((user) => user.type === "salarie");

  return (
    <>
      <NavAdmin />
      <br />
      <br />
      <br />
      <br />
      <h2>SALARIÉS</h2>

      <br />
      <table className="table-salarie">
        <thead className="col123">
          <tr className="col12">
            <th className="col1">Email</th>
            <th className="col1">Nom</th>
            <th className="col1">Prenom</th>
            <th className="col1">Date entré Astute</th>
            <th className="col1">Date de naissance</th>
            <th className="col1">Action</th>
          </tr>
        </thead>
        <tbody className="lig123">
          {filterUsersSalarie.map((user) => (
            <tr className="lig12" key={user.id}>
              <td className="lig1">{user.email}</td>
              <td className="lig1">{user.nom}</td>
              <td className="lig1">{user.prenom}</td>
              <td className="lig1">{user.dateEntree}</td>
              <td className="lig1">{user.dateNaissance}</td>
              <td>
                <span>
                  <button
                    onClick={() => onDelete(users.id)}
                    className="delete-button"
                  >
                    Supprimer
                  </button>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
        {/*<tfoot>
          <tr>
            <td colSpan="3">{`${users.length} users`}</td>
          </tr>
          </tfoot>
      </table>
    </>
  );
}

export default AffUsersSalarie; */

