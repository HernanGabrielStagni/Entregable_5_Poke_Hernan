import React from "react";
import FormNameUser from "../components/Home/FormNameUser";
import { useSelector } from "react-redux";
import LogoPokedexSvg from "../../public/img/LogoPokedexSvg";
import "../components/0_Styles/home.css";

const Home = () => {
  const { trainerName } = useSelector((state) => state);
  return (
    <div className="pokedex__container">
      <div className="pokedex__body">
        <article className="pokedex__article">
          
          <div className="pokedex_logo-img">
            <img src="./img/logo_Pokedex_png_SFondo.png" alt="" />
          </div>

          <h2 className="pokedex__saludo-trainer"> Hi... Pokemon Trainer !</h2>
         
          <p className="pokedex__give-name">
            Pleace give us your trainer name to start.{" "}
          </p>

          <FormNameUser />
        </article>
      </div>
      
      <div className="pokedex_footer">
        <img src="/img/footer_Pokedex_png_SFondo.png" alt="" />
      </div>
    
    </div>
  );
};

export default Home;
