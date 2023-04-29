import React from "react";
import { useState } from "react";
import NavUsers from "../../../nav_footer/Nav/Nav__users/NavUsers";
import "./CraSalarie.css";
import Button from "../../Admin/FormElements/Button";
import Modal from "../../../modal/Modal";
import axios from "axios";
import { useParams } from "react-router-dom";

function CraSalarie() {
  // Define state variables for the year, month, and selected date
  const [year, setYear] = useState(new Date().getYear());
  const [month, setMonth] = useState(new Date().getMonth());   
  const [day, setDay] = useState(new Date().getDay());
  const [selectedDate, setSelectedDate] = useState(null);

  //back
  const [date, setDate] = useState("");
  const [presence, setPresence] = useState("");
  const [absence, setAbsence] = useState("");
  const [rtt, setRTT] = useState("");
  const [maladie, setMaladie] = useState("");
  const [congeSansSolde, setcongeSansSolde] = useState("");
    

  const userId = useParams().id;

  

  const [sendConge, setSendConge] = useState(false);

  const openSendConge = () => setSendConge(true);

  const closeSendConge = () => setSendConge(false);



  const postData = (e) => {
    e.preventDefault();
    console.log(selectedDate.toLocaleDateString());
    console.log(presence);
    console.log(absence);
    console.log(rtt);
    console.log(maladie);
    console.log(congeSansSolde);
     console.log(userId)
    axios
      .post("http://localhost:4000/craS", {
        presence,
        absence,
        rtt,
        congeSansSolde,
        maladie,
        selectedDate,
        userId
      })
      .then(function (response) {
        console.log(response);
        //setMsg(response.status);
      });
  };

  // Define a function to render the calendar grid for the current month
  function renderCalendarGrid() {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const weeksInMonth = Math.ceil((firstDay + daysInMonth) / 7);

    const days = [];
    let day = 1;
    for (let i = 0; i < weeksInMonth; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < firstDay) || day > daysInMonth) {
          week.push(<td key={`${i}-${j}`} />);
        } else {
          const date = new Date(year, month, day);
          week.push(
            <td
              key={`${i}-${j}`}
              className={
                date.toDateString() === selectedDate?.toDateString()
                  ? "selectionner"
                  : ""
              }
              onClick={() => setSelectedDate(date)}
            >
              {day}
            </td>
          );
          day++;
        }
      }
      days.push(<tr key={i}>{week}</tr>);
    }
    return days;
  }
  function handleInputChange(event) {
    const [yearInput, monthInput] = event.target.value.split("-");
    setYear(parseInt(yearInput));
    setMonth(parseInt(monthInput) - 1);
    setDate(parseInt());
    setSelectedDate(null);
  }
  return (
    <React.Fragment>
      <Modal
        show={sendConge}
        onCancel={closeSendConge}
        header="Evoquer la demande de Congé"
        contentClass="place_item__modal-content"
        footerClass="place_item__modal-actions"
        footer={
          <div className="center_1">
            <Button onClick={closeSendConge}>Annuler</Button>
            <Button danger>Valider</Button>
          </div>
        }
      >
        <div className="conge-inputs">
          <label for="myfile">Selectionner une piéce joindre : </label>
          <input type="file"></input>
        </div>
      </Modal>
      <div className="container-cal">
        <NavUsers />
        <h1 className="craT">Je saisir mon CRA !</h1>
        <p className="p">Choisie une date</p>
        <input onChange={handleInputChange} className="lesDate" type="month" />
        <h3 className="date">{`${new Date(year, month).toLocaleString(
          "default",
          {
            month: "long",
          }
        )} ${year}`}</h3>
        {/* value={date} 
          onChange={(e) => setDate(e.target.value)} */}
        <table className="tabl">
          <thead>
            <tr>
              <th>Lun</th>
              <th>Mar</th>
              <th>Mer</th>
              <th>Jeu</th>
              <th>Ven</th>
              <th>Sam</th>
              <th>dim</th>
            </tr>
          </thead>
          <tbody>{renderCalendarGrid()}</tbody>
        </table>

        <p>
          {selectedDate
            ? `Date choisie :  ${selectedDate.toLocaleDateString()}`
            : "choisie un date"}
        </p>
        {selectedDate && (
          <div>
            <label htmlFor="event-title">Présence : </label>
            <input
              id="event-title"
              type="text"
              value={presence}
              onChange={(e) => setPresence(e.target.value)}
            />

            <label htmlFor="event-title"> Absence : </label>
            <input
              id="event-title"
              type="text"
              value={absence}
              onChange={(e) => setAbsence(e.target.value)}
            />

            <label htmlFor="event-title"> RTT : </label>
            <input
              id="event-title"
              type="text"
              value={rtt}
              onChange={(e) => setRTT(e.target.value)}
            />

            <label htmlFor="event-title"> Congé sans solde : </label>
            <input
              id="event-title"
              type="text"
              value={congeSansSolde}
              onChange={(e) => setcongeSansSolde(e.target.value)}
            />

            <label htmlFor="event-title"> Maladie : </label>
            <input
              id="event-title"
              type="text"
              value={maladie}
              onChange={(e) => setMaladie(e.target.value)}
            />
          </div>
        )}
        <br />
        <br />
        <br />
        <br />

        <Button danger onClick={postData}>
          Envoyez
        </Button>
        <Button danger onClick={openSendConge}>
          Congé
        </Button>
      </div>
    </React.Fragment>
  );
}

export default CraSalarie;
