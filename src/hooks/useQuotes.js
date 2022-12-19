import React from 'react'
import { useEffect, useState } from "react"
import anime from '../json/anime.json' 



const arrayColor = [
    '#96A1DD', '#A247BB', '#FDA8A1', '#0D7D96', '#2DCEE9', '#F8556F', '#D42872', '#A6E48A'
  ]



const useQuotes = () => {



    //Formula para poder hacer uso de cosas random
    const createNumberRandom = array => {
        return Math.floor(Math.random() * array.length)
    }

    /*Filtro del Array para que solo queden los del anime Naruto */

    const filterArray = array => {
        const arrayFilter = array.filter(e => e.anime.includes("Naruto"))
        return arrayFilter
    }

    /*Arrglo que tiene del Json solamente los de naruto */
    let narutoFilter = filterArray(anime)

    console.log(narutoFilter)

    /*Creo los numeros de los colores y el numero de narutoFilter */
    let animeRandomQuote = createNumberRandom(narutoFilter)
    let colorRandomQuote = createNumberRandom(arrayColor)

    /*useState que contiene la info de Color o del quote del json */
    const [animeRandom, setAnimeRandom] = useState(narutoFilter[animeRandomQuote])
    const [colorRandom, setColorRandom] = useState(arrayColor[colorRandomQuote])


    const appStyle = {
        backgroundColor: colorRandom

    }

    /*funcionalidad del boton de naruto */

    const clickButtonAnime = () => {
        animeRandomQuote = createNumberRandom(narutoFilter)
        colorRandomQuote = createNumberRandom(arrayColor)
        setAnimeRandom(narutoFilter[animeRandomQuote])
        setColorRandom(arrayColor[colorRandomQuote])
    }





    return {appStyle,  clickButtonAnime, animeRandom, colorRandom}
}

export default useQuotes