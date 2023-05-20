import React from "react";
import FormNameUser from "../components/Home/FormNameUser";
import { useSelector } from "react-redux";
import LogoPokedexSvg from "../../public/img/LogoPokedexSvg";
import "../pages/styles_pages/home.css";

const Home = () => {
  const { trainerName } = useSelector((state) => state);
  return (
    <div className="home__container">
      <div className="home__body">
        <article className="home__article">
          
          <div className="home_logo-img">
            <img src="./img/logo_Pokedex_png_SFondo.png" alt="" />
          </div>

          <h2 className="home__saludo-trainer"> Hi... Pokemon Trainer !</h2>
         
          <p className="home__give-name">
            Pleace give us your trainer name to start.{" "}
          </p>

          <FormNameUser />
        </article>
      </div>
      
      <div className="home_footer">
        <img src="/img/footer_Pokedex_png_SFondo.png" alt="" />
      </div>
    
    </div>
  );
};

export default Home;
