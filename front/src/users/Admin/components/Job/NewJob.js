import React, { useState } from "react";
import NavAdmin from "../../../../nav_footer/Nav/Nav__admin/NavAdmin";
import "./NewJob.css";
import Button from "../../FormElements/Button";
import axios from "axios";
import { message } from "antd";


const NewJob = () => {
  const [titre, setTitre] = useState([]);
  const [description, setDescription] = useState([]);
  const [msg, setMsg] = useState(null);
    const [messageApi, contextHolder] = message.useMessage();


  const postJob = (e) => {
     messageApi.open({
       className: "msg",
       type: "success",
       content: "Job enragistrer",
       duration: 2,
     });
    e.preventDefault();
    console.log(titre);
    console.log(description);
    
    

    axios
      .post("http://localhost:4000/job", {
        titre,
        description,
      })
      .then(function (response ) {
        console.log(response);
        setMsg(response.status);
      });
  };

  return (
    <React.Fragment>
      <NavAdmin />
      <div>
        {contextHolder}

        <form className="place-form" onSubmit={postJob}>
          <div className="form-control">
            <label>Titre</label>
            <input
              type="text"
              value={titre}
              onChange={(e) => setTitre(e.target.value)}
            ></input>

            <label>Description</label>
            <textarea
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <Button
            type="submit"
            onClick={postJob}
            disabled={!titre || !description}
          >
            Enregistrer
          </Button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default NewJob;

