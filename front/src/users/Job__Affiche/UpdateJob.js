import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "../Admin/FormElements/Button";
import NavAdmin from "../../nav_footer/Nav/Nav__admin/NavAdmin";
import "./UpdateJob.css"
import { message } from "antd";


const UpdateJob = () => {
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [msg, setMsg] = useState(null);
   const [messageApi, contextHolder] = message.useMessage();

  const jobId = useParams().id; // separer les id des utilisateur

  useEffect(() => {
    axios
      .get("http://localhost:4000/job/" + jobId)
      .then((res) => {
        setTitre(res.data.titre);
        setDescription(res.data.description);
      })
      .catch((err) => console.log(err));
  }, []);

  const modifierData = () => {
      messageApi.open({
        className: "msg",
        type: "success",
        content: "Job modifier",
        duration: 2,
      });
    console.log({ titre, description });
    axios
      .put("http://localhost:4000/job/" + jobId, {
        titre,
        description,
      })
      .then((res) => {
        setMsg(res.status); // from back message
      })
      .catch((err) => console.log(err));
  };

  //const identifiedJob = JobAff.find((p) => p.id === jobId); // cherche si id est meme qu' on a cliquer

  return (
    <React.Fragment>
      <div>
        <NavAdmin />

        <form className="place-form">
          <div className="form-control">
            <label>Text</label>
            <input
              type="text"
              value={titre}
              onChange={(e) => setTitre(e.target.value)}
            ></input>
            <label>Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          {contextHolder}
          <Button type="button" onClick={() => modifierData()}>
            Modifier Job
          </Button>
        </form>
        {/* afficher le message de modification */}
        {/* <div>{msg && "job modifié"}</div>*/}
      </div>
    </React.Fragment>
  );
};

export default UpdateJob;

/*import React , {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Inputs from '../Admin/FormElements/Inputs';
import Button from '../Admin/FormElements/Button';
import { VALIDATOR_REQUIRE} from "../../Valide/Validators.js"
import NavAdmin from '../../nav_footer/Nav/Nav__admin/NavAdmin';
import { useForm } from '../../hooks/form-hook';


const JobAff =[
    {
        id: 'p1',
        title: 'application de gestion de CRA',
        description: 'je veux une application qui permet aux utilisateur e saisir leur temps de travail',
       
    },
    {
        id: 'p2',
        title: 'application des enfants',
        description: 'je veux une application qui permet aux utilisateur e saisir leur temps de travail',
        
    },
    {
        id: 'p3',
        title: 'application de zeby',
        description: 'je veux une application qui permet aux utilisateur e saisir leur temps de travail ',
       
    }
   
]

const UpdateJob = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


  
  
  const jobId = useParams().jobId; // separer les id des utilisateur 


  const [formState, inputHandler , setFormData] = useForm({
    title: {
      value: '',
      isValid: false
    } ,
    description: {
      value: '',
      isValid: false
    } 
   
  }, false );

  const identifiedJob = JobAff.find(p => p.id === jobId); // cherche si id est meme qu' on a cliquer 

  useEffect (()=>{
    
    setFormData(
      {
      title: {
        value: identifiedJob.title,
        isValid: true
      } ,
      description: {
        value: identifiedJob.description,
        isValid: true
      } 
  
    },
    true
    );
  
   
    
  }, [setFormData , identifiedJob]);

 

 
  const getData = (e) => {
    console.log(title);
    console.log(description);
    e.preventDefault();
    axios
      .post("http://localhost:4000/", {
        title,
        description,
      })
      .then(function (response) {
       
        console.log(response);
        });
  };



  if (!identifiedJob) {
    return (
      <div className="center">
        <h2>Pas de Job!</h2>
      </div>
    );
  }

 

  return (
    
    <form className="place-form" onSubmit={getData}>
      <NavAdmin/> 
      <Inputs
        id="title"
        element="input"
        type="text"
        label="Titre"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="S'il vous plait entrer un titre valide."
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
       // value={title}
        //onChange={(e) => setTitle(e.target.value)}
      />
      <Inputs
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="S'il vous plait entrer une description valide."
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
        //value={description}
        //onChange={(e) => setDescription(e.target.value)}
      />
      <Button type="submit"  disabled={!formState.isValid}>
        Modifier Job
      </Button>
    </form>
    
  
  );
};

export default UpdateJob;
*/
