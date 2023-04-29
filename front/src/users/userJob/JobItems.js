import React, { useState } from "react";
import "./JobItems.css";
import Button from "../Admin/FormElements/Button";
import NavUsers from "../../nav_footer/Nav/Nav__users/NavUsers";
import Modal from "../../modal/Modal.js";

const JobItems = (props) => {
  const [postuler, setPostuler] = useState(false);

  const openPostuler = () => setPostuler(true);

  const closePostuler = () => setPostuler(false);

  /*const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/job/")
      .then((res) => {
        console.log("Postuler job", res.data);
        setData(res.data);
      })

      .catch((err) => console.log(err));
  }, []);
*/
  //const jobId = useParams().jobId; // separer les id des utilisateur
  // const identifiedJob = setData.find(p => p._id === jobId); // cherche si id est meme qu' on a cliquer

  return (
    <React.Fragment>
      <Modal
        show={postuler}
        onCancel={closePostuler}
        header={props.title}
        contentClass="place_item__modal-content"
        footerClass="place_item__modal-actions"
        footer={
          <div className="center_1">
            <Button onClick={closePostuler}>Annuler</Button>
            <Button danger>enregistrer</Button>
          </div>
        }
      >
        <div className="file">
          <p> Vous éte intéressé !! envoyez vous votre CV </p>
          <label for="myfile">Selectionner une piéce joindre : </label>
          <input type="file"></input>
        </div>
      </Modal>

      <div className="card8">
        <NavUsers />

        <div className="place-item__content">
          <div>
            <div className="place-item__info">
              <h2>{props.title}</h2>
            </div>
            <div>
              <p>
                <span>{props.description}</span>
              </p>
            </div>
          </div>

          <div className="place-item__actions">
            {/*to={`/esapceJob/${data.id}`}*/}
            <Button danger onClick={openPostuler}>
              Postuler
            </Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default JobItems;
