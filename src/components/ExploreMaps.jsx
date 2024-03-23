import Classes from "../components/ExploreMaps.module.css";
import logo from "../assets/map.png";

import { Link } from "react-router-dom";
import { useState } from "react";

function ExploreMaps() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const generateMapURL = (inputValue) => {
    return `https://www.google.com/maps/search/museum+in+${inputValue}/`;
  };

  return (
    <div className={Classes.pageContainer}>
      <div>
        <img src={logo} className={Classes.imgcont} />
        <div className={Classes.searchCont}>
          <div className={Classes.inputContainer}>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Enter something..."
            />
          </div>

          <div className={Classes.text}>
            <a
              href={generateMapURL(inputValue)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Locate museums in {inputValue}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreMaps;
