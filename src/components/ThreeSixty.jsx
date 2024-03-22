import classes from "../components/ThreeSixty.module.css";

function ThreeSixty() {
  return (
    <div className="tourContainer">
      <iframe
        src="https://kuula.co/share/collection/7cJsq?logo=1&info=1&fs=1&vr=0&sd=1&initload=0&autop=5&thumbs=1"
        className={classes.threeDiframe}
      ></iframe>
    </div>
  );
}

export default ThreeSixty;
