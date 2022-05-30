import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import anime from './json/anime.json' 



const arrayColor = [
  '#96A1DD', '#A247BB', '#FDA8A1', '#0D7D96', '#2DCEE9', '#F8556F', '#D42872', '#A6E48A'
]


function App() {

//Formula para poder hacer uso de cosas random
   const createNumberRandom = array => {
    return Math.floor(Math.random() * array.length)
}

let animeRandomQuote = createNumberRandom(anime)
let colorRandomQuote = createNumberRandom(arrayColor)


const [animeRandom, setAnimeRandom] = useState(anime[animeRandomQuote])
const [colorRandom, setColorRandom] = useState(arrayColor[colorRandomQuote])

const appStyle = {
  backgroundColor: colorRandom
}

 
const clickButtonAnime = () =>{
  animeRandomQuote = createNumberRandom(anime)
  colorRandomQuote = createNumberRandom(arrayColor)
  setAnimeRandom(anime[animeRandomQuote])
  setColorRandom(arrayColor[colorRandomQuote])
}

  return (
    <div style={appStyle} className="App">
      <Card
      animeRandom ={animeRandom}
      colorRandom = {colorRandom}
      clickButtonAnime ={clickButtonAnime}
      /> 
    </div>
  )
}

export default App
