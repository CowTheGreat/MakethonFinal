import Classes from "../components/LandingAR.module.css";
import ARphoto1 from "../assets/ARphoto1.png";
import ARphoto2 from "../assets/ARphoto2.png";
import ARphoto3 from "../assets/ARphoto3.png";

function LandingAR() {
  return (
    <div className={Classes.pageBG}>
      <div className={Classes.pageContainer}>
        <div className={Classes.title}>AR AND 3-D Sculpture</div>
        <div className={Classes.row}>
          <div className={Classes.sideSection}>
            <div className={Classes.subTitle}>AR</div>
            <div className={Classes.content}>
              We digitize and present sculptures to the users through AR. The
              users can view all the ancient sculptures in Augmented Reality and
              experience the true essence of the artifact
            </div>
          </div>
          <div className={Classes.midSection}>
            <img src={ARphoto1} className={Classes.midImage} />
          </div>
          <div className={Classes.sideSection}>
            <div className={Classes.subTitle}>Chola bronze sculpture</div>
            <div className={Classes.content}>
              A body of bronze-cast sculptures made through the tenth to
              thirteenth centuries in southern India, Chola bronzes are
              especially known for depictions of Shiva as the Lord of Dance,
              Nataraja.
            </div>
          </div>
        </div>
        <div className={Classes.row}>
          <div className={Classes.sideSection}>
            <img src={ARphoto2} className={Classes.image} />
          </div>
          <div className={Classes.midSection}>
            <div className={Classes.subTitle}>
              Sculpture in the Indian subcontinent
            </div>
            <div className={Classes.content}>
              Partly because of the climate of the Indian subcontinent makes the
              long-term survival of organic materials difficult, essentially
              consists of sculpture of stone, metal or terracotta. It is clear
              there was a great deal of painting, and sculpture in wood and
              ivory, during these periods, but there are only a few survivals.
              The main Indian religions had all, after hesitant starts,
              developed the use of religious sculpture by around the start of
              the Common Era, and the use of stone was becoming increasingly
              widespread.
            </div>
          </div>
          <div className={Classes.sideSection}>
            <img src={ARphoto3} className={Classes.image} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingAR;
