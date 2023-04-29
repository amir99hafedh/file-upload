import React, { useState } from "react";
import axios from "axios";
import { Calendar } from "react-calendar";
import Button from "../../../Admin/FormElements/Button";
import "./CraFreelencers.css";

function CraFreelencerAdmin() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [userData, setUserData] = useState(null);
  const userId = "6449304aa2b3877b5c8d39ee"; // replace with the actual user ID
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
      `http://localhost:4000/CraF/${userId}?date=${date}`
    );
    setUserData(response.data);
  };

  return (
    <div>
      <Calendar onChange={handleDateChange} />
      {userData && <UserData userData={userData} />}
    </div>
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
              <span>
                <h5>Presence :</h5>

                {userData.presence}
              </span>
            </div>

            <div className="container12">
              <h5>Absence :</h5>
              {userData.absence}
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
export default CraFreelencerAdmin;

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
      <input type="date" value={selectedDate} onChange={handleDateChange} />
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

export default CraSalarieAdmin;*/

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
