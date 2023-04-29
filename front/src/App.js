import React from "react";
import "./App.css";
import Accfreelencer from "./users/freelencer/Accfreelencer";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import CraFreelencer from "./users/freelencer/components/CraFreelencer";
import Facture from "./users/freelencer/components/Facture";
import AccSalarie from "./users/salarie/AccSalarie";
import AccAdmin from "./users/Admin/AccAdmin";
import CraSalarie from "./users/salarie/components/CraSalarie";
import NewJob from "./users/Admin/components/Job/NewJob";
import Utilisateur from "./users/Admin/components/Utilisateurs/Utilisateurs";
import Job from "./users/Admin/components/Job/Job";
import UsersJob from "./users/Job__Affiche/UserJobAdmin";
import UpdateJob from "./users/Job__Affiche/UpdateJob";
import Connexion from "./Auth/Connexion";
import UserJob from "./users/userJob/UserJob";
import Formulaire from "./Auth/Enregistrement";
import Cra from "./users/cra/pages/Cra";
import UsersJobAdmin from "./users/Job__Affiche/UserJobAdmin";
import CraAdmin from "./users/cra/components/CraAdmin";
import Dashboard1 from "./dashboard/Dashboard"
import AffUsersFreelencers from "./users/UsersAdmin/Affichage.Users/AffUsersFreelencers";
import AffUsersSalarie from "./users/UsersAdmin/AffichageUsersSalarie.js/AffUsersSalarie";
import CraSalarieAdmin from "./users/cra/components/craSalarie/CraSalarie";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Connexion />
          </Route>

          <Route path="/dashboard1">
            <Dashboard1 />
          </Route>

          <Route path="/AccAdmin" exact>
            <AccAdmin />
          </Route>

          <Route path="/:userId/job" exact>
            <UsersJob />
          </Route>

          <Route path="/job/new" exact>
            <NewJob />
          </Route>

          <Route path="/job/:id">
            <UpdateJob />
          </Route>

          <Route path="/utilisteur" exact>
            <Utilisateur />
          </Route>

          <Route path="/jobAcc" exact>
            <Job />
          </Route>

          {/* <Route path="/:cra/crafreenlecer">
            <CraFreelencer />
          </Route> */}

          <Route path="/formulaire" exact>
            <Formulaire />
          </Route>

          <Route path="/AccFreelencer">
            <Accfreelencer />
          </Route>

          <Route path="/AccSalarie">
            <AccSalarie />
          </Route>

          <Route path="/tousLesJobs">
            <UsersJobAdmin />
          </Route>

          <Route path="/espaceJob">
            <UserJob />
          </Route>

          <Route path="/userFreelencers" exact>
            <AffUsersFreelencers />
          </Route>

          <Route path="/userSalarie" exact>
            <AffUsersSalarie />
          </Route>

          <Route path="/craSalarie/:id">
            <CraSalarie />
          </Route>

          <Route path="/crafreelencer">
            <CraFreelencer />
          </Route>

          <Route path="/facture">
            <Facture />
          </Route>

          <Route path="/formulaire" exact>
            <Formulaire />
          </Route>

          <Route path="/craUserSalarie/:id" exact>
            <CraSalarieAdmin/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

/*
     <Route path='/' exact>
           <AcceuilApp/>
         </Route>

         <Route path='/connexion' exact>
           <Connexion/>
         </Route>

       <Route path='/accAdmin' exact>
           <AccAdmin/>
         </Route>
      
         <Route path='/:userId/job' exact>
          <UsersJob/>
         </Route>

         <Route path='/job/new' exact>
           <NewJob/>
           </Route>

           <Route path='/job/:jobId'>
            <UpdateJob/>
           </Route>
         
         <Route path='/utilisteur' exact>
          <Utilisateur/>
         </Route>

         <Route path='/user' exact>
           <User/>
         </Route>

         <Route path='/craFreenlecer' exact>
           <CraFreelencer/>
         </Route>

         <Route path='/facture' exact>
           <Facture/>
         </Route>

         <Route path='/esapceJob' exact>
           <EspaceJob/>
         </Route>

         <Route path='/craSalarie' exact>
           <CraSalarie/>
         </Route>

         <Route path='/jobAcc' exact>
           <Job/>
         </Route>
      */
