import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import axios from "axios";
import NavAdmin from "../nav_footer/Nav/Nav__admin/NavAdmin";
//import PeopleIcon from "@mui/icons-material/People";
const Dashboard1 = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/auth/users")
      .then((res) => {
        console.log(" tous les utilisateur", res.data);
        setUsers(res.data);

        // setTotal(total);
      })
      .catch((err) => console.log(err));
  }, []);

  const userCount = users.length-1;
  const pourcentageUsers = ((userCount / userCount) * 100).toFixed(0);

  
  const filteredUsersFreelencers = users.filter((user) => user.type === "Indepandent");
  const lengthFreelencers = filteredUsersFreelencers.length;
  const pourcentageUsersFreelencers = ((lengthFreelencers / userCount) *100).toFixed(0)


  const filterUsersSalarie = users.filter((user) => user.type === "salarie");
  const lengthSalarie = filterUsersSalarie.length
  const pourcentageUsersSalarie = ((lengthSalarie / userCount) *100).toFixed(0)



  return (
    <div className="stat">
      <NavAdmin />
      <div className="widget">
        <div className="left">
          <span className="title">UTILISATEURS</span>
          <br />

          <span className="nombre">{userCount}</span>
        </div>
        <div className="right">
          <div className="pourcentage">{`${pourcentageUsers}%`}</div>
        </div>
      </div>

      <div className="widget">
        <div className="left">
          <span className="title">IDEPANDENT</span>
          <br />
          <span className="nombre">{lengthFreelencers}</span>
        </div>
        <div className="right">
          <div className="pourcentage">{`${pourcentageUsersFreelencers}%`}</div>
        </div>
      </div>

      <div className="widget">
        <div className="left">
          <span className="title">SALARIÉS</span>
          <br />
          <span className="nombre">{lengthSalarie}</span>
        </div>
        <div className="right">
          <div className="pourcentage">{`${pourcentageUsersSalarie}%`}</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard1;
