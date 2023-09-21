import { useState } from "react"
import sun from '../assets/sun.png'
import moon from '../assets/moon-stars.png'
const NavBar = () => {
    const [darkMode ,setDarkMode] = useState(false)
    const changeTheme = () => {
        console.log('function calling..')
        setDarkMode(!darkMode)
    }
    return (
        <div className="nav-bar-container">
            <div>
                <p class="mydisplayid">@yoursgnan</p>
            </div>
            <div onClick={changeTheme} className="theme-container">
                {
                <img src={!darkMode ?moon:sun} width={15} height={15}/>
                }
            </div>
        </div>
    )
}

export default NavBar