import styles from './manuPopUP.module.css'
import popimg2 from '../assets/tamil_manu_bina.jpeg'
import popimg1 from '../assets/tamil_manu.jpeg'


export default function manuPopUP1() {
    return(
        <>
            

            <div className={styles.pageContainer}>
                <div className={styles.popUpContainer}>THOLKAPIYAM</div>
                <div className={styles.popUpImg1Container}>
                    <img src={popimg2} className={styles.subImage} />
                    <img src={popimg1} className={styles.subImage} />
                </div>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, animi! Atque at soluta nam. Quos dolor necessitatibus provident, quisquam ipsa tenetur et repellendus. Sapiente nemo numquam nam vitae nesciunt iste.
            </div>
            </div>
            

        </>
    )
}