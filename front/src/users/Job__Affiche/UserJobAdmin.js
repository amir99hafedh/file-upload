import React, { useEffect, useState } from "react";
import JobList from "./JobList";
import axios from "axios";
import NavAdmin from "../../nav_footer/Nav/Nav__admin/NavAdmin";
import Button from "../Admin/FormElements/Button";
import JobItems from "./JobItems";
const UsersJobAdmin = () => {
  const [job, setJob] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/job/")
      .then((res) => {
        setJob(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const DeleteJob = (id__) => {
    if (window.confirm("sure")) {
      axios.delete(`http://localhost:4000/job/${id__}`).then((res) => {
        console.log(res.data);
      });
    }
  };

  return (
    <div>
      {job.map(({ _id, titre, description }) => (
        <JobItems
          id={_id}
          titre={titre}
          description={description}
          DeleteJob={DeleteJob}
        />
      ))}
    </div>
  );
};

export default UsersJobAdmin;

/*import React, { useEffect, useState } from "react";
import JobList from "./JobList";
import axios from "axios";
import NavAdmin from "../../nav_footer/Nav/Nav__admin/NavAdmin";
import Button from "../Admin/FormElements/Button";

const UsersJobAdmin = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/job/")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (data.length ===0) {
    return (
      <div>
        <NavAdmin />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h2>Aucune Job </h2>
        <Button to="/job/new">Ajouter</Button>
      </div>
    );
  };

  data.map((data) => {
    return (
      <tr>
        <td>{data._id}</td>
        <td>{data.title}</td>
        <td>{data.description}</td>
      </tr>
    );
  });

  return <JobList items={data} />;
};

export default UsersJobAdmin; */
