import classes from "../components/MainHeader.module.css";
import logo from "../assets/Archive_logo.png";
import { Link } from "react-router-dom";

function MainHeader() {
  return (
    <>
      <div className={classes.navbar}>
        <Link to="/" className={classes.logo}>
          <img src={logo} className={classes.logo} />
          <h1>Archive</h1>
        </Link>

        <div className={classes.navbuttons}>
          <Link to="/sculptures">Sculptures</Link>
          <Link to="/manuscripts">Manuscripts</Link>
          <Link to="/threesixty">360 Tour</Link>
          <Link to="/ar">AR</Link>
          <Link to="/explore">Explore</Link>
          <Link to="/suggestions">Suggestions</Link>
        </div>
      </div>
    </>
  );
}

export default MainHeader;
