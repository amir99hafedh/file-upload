import React, {useState} from "react";
import NavUsers from "../../../nav_footer/Nav/Nav__users/NavUsers";
import "./Facture.css";
import Button from "../../Admin/FormElements/Button";
import axios from "axios";

const Facture = () => {
  const [date, setDate] = useState("");
  const [commantaire, setCommantaire] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const fileSelectedHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

   const fileUploadHandler = () => {
     const formData = new FormData();
     formData.append("file", selectedFile);

     axios
       .post("http://localhost:4000/api/upload", formData)
       .then((res) => {
         console.log(res.data);
       })
       .catch((err) => {
         console.log(err);
       });
   };
  
  /*const PostData = (e) => {
    console.log(date);
    console.log(commantaire);
    e.preventDefault();
    axios
      .post("http://localhost:4000/facture/", {
        date,
        commantaire,
      })
      .then(function (response) {
        console.log(response);
      });
    }*/


  return (
    <div className="file-card">
      <NavUsers />
      <h1 className="envoi">j'envoie ma facture</h1>
      <fieldset>
        <br />
        <br />

        <fieldset>
          <form>
            <label for="bdaymonth" className="sel">
              Selectionner une année et un mois :
            </label>

            <input
              type="month"
              id="bdaymonth"
              name="bdaymonth"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </form>
          <br />

            <div className='file-inputs'>
                       <label for="myfile">Selectionner une piéce joindre : </label>
                       <input type="file" onChange={fileSelectedHandler}></input>
            
                </div>
              
            
          
        </fieldset>

        <h4 className="h9">commantaire</h4>
        <textarea
          className="text1"
          value={commantaire}
          onChange={(e) => setCommantaire(e.target.value)}
          placeholder="Commantaire...."
        />
      </fieldset>
      <Button
        className="bt"
        type="submit"
        id="contact-submit"
        data-submit="...Sending"
        onClick={fileUploadHandler}
      >
        Envoyer
      </Button>
    </div>
  );
};
export default Facture;
