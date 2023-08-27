import classes from "./SlideCard.module.css";
import imgOne from "../../assets/barbie.jpg";
import imgTwo from "../../assets/flash.jpg";
import imgThree from "../../assets/spiderman.jpg";

function SlideCard() {
  return (
    <div className={classes.card}>
      <div className={classes.text}>
        <h1>WATCHING TIME</h1>
        <p>Find the best match for your taste..</p>
      </div>
      <div className={classes.image}>
        <img src={imgOne} alt="poster"></img>
        <img src={imgTwo} alt="poster"></img>
        <img src={imgThree} alt="poster"></img>
      </div>
    </div>
  );
}

export default SlideCard;
