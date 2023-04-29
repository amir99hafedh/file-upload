import React, { useState } from "react";
import "./Connexion.css";
import axios from "axios";
import Button from "../users/Admin/FormElements/Button";
import Input from "../users/Admin/FormElements/Inputs";
import { VALIDATOR_REQUIRE } from "../Valide/Validators";

function Connexion() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const form = () => {
    window.location.href = "formulaire";
  };

  const getData = (e) => {
    console.log(email);
    console.log(password);
    e.preventDefault();
    axios
      .post("http://localhost:4000/auth/login", {
        email,
        password,
      })
      .then(function (response) {
        if (response.data.type === "salarie") {
          localStorage.setItem("userId", response.data.userId);
          window.location.href = "/AccSalarie";
          // <Link to="/Accsalarie" />;
        }
        if (response.data.type === "Indepandent") {
          localStorage.setItem("userId", response.data.userId);
          window.location.href = "/Accfreelencer";
          // <Link to="/Accfreelencer" />;
        }
        if (response.data.type === "Administrateur") {
          window.location.href = "/AccAdmin";
        }
      });
  };
  return (
    <div className="connexion">
      <div>
        <img className="sign-img2" src="./astute.png" alt="" />
      </div>

      <form>
        <h1>Connectez-vous</h1>
        <input
          type="email"
          placeholder="Entrer votre email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Entrer votre mots de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" disabled={!password || !email} onClick={getData}>
          Se sonnecter
        </Button>

        <h4>
          <span className="signin">Nouveau dans Astute ?</span>
          <span className="signin-link" onClick={form}>
            S'inscrire maintenant.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default Connexion;
