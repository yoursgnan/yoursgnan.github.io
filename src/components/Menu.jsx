import Tab from './Tab' 
import {useState} from 'react'

const Menu = (props) => {
    const onTabClick = (position) => {
        console.log(position)
        props.setPosition(position)
    }
    return (
        <div className="menu-container">
            <div className='menu-holder'>
                <Tab name='Home' icon='home' className={props.position===1 ? 'menu active' : 'menu'} onTabClick={() => onTabClick(1)}/>
                <Tab name='Projects' icon='work' className={props.position===2 ? 'menu active' : 'menu'} onTabClick={() => onTabClick(2)}/>
                <Tab name='About' icon='info' className={props.position===3 ? 'menu active' : 'menu'} onTabClick={() => onTabClick(3)}/>
            </div>
        </div>
    )
}

export default Menu