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
              <div className="card" id="card1">
                <div className="overlay">
                  <h4>Manuscripts</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque, tempore doloremque repellendus quia tempora et ea
                    reiciendis eaque qui obcaecati non voluptate eos minus enim
                    laudantium voluptas porro mollitia odio!
                  </p>
                </div>
              </div>
            </Link>
            <Link to="/threesixty">
              <div className="card" id="card2">
                <div className="overlay">
                  <h4>360 Virtual tour</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis velit rerum nihil praesentium tempora unde voluptatem
                    aut, quidem alias aliquid, possimus architecto aspernatur
                    earum laudantium culpa quisquam quaerat, autem vero.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div class="earow">
            <Link to="/sculptures">
              <div className="card" id="card3">
                <div className="overlay">
                  <h4>3D Model</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus assumenda quisquam earum aut sunt unde fuga
                    alias obcaecati nam! Recusandae eligendi velit perferendis
                    voluptatibus minus sunt animi tenetur enim pariatur?
                  </p>
                </div>
              </div>
            </Link>
            <Link to="/ar">
              <div className="card" id="card4">
                <div className="overlay">
                  <h4>Augmented Reality</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione impedit harum velit incidunt ducimus eos architecto
                    sint, cumque id itaque. Quis aliquam rerum ad exercitationem
                    suscipit, voluptas veritatis nemo recusandae?
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreArchive;
