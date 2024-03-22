import React, { useState } from "react";

import styles from "./manuPage.module.css";

// import manuscriptPic from '../assets/palmleaf1.png'

import SearchIcon from "@mui/icons-material/Search";

import { data } from "./data.js";

import ManuPopUp from "./manuPopUP.jsx";

function manuPage() {
  console.log(data);
  const [modal, setModal] = useState(false);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  // Disable hover styles when popup is open
  const tileClasses = modal ? styles.disabled_hover : styles.dataResult;

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const [names, setNames] = useState(data);

  // function handleNameChange(event){
  //   setsearch(event.target.value);
  // }
  // console.log(search);
  const filterNames = (e) => {
    const search = e.target.value.toLowerCase();
    const filteredNames = data.filter((names) =>
      names.title.toLowerCase().includes(search)
    );
    setNames(filteredNames);
  };

  return (
    <div>
      {modal && (
        <div className={styles.modal}>
          <div onClick={toggleModal}>
            <ManuPopUp />
          </div>
          <button className={styles.closeModal} onClick={toggleModal}></button>
        </div>
      )}

      <div className={styles.pageBG}>
        <div className={styles.pageContainer}>
          <div className={styles.searchBar}>
            <div className={styles.searchIcon}>
              <SearchIcon />
            </div>
            <input
              onChange={(e) => filterNames(e)}
              placeholder="Search"
              type="text"
            ></input>
          </div>
          <div onClick={toggleModal} className={tileClasses}>
            {names.map((name) => {
              return <p className={styles.searchResult}>{name.title}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default manuPage;
