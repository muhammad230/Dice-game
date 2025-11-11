import { useState } from "react"
import Home from "./components/Home"
import GamePlay from "./components/GamePlay";
import './App.css'


function App() {

  const [isGameStarted, setisGameStarted] = useState(true);

  const toggleGamePlay = () => {
    setisGameStarted( (prev) => !prev); 
  }
  return (
    <>
    {isGameStarted ? <GamePlay /> : <Home toggle ={toggleGamePlay}/>}
    
    </>
  )
}

export default App
