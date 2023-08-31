import NavBar from './components/NavBar'
import Content from './components/Content'
import Menu from './components/Menu'
import data from './data'
import './App.css'
import { useState } from 'react'

function App() {
    const [position,setPosition] = useState(1)

    return (
      <>
        <NavBar />
        <Content data={data} setPosition={setPosition} position={position}/>
        <Menu setPosition={setPosition} position={position}/>
      </>
    )
}

export default App
