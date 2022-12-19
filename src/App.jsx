import './App.css'
import Card from './components/Card'
import useQuotes from './hooks/useQuotes'



function App() {


 const {appStyle,  clickButtonAnime, animeRandom, colorRandom} = useQuotes()


  return (
    <div style={appStyle} className="App">
      <Card
        animeRandom={animeRandom}
        colorRandom={colorRandom}
        clickButtonAnime={clickButtonAnime}
      />
    </div>
  )
}

export default App
