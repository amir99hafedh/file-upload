import Button from "../Admin/FormElements/Button";
import React from "react";
import NavAdmin from "../../nav_footer/Nav/Nav__admin/NavAdmin";

function JobItems({ id, titre, description, DeleteJob }) {
  return (
    <React.Fragment>
      <div className="place-list">
        <NavAdmin />
        <li className="card8">
          <div className="place-item__content">
            <div className="place-item__info">
              <h2>{titre}</h2>
            </div>
            <div>
              <p>
                <span>{description}</span>
              </p>
            </div>
            <div className="place-item__actions">
              <button
                className="button1"
                onClick={() => DeleteJob(id)}
                to="/esapceJob"
              >
                Supprimer
              </button>
              <Button danger to={`/job/${id}`}>
                Modifier
              </Button>
            </div>
          </div>
        </li>
      </div>
    </React.Fragment>
  );
}

export default JobItems;

/*import React, { useState, useEffect } from "react";
import "./JobItems.css";
import NavAdmin from "../../nav_footer/Nav/Nav__admin/NavAdmin";
import Button from "../Admin/FormElements/Button";
import axios from "axios";
import { useParams } from "react-router-dom";

const JobItems = (props) => {
  //const [data, setData] = useState([]);
  const [msg, setMsg] = useState(null);

  const jobId = useParams().id;

  const deleteJob = () => {
    axios
      .delete("http://localhost:4000/job/" + jobId)

      .then((res) => {
        setMsg(res.status); // from back message
      })
      .catch((err) => console.log(err));
  };

  console.log({ props });

 /* if (!data) {
    <div>
      <h1>Aucun job disponible </h1>
      <Button>Ajouter un Job</Button>
    </div>;
  }*/

/* return (
    <React.Fragment>
      <NavAdmin />
      <li className="card8">
        <div className="place-item__content">
          <div className="place-item__info">
            <h2>{props.title}</h2>
          </div>
          <div>
            <p>
              <span>{props.description}</span>
            </p>
          </div>
          <div className="place-item__actions">
            <Button to="/esapceJob" onClick={() => deleteJob(props.id)}>
              Supprimer
            </Button>
            <Button danger to={`/job/${props.id}`}>
              Modifier
            </Button>
          </div>
        </div>
      </li>
      <div className="succes">{msg && "job supp"}</div>
    </React.Fragment>
  );
};

export default JobItems;*/
