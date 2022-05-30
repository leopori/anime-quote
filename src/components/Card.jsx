import React from 'react'
import ButtonAnime from './ButtonAnime'




const Card = ({ animeRandom, colorRandom, clickButtonAnime}) => {


    return (
        <article className='card'>
            <p className='paragraph'>
                {animeRandom.quote}
            </p>

            <h2 className='name-quote'>
                {animeRandom.name}
            </h2>

            <h3 className='anime-name'>
                {animeRandom.anime}
            </h3>
            <ButtonAnime
            clickButtonAnime ={clickButtonAnime} 
            />
        </article>
    )
}

export default Card