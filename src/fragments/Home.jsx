import ShareBubble from '../components/ShareBubble'
import linkedin from '../assets/linkedin.png'
import insta from '../assets/instagram.png'

const Home = (props) => {
    return (
        <div className={props.className}>
            <span className="greet1">Hi, </span><span className="greet2">My name is</span>
            <div>
                <span className="my-name">{props.data.name}</span>
            </div>
            <p className="about-me-bio">{props.data.about}</p>
            <div className="share-container">
                <ShareBubble src={linkedin} link="https://www.linkedin.com/in/iamgnanaprakash"/>
                <ShareBubble src={insta} link="https://www.instagram.com/yoursgnan"/>
            </div>
        </div>
    )
}

export default Home