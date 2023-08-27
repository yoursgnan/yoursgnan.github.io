import linkedin from '../assets/linkedin.png'
import insta from '../assets/instagram.png'

const Content = () => {
    return (
        <div className="main-content">
            <div className="main-content-container">
                <span className="greet1">Hi, </span><span className="greet2">My name is</span>
                <div>
                    <span className="my-name">Gnana Prakash</span>
                </div>
                <p className="about-me-bio">
                I'm a Software developer, Me as technology enthusiast, always looking for the opportunities
                which constantly drives me and encourages me to learn something new in the everyday trends.
                </p>
                <div className="share-container">
                    <a href="https://www.linkedin.com/in/iamgnanaprakash">
                        <img src={linkedin} width={30} height={30}/>
                    </a>
                    <a href="https://www.instagram.com/yoursgnan">
                        <img src={insta} width={30} height={30}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Content