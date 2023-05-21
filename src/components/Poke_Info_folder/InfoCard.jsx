import React from 'react'
import './CSS_InfoCard.css'
const InfoCard = ({ pokemon }) => {

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
                            <span className='altura_value'>{pokemon?.height}</span>
                          </p>
                        </div>
                    
                    </div>

                </section>

            </div>


        </>
    )
}

export default InfoCard