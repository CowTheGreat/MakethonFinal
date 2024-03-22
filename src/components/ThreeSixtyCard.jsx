import classes from "../components/ThreeSixtyCard.module.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function ThreeSixtyCard() {
  return (
    <div>
      <div className={classes.pageBG}>
        <div className={classes.pageContainer}>
          <div className={classes.flexcontainer}>
            <div className={classes.flexbox11}>
              <h1>360 Virtual Tour</h1>
            </div>
          </div>
          <div className={classes.flexcontainer1}>
            <Link to="/tour1">
              <div className={classes.flexbox1}>
                <h1 className={classes.text}>
                  Kapaleeshwarar <br /> Temple
                </h1>
              </div>
            </Link>
            <Link to="/tour2">
              <div className={classes.flexbox2}>
                <h1 className={classes.text}>
                  Sri Viajaya Ganapthi <br />
                  Temple
                </h1>
              </div>
            </Link>
            <Link to="/tour3">
              <div className={classes.flexbox3}>
                <h1 className={classes.text}>Vaikundaperumal Temple</h1>
              </div>
            </Link>
            <Link to="/tour4">
              <div className={classes.flexbox4}>
                <h1 className={classes.text}>
                  &nbsp; Kailasanathar <br /> Temple &nbsp;
                </h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThreeSixtyCard;
