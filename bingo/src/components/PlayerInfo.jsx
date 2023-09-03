const PlayerInfo = ({player,className}) => {
    return (
        <div className={className}>
            <h4>{player.name}({player.item})</h4>
            <h3>{player.score}/3</h3>
        </div>
    )
}

export default PlayerInfo