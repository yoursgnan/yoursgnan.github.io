
import data from './data'
import AboutMe from './fragments/AboutMe'
import ProjectsFragment from './fragments/Projects'
import NavBar from './fragments/NavBar'
import EmptyDiv from './components/EmptyDiv'

import './App.css'
import { useState } from 'react'

function App() {
    return (
      <div className='main-content'>
        {/* <NavBar /> */}
        {/* <EmptyDiv /> */}
        <AboutMe data={data.about_me}/>
        <ProjectsFragment data={data.projects}/>
      </div>
    )
}

export default App
