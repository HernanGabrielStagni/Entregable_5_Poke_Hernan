import React, { useState } from "react";
import { useSelector } from "react-redux";
import FormPoke from "../components/Pokedex/FormPoke";
import PokeContainer from "../components/Pokedex/PokeContainer";
import './styles_pages/styles_Pokedex.css'

const Pokedex = () => {
  const urlBase = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";
  const [formUrl, setFormUrl] = useState(urlBase); // creo este estado para pasar la informacion entre hermanos
  // voy a usar los values que consegui con onChange
  // formPoke y pokeContainer  son hijos de la rurta Pokedex(no hace falta un estadpo global)

  const { trainerName } = useSelector((state) => state);

  return (

    <article className="pokedex__container">
      
       <header className="pokedex__header">
        <img className="img__guarda" src="../../public/img/GUARDA_SUP_POKE.png" alt="" />
          <img className="img__logo" src="../../img/logo_Pokedex_png_SFondo.png" alt="" />
        </header>
      <section className="pokedex__body">
        
        <p className='pokedex__welcome-container'>
          <span className='pokedex__welcome-span1'>Welcome  {trainerName}...!</span>
          <span className='pokedex__welcome-span2'> here you can find your favorite Pokemon</span>
        
        </p>
          {/*le pase la props para que guarde el estado */}
        <FormPoke urlBase={urlBase} setFormUrl={setFormUrl} />{" "}
        <PokeContainer formUrl={formUrl} />

      </section>

    </article>

   
  );
};

export default Pokedex;
