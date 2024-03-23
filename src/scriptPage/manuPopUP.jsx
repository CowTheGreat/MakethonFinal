import styles from "./manuPopUP.module.css";
import popimg2 from "../assets/tamil_manu_bina.jpeg";
import popimg1 from "../assets/tamil_manu.jpeg";

export default function manuPopUP() {
  return (
    <>
      <div className={styles.pageContainer}>
        <div className={styles.popUpContainer}>THIRUKURAL</div>
        <div className={styles.popUpImg1Container}>
          <img src={popimg2} className={styles.subImage} />
          <img src={popimg1} className={styles.subImage} />
        </div>
        <div>
          The Tirukkural or Thirukkural (literally Sacred Verses), or shortly
          the Kural, is a classic Tamil sangam literature consisting of 1330
          couplets or kurals, dealing with the everyday virtues of an
          individual.
        </div>
      </div>
    </>
  );
}
