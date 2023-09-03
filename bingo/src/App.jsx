import { useState } from 'react'
import './App.css'
import ScoreBoard from './components/ScoreBoard'
import GameBoard from './components/GameBoard'

function App() {
  const [gameData,setGameData] = useState({
    clicks: Array(9).fill(' '),
    round: 1,
    player1: {
      name: 'Player 1',
      turn: true,
      tie: false,
      item: 'X',
      win: false,
      score: 0,
    },
    player2: {
      name: 'Player 2',
      turn: false,
      tie: false,
      item: 'O',
      win: false,
      score: 0,
    }
})

  return (
    <>
      <ScoreBoard data={gameData}/>
      <GameBoard data={gameData} setGameData={setGameData}/>
    </>
  )
}

export default App
