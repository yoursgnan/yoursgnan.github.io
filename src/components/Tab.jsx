

const Tab = (props) => {
    
    return (
        <div className={props.className} onClick={props.onTabClick}>
            <span className="material-symbols-outlined">
                {props.icon}
            </span>
            <p>{props.name}</p>
        </div>
    )
}

export default Tab