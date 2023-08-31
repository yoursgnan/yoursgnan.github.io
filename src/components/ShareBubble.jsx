const ShareBubble = (props) => {
    return (
        <a href={props.link}>
            <img src={props.src} width={30} height={30}/>
        </a>
    )
}

export default ShareBubble