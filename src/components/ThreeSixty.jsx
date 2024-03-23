import classes from "../components/ThreeSixty.module.css";

function ThreeSixty(props) {
  return (
    <div className={classes.pageBG}>
      <div className={classes.pageContainer}>
        <div className={classes.popUpContainer}>
          <div className="tourContainer">
            <iframe
              src={props.ariframe}
              className={classes.threeDiframe}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThreeSixty;
