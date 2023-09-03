import PlayerInfo from './PlayerInfo'

const ScoreBoard = ({data}) => {
    return (
        <div>
            <h1 className='app-name'>Bingo !</h1>
            <div className='score-board-container'>
                <h3>Round {data.round}</h3>
                <div className='player-info-container'> 
                    <PlayerInfo player={data.player1} className='player1'/>
                    <PlayerInfo player={data.player2} className='player2'/> 
                </div>
            </div>
        </div>
    )
}

export default ScoreBoard