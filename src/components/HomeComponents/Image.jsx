import Fades from "../../Animations/Fades";
import IMG from "../../assets/my-image.jpg";
import "./Image.css";
import { Waves } from "./Waves";

const Image = () => {
  return (
    <div className="image-container">
      <Waves />
      <Fades animationType="fadeRotate">
        <img className="my-image" src={IMG} alt="my image" />
      </Fades>
    </div>
  );
};

export default Image;
