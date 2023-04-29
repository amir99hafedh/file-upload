/*import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CraItems.css";
import Button from "../../Admin/FormElements/Button";

function CraItems(props) {
  const [selectedDate1, setSelectedDate1] = useState(new Date());
  const [showInfo, setShowInfo] = useState(false);

  const handleClick = () => {
    setShowInfo(true);
  };

  const handleClose = () => {
    setShowInfo(false);
  };

  const renderInfo = () => {
    if (showInfo) {
      return (
        <div>
          <p>Informations pour le {selectedDate1.toLocaleDateString()} :</p>

          <div className="box2">
        <div className="container1">
          <span>
            <h4>
              Date : <br />
            </h4>
            {props.date}
          </span>
        </div>

        <div className="container1">
          <span>
            <h5>Presence :</h5>

            {props.presence}
          </span>
        </div>

        <div className="container1">
          <h5>Absence :</h5>
          {props.absence}
        </div>

        <div className="container1">
          <h5>RTT : </h5>
          {props.rtt}
        </div>

        <div className="container1">
          <h5> Congé payer :</h5> {props.maladie}
        </div>

        <div className="container1">
          <h4>Congé sans solde :</h4>
          {props.congeSansSolde}
        </div>
      </div>

          <Button onClick={handleClose}>Fermer</Button>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div>
      <h1>Consulter le CRA de amir</h1>
      <Calendar onChange={setSelectedDate1} value={selectedDate1} onClickDay={handleClick} />
      {renderInfo()}
    </div>
  );
}

export default CraItems;  */

/*import React, { useState } from "react";
import "./CraItems.css";
import Button from "../../Admin/FormElements/Button";
import NavUsers from "../../../nav_footer/Nav/Nav__users/NavUsers"
import Calendar from 'react-calendar';


const CraItems = (props) => {
  const [selectedDate, setSelectedDate] = useState(null);
    
  const handleDateClick = date => {
    setSelectedDate(date);
  }
  return (
  
  
    
    
    
        <div>
          <h1>Calendrier</h1>
          <Calendar
            onClickDay={handleDateClick}/>
          
          {selectedDate && (
            <div>
              <h2>Informations pour le {selectedDate.toLocaleDateString()} :</h2>
              <p>Insérez ici les informations à afficher pour cette date.</p>
            </div>
          )}
        </div>
      );
    }
  

export default CraItems;*/

/*import React, { useState } from "react";
import "./CraItems.css";
import Button from "../../Admin/FormElements/Button";
import NavUsers from "../../../nav_footer/Nav/Nav__users/NavUsers";

const CraItems = (props) => {
  return (
    <React.Fragment>
      <div className="box2">
        <div className="container1">
          <span>
            <h4>
              Date : <br />
            </h4>
            {props.date}
          </span>
        </div>

        <div className="container1">
          <span>
            <h5>Presence :</h5>

            {props.presence}
          </span>
        </div>

        <div className="container1">
          <h5>Absence :</h5>
          {props.absence}
        </div>

        <div className="container1">
          <h5>RTT : </h5>
          {props.rtt}
        </div>

        <div className="container1">
          <h5> Congé payer :</h5> {props.maladie}
        </div>

        <div className="container1">
          <h4>Congé sans solde :</h4>
          {props.congeSansSolde}
        </div>
      </div>
    </React.Fragment>
  );
};

export default CraItems;*/

/*
<React.Fragment>
      <div className="card2">
      <div className="container1">
        <p>
       <span>Date : {props.date}</span>
        </p>
      </div>

      <div className="container1">
        <p>
          <span>Absence : {props.absence}</span>
        </p>
      </div>

      <div className="container1">
        <p>
          <span> Presence : {props.presence}</span>
        </p>
      </div>

      <div className="container1">
        <p>
          <span> RTT : {props.rtt}</span>
        </p>
      </div>

      <div className="container1">
        <p>
          <span>Congé payer : {props.maladie}</span>
        </p>
      </div>

      <div className="container1">
        <p>
          <span> Congé sans solde : {props.congeSansSolde}</span>
        </p>
      </div>
      </div>
    </React.Fragment>
 */
