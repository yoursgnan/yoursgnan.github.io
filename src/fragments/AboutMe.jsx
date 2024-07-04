
import myphoto from '../assets/myphoto.jpeg'
import ShareBubble from '../components/ShareBubble'
import Button from '../components/Button'
import linkedin from '../assets/linkedin.png'
import insta from '../assets/instagram.png'
import briefcase from '../assets/briefcase.png'
import connect from '../assets/link-alt.png'


const AboutMe = ({data}) => {
    return (
        <div className="box-container about-box-container">
            <div className="about-content-holder">
                <div className='profile-container'>
                    <div class="flex-container flex2">
                        <div className="text-container">
                            Hey there,
                            <h1>I'am {data.name}</h1>
                            <p>Software Developer</p>
                        </div>
                        <div class="about-text-container">
                            <p class="about-text">{data.about}</p>
                        </div>
                        <div className="share-container">
                            <Button text="Connect" link="mailto:gnanaprakash19102000@gmail.com" src={connect}/>
                            <ShareBubble src={linkedin} link="https://www.linkedin.com/in/iamgnanaprakash" className="share-bubble"/>
                            <ShareBubble src={insta} link="https://www.instagram.com/yoursgnan" className="share-bubble"/>
                        </div>
                    </div>
                </div>
                
                <div class="buttons-container">
                    {/* <Button text="View Works" link="#projects" src={briefcase}/> */}
                    
                </div>
            </div>
        </div>
    )
}

export default AboutMe