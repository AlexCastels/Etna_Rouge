import "../style.scss";
import { Product } from "../interfaces";

const HeroSection = (props: Partial<Product>) => {
  return (
    <div className="hero-cont">
      <video src={props.video} muted autoPlay loop></video>
    </div>
  );
};

export default HeroSection;
