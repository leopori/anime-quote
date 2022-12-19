import React, { useEffect, useState } from 'react'
import ButtonAnime from './ButtonAnime'




const Card = ({ animeRandom, colorRandom, clickButtonAnime }) => {

    const [imgChange, setImgChange] = useState("itachi")


    useEffect(() => {
        if (animeRandom.name.includes("itachi")) {
            setImgChange("itachi")
        } else if (animeRandom.name.includes("Naruto")) {
            setImgChange("naruto")
        }else{
            setImgChange("itachi")
        }


    }, [animeRandom])

   



    return (
        <article className={`card backgd ${imgChange}`} >

            <div className="info">
                <p className='paragraph'>
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