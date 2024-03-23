import Classes from "../components/ExploreArchive.module.css";
import "./exploreArchives.css";
import { Link } from "react-router-dom";

function ExploreArchive() {
  return (
    <div className={Classes.pageBG}>
      <div className={Classes.pageContainer}>
        <div id="cards-container">
          <div class="earow">
            <Link to="/manuscripts">
              <div class="flip-card" id="card1">
                <div class="flip-card-inner">
                  <div class="flip-card-front"></div>
                  <div class="flip-card-back">
                    <h1>Manuscripts</h1>
                    <p>
                      Explore the rich heritage of Ancient Tamil civilization
                      through our meticulously curated manuscript archive. Delve
                      into centuries-old texts, each a window into the profound
                      wisdom, literature, and cultural legacy of Tamil Nadu
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/sculptures">
              <div class="flip-card" id="card2">
                <div class="flip-card-inner">
                  <div class="flip-card-front"></div>
                  <div class="flip-card-back">
                    <h1>3D Model</h1>
                    <p>
                      Step into a world where stone speaks volumes. Our
                      sculpture archive showcases the enduring artistry of
                      Ancient Tamil craftsmen. Discover intricately carved
                      masterpieces that embody the stories, beliefs, and
                      aesthetics of a bygone era.
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="card" id="card2">
                <div className="overlay">
                  <h4>360 Virtual tour</h4>
                  <p>
                    Step into a world where stone speaks volumes. Our sculpture
                    archive showcases the enduring artistry of Ancient Tamil
                    craftsmen. Discover intricately carved masterpieces that
                    embody the stories, beliefs, and aesthetics of a bygone era.
                  </p>
                </div>
              </div> */}
            </Link>
          </div>
          <div class="earow">
            <Link to="/threesixty">
              <div class="flip-card" id="card3">
                <div class="flip-card-inner">
                  <div class="flip-card-front"></div>
                  <div class="flip-card-back">
                    <h1>360 Virtual Tour</h1>
                    <p>
                      Embark on a virtual pilgrimage through the sacred temples
                      of Tamil Nadu with our immersive 360-degree views. Explore
                      every architectural marvel, intricate detail, and
                      spiritual ambiance, bringing the essence of these revered
                      sites directly to your screen
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/ar">
              <div class="flip-card" id="card4">
                <div class="flip-card-inner">
                  <div class="flip-card-front"></div>
                  <div class="flip-card-back">
                    <h1>Augmented Reality</h1>
                    <p>
                      Step into the divine realm of Tamil Nadu's temples like
                      never before with our cutting-edge Augmented Reality (AR)
                      templates. Experience the grandeur and spirituality of
                      these ancient wonders in the palm of your hand, as history
                      blends seamlessly with modern technology
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="card" id="card4">
                <div className="overlay">
                  <div className="overlay_inner">
                    <h4>Augmented Reality</h4>
                    <p>
                      Step into the divine realm of Tamil Nadu's temples like
                      never before with our cutting-edge Augmented Reality (AR)
                      templates. Experience the grandeur and spirituality of
                      these ancient wonders in the palm of your hand, as history
                      blends seamlessly with modern technology
                    </p>
                  </div>
                </div>
              </div> */}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreArchive;
