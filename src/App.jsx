
import data from './data'
import AboutMe from './fragments/AboutMe'
import ProjectsFragment from './fragments/Projects'

import './App.css'
import { useState } from 'react'

function App() {
    return (
      <>
        <AboutMe data={data.about_me}/>
        <ProjectsFragment data={data.projects}/>
      </>
    )
}

export default App
