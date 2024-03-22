import Classes from "../components/LandingManuscript.module.css";
import threesixty from "../assets/360tour.jpeg";
import manuscript1 from "../assets/manuscript_1.jpeg";
import manuscript2 from "../assets/manuscript_2.jpeg";
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
              What is the oldest manuscript of India?<br></br>Pandit Jawaharlal
              Nehru, the first Prime Minister of India was aware of the
              intellectual heritage of India took a personal interest in
              ensuring that the Gilgit manuscripts, to date India's oldest
              manuscripts from the sixth century A.D., were brought from Kashmir
              to the National Archives of India to be preserved for
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
          <div className={Classes.bottomImages}>
            <img src={manuscript3} className={Classes.subImage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingTour;
