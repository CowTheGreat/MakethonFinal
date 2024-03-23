import classes from "../components/ARCard.module.css";

function AR(props) {
  return (
    <div className={classes.pageBG}>
      <div className={classes.pageContainer}>
        <div className={classes.ARcontainer}>
          <iframe src={props.arAdd} className={classes.ARframe}></iframe>
        </div>
      </div>
    </div>
  );
}

export default AR;
