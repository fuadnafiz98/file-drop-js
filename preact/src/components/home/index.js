import { h } from "preact";
import rollup_svg from "asset-url:../../assets/images/rollup.svg";

const Home = () => {
  return (
    <div class="bg-dark-blue">
      <h2>google</h2>
      <img src={rollup_svg} />
      <h2 class="text-blue-500">Home 🏛</h2>
    </div>
  );
};

export default Home;
