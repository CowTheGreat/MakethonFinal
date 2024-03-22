import Classes from "../components/Landing1.module.css";
import welcomeStatue from "../assets/welcomeStatue.png";
import ExploreArchive from "../components/ExploreArchive";
import { useState } from "react";

function Landing1() {
  return <>
  <div className={Classes.pageBG}>
        <div className={Classes.pageContainer}>
          <div className={Classes.textContainer}>
            <div className={Classes.welcome}>WELCOME TO ARCHIVE</div>
            <div className={Classes.desc}>
              WE ARCHIVE AND DIGITALIZE ALL KINDS OF ANCIENT MANUSCRIPTS AND
              SCULPTURES FOR REASERCH AND PUBLIC DISPLAY.
            </div>
            <div className={Classes.archiveButton}>
              EXPLORE ARCHIVE
            </div>
          </div>
          <img src={welcomeStatue} className={Classes.welcomeStatue} />
        </div>
      </div>
  </>;
}

export default Landing1;
