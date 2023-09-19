const Button = (props) => {
    return (
        <button className="primary-button">
            <img src={props.src} width={14} height={14}/>
            <a href={props.link}>{props.text}</a>
        </button>
    )
}

export default Button