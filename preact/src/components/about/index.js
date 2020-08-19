import { h } from "preact";
import image from "asset-url:../../assets/images/image.png";
import image2 from "asset-url:../../assets/images/image.png";
import rollup from "asset-url:../../assets/images/rollup.svg";
const About = () => {
  return (
    <div>
      <h3>About</h3>
      <img src={image2} />
      <img src={image} />
    </div>
  );
};

export default About;
