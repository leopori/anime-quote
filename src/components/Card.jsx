import React, { useEffect, useState } from 'react'
import useImg from '../hooks/useImg'
import ButtonAnime from './ButtonAnime'




const Card = ({ animeRandom, colorRandom, clickButtonAnime }) => {

   const {imgChange} = useImg({ animeRandom })



    return (
        <article className={`card backgd ${imgChange}`} >

            <div className="info">
                <p className='paragraph' style={{ color: colorRandom }}>
                    {animeRandom.quote}
                </p>

                <h2 className='name-quote' style={{ color: colorRandom }} >
                    {animeRandom.name}
                </h2>

                <h3 className='anime-name'>
                    {animeRandom.anime}
                </h3>
            </div>


            <div className='divBut'>
                <ButtonAnime
                    clickButtonAnime={clickButtonAnime}
                />
            </div>

        </article>
    )
}

export default Card