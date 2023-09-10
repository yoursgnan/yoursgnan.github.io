
import myphoto from '../assets/myphoto.jpeg'
import ShareBubble from '../components/ShareBubble'
import linkedin from '../assets/linkedin.png'
import insta from '../assets/instagram.png'

const AboutMe = ({data}) => {
    return (
        <div className="box-container about-box-container">
            <div className="about-content-holder">
                <div className='profile-container'>
                    <img src={myphoto}/>
                    <div className="text-container">
                        <h3>Hi, My name is</h3>
                        <h2>{data.name}</h2>
                    </div>
                </div>
                <div className="share-container">
                    <ShareBubble src={linkedin} link="https://www.linkedin.com/in/iamgnanaprakash"/>
                    <ShareBubble src={insta} link="https://www.instagram.com/yoursgnan"/>
                </div>
                <p>{data.about}</p>
            </div>
        </div>
    )
}

export default AboutMe