import classes from "./Slider.module.css";
import SlideCard from "./SlideCard";

function Slider() {
  return (
    <div className={classes.slider}>
      <SlideCard></SlideCard>
    </div>
  );
}

export default Slider;
