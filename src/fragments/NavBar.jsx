import { useState } from "react"
import sun from '../assets/sun.png'
import moon from '../assets/moon-stars.png'
const NavBar = () => {
    const [darkMode ,setDarkMode] = useState(false)
    const changeTheme = () => {
        setDarkMode(true)
    }
    return (
        <div className="nav-bar-container">
            <div>
                <p class="mydisplayid">@yoursgnan</p>
            </div>
            <div onClick={()=>changeTheme}>
                {
                !darkMode && <img src={moon} width={15} height={15}/>
                }
                {
                    darkMode && <img src={sun} width={15} height={15}/>
                }
            </div>
        </div>
    )
}

export default NavBar