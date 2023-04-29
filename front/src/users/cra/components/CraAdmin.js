import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CraItems.css";
import Button from "../../Admin/FormElements/Button";
import axios from "axios";
import NavAdmin from "../../../nav_footer/Nav/Nav__admin/NavAdmin";
import "./CraAdmin.css";

const CraAdmin = (props) => {
  const [selectedDate1, setSelectedDate1] = useState(new Date());
  const [showInfo, setShowInfo] = useState(false);

  const [data, setData] = useState([]);

  const HandleClick = () => {
    setShowInfo(true);
    useEffect(() => {
      axios
        .get("http://localhost:4000/CraS/")
        .then((res) => {
          console.log("cra salarie", res.data);
          setData(res.data);
        })
        .catch((err) => console.log(err));
    }, []);
  };

  const handleClose = () => {
    setShowInfo(false);
  };

  const renderInfo = () => {
    if (showInfo) {
      return (
        <div>
             <br/>
         
          <p className="info-cra">Informations pour le {selectedDate1.toLocaleDateString()} :</p>
          <br/>
       
          <div className="box22">
            <div className="container12">
              <span>
                <h4>
                  Date : <br />
                </h4>
                {props.date}
              </span>
            </div>

            <div className="container12">
              <span>
                <h5>Presence :</h5>

                {props.presence}
              </span>
            </div>

            <div className="container12">
              <h5>Absence :</h5>
              {props.absence}
            </div>

            <div className="container12">
              <h5>RTT : </h5>
              {props.rtt}
            </div>

            <div className="container12">
              <h5> Congé payer :</h5> {props.maladie}
            </div>

            <div className="container1">
              <h4>Congé sans solde :</h4>
              {props.congeSansSolde}
            </div>
          </div>
          <br/>
          <br/>


          <Button onClick={handleClose}>Fermer</Button>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div>
      <NavAdmin />
      <h1>Consulter le CRA de amir</h1>
      <Calendar className="calender"
        onChange={setSelectedDate1}
        value={selectedDate1}
        onClickDay={HandleClick}
      />
      {renderInfo()}
    </div>
  );
};

export default CraAdmin;
