import classes from "../components/ThreeSixtyCard.module.css";

function ThreeSixtyCard() {
    return(<div className={classes.pageBG
    }><div className={classes.pageContainer}>
        <div className={classes.flexcontainer}>
        <div className={classes.flexbox11}>
           <h1 className={classes.text}>360 Virtual Tour</h1> 
        </div>
        </div>
        <div className={classes.flexcontainer1}>
        <div className={classes.flexbox1}>
        <h1 className={classes.text}>kapaleeshwarar</h1> 
        <h1 className={classes.text}>Temple</h1> 
        </div>
        <div className={classes.flexbox2}>
           <h1 className={classes.text}>Sri ViaJaya Ganapthi </h1> 
           <h1 className={classes.text}>Temple</h1> 
        </div>
        <div className={classes.flexbox3}>
           <h1 className={classes.text}>Vaikundaperumal</h1> 
           <h1 className={classes.text}>Temple</h1> 
        </div>
        <div className={classes.flexbox4}>
           <h1 className={classes.text}>Kailasanathar</h1> 
           <h1 className={classes.text}>Temple</h1> 
        </div>
        </div>
        </div></div>)
}

export default ThreeSixtyCard;