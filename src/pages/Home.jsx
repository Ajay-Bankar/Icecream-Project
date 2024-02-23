
import BestsellerCardImages from "../components/BestsellerCardImages";
import CardForHome from "../components/CardForHome";
import Nav from "../components/Nav";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Slider/>
      
      <BestsellerCardImages/>
      <CardForHome/>
      <Nav/>
    </div>
  );
};

export default Home;
