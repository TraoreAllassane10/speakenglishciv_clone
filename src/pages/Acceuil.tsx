import Footer from "../components/Footer";
import HeroContact from "../components/HeroContact";
import HeroHome from "../components/HeroHome";
import Packs from "../components/Packs";
import Services from "../components/Services";

const Acceuil = () => {
  return (
    <>
      <HeroHome />
      <Services />
      <Packs/>
      <HeroContact/>
      <Footer/>
    </>
  );
};

export default Acceuil;
