import "./Home.css";
import HeroImage from "../../assets/Big.png";
import ImageOne from "../../assets/data.svg";
import ImageTwo from "../../assets/audio.svg";
import ImageFive from "../../assets/image.svg";
import ImageFour from "../../assets/maker.svg";
const Home = () => {
  return (
    <div className="HomeContainer">
      <div className="textContainer">
        <h1 className="boldText">
          Make <br />
          remote work
        </h1>
        <p className="lightText">
          Get your team in sync, no matter your location. <br />
          Streamline processes, create team rituals, and <br />
          watch productivity soar
        </p>
        <button className="button">Learn More</button>
        <div className="Icons">
          {/* coming back here */}
          <img src={ImageOne} alt="" className="imageOne" />
          <img src={ImageTwo} alt="" className="imageTwo" />
          <img src={ImageFive} alt="" className="imageFive" />
          <img src={ImageFour} alt="" className="imageFour" />
        </div>
      </div>
      <div className="imageContainer">
        <img src={HeroImage} alt="" className="image" />
      </div>
    </div>
  );
};
export default Home;
