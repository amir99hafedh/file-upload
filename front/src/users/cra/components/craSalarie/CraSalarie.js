/*import React, { useEffect } from "react";
import { useState } from "react";
import NavUsers from "../../../../nav_footer/Nav/Nav__users/NavUsers";
import Button from "../../../Admin/FormElements/Button";
import axios from "axios";
import Cal from "./Cal"

function CraSalarieAdmin() {
  // Define state variables for the year, month, and selected date
  const [year, setYear] = useState(new Date().getYear());
  const [month, setMonth] = useState(new Date().getMonth());
  const [day, setDay] = useState(new Date().getDay());
  const [selectedDate, setSelectedDate] = useState(null);
  const [showInfo, setShowInfo] = useState(false);
  const [userData, setUserData] = useState(null);

  //back

  const getData = useEffect(() => {
    
    axios
      .get("http://localhost:4000/CraS/")
      .then((response) => {
        console.log(response.data);
        setUserData(response.data);
        setShowInfo(true);
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);

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
    setSelectedDate(null);
  }
  return (
    <React.Fragment>
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
          onChange={(e) => setDate(e.target.value)} 
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
            {userData.map(
              ({
                _id,
                presence,
                absence,
                maladie,
                congeSansSolde,
                selectedDate,
                rtt,
              }) => (
                <Cal
                  id={_id}
                  presences={presence}
                  absence={absence}
                  maladie={maladie}
                  congeSansSolde={congeSansSolde}
                  date={selectedDate}
                  rtt={rtt}
                />
              )
            )}
          </div>
        )}

        <br />
        <br />
        <br />
        <br />
      </div>
    </React.Fragment>
  );
}

export default CraSalarieAdmin;*/

/*import React, { useState } from "react";
import axios from "axios";
import { Calendar } from "react-calendar";
import Button from "../../../Admin/FormElements/Button";
import NavAdmin from "../../../../nav_footer/Nav/Nav__admin/NavAdmin";
import "./CraSalarie.css";

function CraSalarieAdmin() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [userData, setUserData] = useState(null);
  const userId = "643581c10367a3db58b58d45"; // replace with the actual user ID
  const [showInfo, setShowInfo] = useState(false);

  const handleDateChange = (date) => {
    setShowInfo(true);
    setSelectedDate(date);
    fetchData(date);
  };
  const handleClose = () => {
    setShowInfo(false);
  };

  const fetchData = async (date) => {
    const response = await axios.get(
      `http://localhost:4000/CraS/${userId}?date=${date}`
    );
    setUserData(response.data);
  };

  return (
    <React.Fragment>
      <NavAdmin />
      <div className="cal-sal">
        <Calendar onChange={handleDateChange} />
        {userData && <UserData userData={userData} />}
      </div>
    </React.Fragment>
  );

  function UserData({ userData }) {
    if (showInfo) {
      return (
        <div>
          <br />

          <p className="info-cra">
            Informations pour le {selectedDate.toLocaleDateString()} :
          </p>
          <br />

          <div className="box22">
            <div className="container12">
              <span>
                <h4>
                  Date : <br />
                </h4>
                {userData.selectedDate}
              </span>
            </div>

            <div className="container12">
              <h5>Presence :</h5>

              {userData.presence}
            </div>

            <div className="container12">
              <h5>Absence :</h5>
              {userData.absence}
            </div>

            <div className="container12">
              <h5>RTT : </h5>
              {userData.rtt}
            </div>

            <div className="container12">
              <h5> Congé payer :</h5> {userData.maladie}
            </div>

            <div className="container1">
              <h4>Congé sans solde :</h4>
              {userData.congeSansSolde}
            </div>
          </div>
          <br />
          <br />
          <Button onClick={handleClose}>Fermer</Button>
        </div>
      );
    }
  }
}
export default CraSalarieAdmin;*/

/*import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function CraSalarieAdmin() {
  const [selectedDate, setSelectedDate] = useState("");
  const [userInformation, setUserInformation] = useState([]);
  
  const userId = useParams()._id;

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    axios
      .get(`http://localhost:4000/CraS/${userId}?date=${event.target.value}`)
      .then((response) => {
        setUserInformation(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <input type="month" value={selectedDate} onChange={handleDateChange} />
      {userInformation.map((user) => (
        <div key={user._id}>
          <p>User ID: {user._id}</p>
          <p>Absence: {user.selectedDate}</p>
          <p>Presence: {user.presence}</p>
        </div>
      ))}
    </div>
  );
}

export default CraSalarieAdmin; */
import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const MonthAttendance = () => {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [totals, setTotals] = useState({});

  const userId = useParams().id;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:4000/CraS/?date=${year}-${month}&id=${userId}`
      );
      setTotals(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="year">Year:</label>
        <input
          type="number"
          id="year"
          name="year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />

        <label htmlFor="month">Month:</label>
        <input
          type="number"
          id="month"
          name="month"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        />

        <button type="submit">Get Totals</button>
      </form>
      {console.log(totals)}
      {Object.keys(totals).length > 0 &&
        totals.map((value) => (
          <div>
            <p>Total Presence: {value.presence}</p>
            <p>Total Absence: {value.absence}</p>
          </div>
        ))}
    </div>
  );
};

export default MonthAttendance;

/*import React, { useState } from "react";
import axios from "axios";
import { Calendar } from "react-calendar";

function CraSalarieAdmin() {
  const [userInfo, setUserInfo] = useState([]);

  const handleDateClick = (date) => {
    axios
      .get(`http://localhost:4000/CraS/?date=${date}`)
      .then((response) => {
        setUserInfo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Calendar onClickDay={handleDateClick} />
      <div>
        <h3>User Information:</h3>
        <ul>
          {userInfo.map((user) => (
            <li key={user.id}>
              <div className="container12">
                <span>
                  <h5>Presence :</h5>

                  {user.presence}
                </span>
              </div>

              <div className="container12">
                <h5>Absence :</h5>
                {user.absence}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default CraSalarieAdmin;*/
