import React from 'react'
import './CSS_InfoCard.css'
import ProgressBar from '../Poke_Info_folder/ProgressBar';
/*npm install --save @ramonak/react-progress-bar*/
/*https://www.npmjs.com/package/@ramonak/react-progress-bar*/

const InfoCard = ({ pokemon }) => {
console.log(pokemon)
    return (
        <>

            <div className='infoCard' >
                <section className='infoCard__container'> {/* Start card section .pokeInfo__Card*/}
                    <header className={`infoCard__header background-color-${pokemon?.types[0].type.name}`}>
                        <img className='infoCard__header-img-Poke' src={pokemon?.sprites.other['official-artwork'].front_default} alt="img pokemon" />
                    </header>
                    <div className="infoCard__info-container">
                        {/*contenedor de la info "id + name + peso-altura + typo y habilidades"*/} 
                        <h3 className='infoCard__info-id'># {pokemon?.id}</h3>

                        <div className="infoCard__name-hr">
                            <hr/>
                            <h3>{pokemon?.name}</h3>
                        </div>
                    {/*********************  hasta aqui el membrete ************************/}
                        <div className="infoCard__peso-altura">
                          <p className="infoCard__peso">
                            <span className='peso_etiqueta'>Weight</span>
                            <span className='peso_value'>{pokemon?.weight}</span>
                           </p>
                          
                          <p className="infoCard__altura">
                            <span className='altura_etiqueta'>Height</span>
                            <span className='peso_value'>{pokemon?.height}</span>
                         </p>
                        </div>
                   </div>

{/************************* * * * Type   and Abilities  * * * ***************************************/}
<div className="pokemon_info_uls">
                  <div>
                    <span className="pokemon_infospan_li">Type</span>
                    <ul className="pokemon_info_types">
                      {pokemon?.types.map((objType) => (
                        <li
                          className="pokemon_info_type-specific"
                          key={objType.type.url}
                        >
                          {objType.type.name}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    
                    <span className="pokemon_infospan_li">Ability</span>
                    <ul className="pokemon_info_hab">
                      {pokemon?.abilities.map((objType) => (
                        <li
                          className="pokemon_infohab_li"
                          key={objType.ability.url}
                        >
                          {objType.ability.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>


{/************************************************************************************/} 
                <ul className="pokemon_info_stats">
                  {pokemon?.stats.map((objStat) => (
                    <li
                      className="pokemon_info_stats-specific"
                      key={objStat.stat.url}
                    >
                      <div className="pokemon_info_container">
                        <span className="pokemon_info_stats-label">
                          {objStat.stat.name}
                        </span>
                        <span className="pokemon_info_stats-label">{objStat.base_stat} /150</span>
                      </div >
                      {/* le paso al componente progressBar una por una las estadisticas */}
                      {/* va a ir pintando un contenedor dentro de otro */}
                      
                      <ProgressBar
                        progress={objStat.base_stat}
                       
                       />
                      <span
                        className={`pokemon_info_stats-value color-${pokemon?.types[0].type.name}`}
                      ></span>
                    </li>
                  ))}
                </ul>

{/************************************************************************************/} 
 
                    




                </section>

            </div>


        </>
    )
}

export default InfoCard