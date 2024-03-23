import Classes from "../components/Landing1.module.css";
import welcomeStatue from "../assets/welcomeStatue.png";
import ExploreArchive from "../components/ExploreArchive";
import { useState } from "react";

function Landing1() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      {modal && (
        <div className={Classes.modal}>
          <div onClick={toggleModal} className={Classes.overlay}>
            <ExploreArchive />
          </div>
          <button className={Classes.closeModal} onClick={toggleModal}></button>
        </div>
      )}
      <div className={Classes.pageBG}>
        <div className={Classes.pageContainer}>
          <div className={Classes.textContainer}>
            <div className={Classes.arc}>#Archive.net</div>
            <div className={Classes.welcome}>WELCOME TO ARCHIVE</div>
            <div className={Classes.desc}>
              WE ARCHIVE AND DIGITALIZE ALL KINDS OF ANCIENT MANUSCRIPTS AND
              SCULPTURES FOR REASERCH AND PUBLIC DISPLAY.
            </div>
            <div onClick={toggleModal} className={Classes.archiveButton}>
              EXPLORE ARCHIVE
            </div>
          </div>
          <img src={welcomeStatue} className={Classes.welcomeStatue} />
        </div>
      </div>
    </>
  );
}

export default Landing1;
