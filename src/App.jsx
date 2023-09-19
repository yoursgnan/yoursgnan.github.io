
import data from './data'
import AboutMe from './fragments/AboutMe'
import BoxItems from './components/BoxItems'

import './App.css'
import { useState } from 'react'

function App() {
    return (
      <>
        {/* <BoxItems/> */}
        <AboutMe data={data.about_me}/>
      </>
    )
}

export default App
