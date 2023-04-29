/*import React, { useEffect, useState } from "react";
import CraList from "../components/CraList";
import axios from "axios";

const Cra = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/CraS/")
      .then((res) => {
        console.log("cra salarie", res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!data) return null;

  data.map((data , index) => {
    return (
        <tbody>
      <tr key={index}> 
        <td> {data._id}</td>
        <td> {data.date}</td>
        <td> {data.presence}</td>
        <td> {data.rtt}</td>
        <td> {data.congeSansSolde}</td>
        <td> {data.maladie}</td>
        <td> {data.absence}</td>
      </tr>
      </tbody>
    );
  });

  return <CraList items={data} />;
};

export default Cra; */
