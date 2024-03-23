import Classes from "../components/LandingTour.module.css";
import threesixty from "../assets/360tour.jpeg";
import manuscript1 from "../assets/threesixtyimg1.jpeg";
import manuscript2 from "../assets/threesixtyimg2.jpg";
import manuscript3 from "../assets/manuscript_3.jpeg";
import { Link } from "react-router-dom";

function LandingTour() {
  return (
    <div className={Classes.pageBG}>
      <div className={Classes.pageContainer}>
        <div className={Classes.title}>
          <div className={Classes.imgContainer}>
            <img src={threesixty} className={Classes.image} />
          </div>
        </div>

        <div className={Classes.bottomContainer}>
          <div className={Classes.descBox}>
            <div className={Classes.desc}>
              In the 360 virtual tour of temples, you can explore the stunning
              architecture and serene surroundings while learning about the rich
              cultural significance of each temple. As you navigate through the
              virtual tour, labels will indicate the areas where famous
              festivals are celebrated, offering insights into the vibrant
              traditions and celebrations that take place in these sacred
              spaces.
            </div>
            <Link to="/threesixty">
              <div className={Classes.button}>Learn More</div>
            </Link>
          </div>
          <div className={Classes.bottomImages}>
            <img src={manuscript1} className={Classes.subImage} />
          </div>
          <div className={Classes.bottomImages}>
            <img src={manuscript2} className={Classes.subImage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingTour;
