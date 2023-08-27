const Menu = () => {
    return (
        <div className="menu-container">
            <div className='menu-holder'>
                <div className='menu active'>
                    <span className="material-symbols-outlined">
                        home
                    </span>
                    <p>Home</p>
                </div>
                <div className='menu'>
                    <span className="material-symbols-outlined">
                        work
                    </span>
                    <p>Projects</p>
                </div>
                <div className='menu'>
                    <span className="material-symbols-outlined">
                        info
                    </span>
                    <p>About</p>
                </div>
            </div>
        </div>
    )
}

export default Menu