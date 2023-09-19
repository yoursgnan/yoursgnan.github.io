const ShareBubble = (props) => {
    return (
        <a href={props.link} className={props.className} >
            <img src={props.src} width={20} height={20}/>
        </a>
    )
}

export default ShareBubble