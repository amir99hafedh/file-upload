import React, { useState } from "react";
import "./Enregistrement.css";
import Button from "../users/Admin/FormElements/Button";
import axios from "axios";

function Formulaire() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [dateNaissance, setDateN] = useState("");
  const [dateEntree, setDateE] = useState("");
  const [email, setMail] = useState("");
  const [password, setMp] = useState("");
  const [type, setType] = useState("salarie");

  //const [poste , setPoste] = useState('')

  const register = (event) => {
    //permet d'envoyer au back
    event.preventDefault();
    console.log("cordonneé");
    console.log(nom);
    console.log(prenom);
    console.log(dateNaissance);
    console.log(dateEntree);
    console.log(email);
    console.log(password);
    console.log(type);

    axios
      .post("http://localhost:4000/auth/signup", {
        email,
        password,
        nom,
        prenom,
        dateEntree,
        dateNaissance,
        type,
      })
      .then(function (response) {
        if (response.data.type === "salarie") {
          window.location.href = "/AccSalarie";
        }
        if (response.data.type === "Indepandent") {
          window.location.href = "/Accfreelencer";
        }
        if (response.data.type === "Administrateur") {
          window.location.href = "/AccAdmin";
        }
      });
  };

  const inscrire = () => {
    window.location.href = "/";
  };

  return (
    <div className="container-page">
      <div>
        <img className="sign-img" src="./astute.png" alt="" />
      </div>

      <form onSubmit={register}>
        <h1> Formulaire d'inscription</h1>
        <input
          type="text"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          placeholder="Entrer votre nom"
        />

        <input
          type="text"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
          placeholder="Entrer votre Prénom"
        ></input>

        <label>Date de naissance</label>
        <input
          type="date"
          value={dateNaissance}
          onChange={(e) => setDateN(e.target.value)}
        ></input>

        <label>Date d'entrée Astute</label>
        <input
          type="date"
          value={dateEntree}
          onChange={(e) => setDateE(e.target.value)}
        />
        <fieldset>
          <label>
            Veuillez choisir un poste :
            <select
              value={type}
              onChange={(event) => setType(event.target.value)}
            >
              <option value="salarie">Salarié</option>
              <option value="Indepandent">Indepandent</option>
              <option value="Administrateur">Administrateur</option>
            </select>
          </label>
        </fieldset>

        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setMail(e.target.value)}
          placeholder="Entrer votre email"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setMp(e.target.value)}
          placeholder="Entrer votre mots de passe"
        />

        <Button
          type="submit"
          disabled={
            !password ||
            !email ||
            !dateNaissance ||
            !dateEntree ||
            !nom ||
            !prenom
          }
        >
          Enregistrer
        </Button>

        <h5>
          <span className="signup">Déjà inscrit ?</span>
          <span className="signup-link1" onClick={inscrire}>
            Connectez-vous
          </span>
        </h5>
      </form>
    </div>
  );
}

export default Formulaire;
