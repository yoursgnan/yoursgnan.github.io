import myLogo from '../assets/my-logo.svg'
import '../App.css'

const NavBar = () => {
    return (
        <header className='navbar'>
            <div className='navbar-container'>
                <div className='image-container'>
                    <img src={myLogo} width={60} height={60} />
                </div>
                <div className="contact-container">
                <a href='mailto:gnanaprakash19102000@gmail.com?subject=Type%20subject&body=Hello!'><button className="contact-button">Contact</button></a>
                </div>
            </div>
        </header>
    )
}

export default NavBar