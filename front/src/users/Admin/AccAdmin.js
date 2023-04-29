import React, { useEffect, useState } from "react";
import Dashboard from "../../dashboard/Dashboard";
import NavAdmin from "../../nav_footer/Nav/Nav__admin/NavAdmin";
import "./AccAdmin.css";
import axios from "axios";

const AccAdmin = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/auth/users")
      .then((res) => {
        console.log(" tous les utilisateur", res.data);
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="accAdmin">
      <div>
        <NavAdmin />
      </div>
      <br />
      <br />
      <br />
      <div className="dash">
        <Dashboard />
        <br />
        <br />

        <h2>Actualité</h2>
        <table className="table-accAdmin">
          <thead className="dash123">
            <tr className="dash12">
              <th className="dash1">Email</th>
              <th className="dash1">Nom</th>
              <th className="dash1">Prenom</th>
              <th className="dash1">Type</th>
              <th className="dash1">Action</th>
            </tr>
          </thead>
          <tbody className="con123">
            {users.map((user) => (
              <tr className="con12" key={user.id}>
                <td className="con1">{user.email}</td>
                <td className="con1">{user.nom}</td>
                <td className="con1">{user.prenom}</td>
                <td className="con1">{user.type}</td>
                <td className="con1">A postuler un cv</td>
              </tr>
            ))}
          </tbody>
          {/*<tfoot>
          <tr>
            <td colSpan="3">{`${users.length} users`}</td>
          </tr>
          </tfoot>*/}
        </table>
      </div>
    </div>
  );
};

export default AccAdmin;
