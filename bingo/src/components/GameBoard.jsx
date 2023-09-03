
const GameBoard = ({data,setGameData}) => {

    const checkWin = (clicks) => {
        const winning_format = [
            [0,1,2],[3,4,5],[6,7,8],
            [0,3,6],[1,4,7],[2,5,8],
            [0,4,8],[2,4,6],
        ]
        var formats = Array()
        for(let win_format of winning_format){
            var format = ''
            for(let index of win_format){
                format += clicks[index]
            }
            formats.push(format)
        }
        console.log(formats)
        const nonEmptyClicks = clicks.filter((click) => click!==' ')
        var win = false
        if(formats.includes('XXX') || formats.includes('OOO')){
            win = true
        }
        if(nonEmptyClicks.length===9 && !win){
            win = 'tie'
        }
        console.log(nonEmptyClicks,win)
        return win
        
    }
    const updateBoard = (gridIndex) => {
        if(data.player1.turn===true){
            const newClicks = [...data.clicks]

            if(newClicks[gridIndex]===' ' && (!data.player1.win || data.player2.win)){
                newClicks[gridIndex] = data.player1.item
                const win = checkWin(newClicks)
                if(win==='tie'){
                    console.log('tieeee')
                    const newGameData = {...data}
                    newGameData.clicks = newClicks
                    newGameData.player1.tie = true
                    newGameData.player2.tie=false
                    if (newGameData.round!=3){
                        newGameData.round += 1
                    }
                    else{
                        newGameData.round = 1
                    }
                    setGameData(newGameData)
                }
                else if(!win){
                    const newGameData = {...data}
                    newGameData.clicks = newClicks
                    newGameData.player1.turn = false
                    newGameData.player2.turn = true
                    console.log(newClicks)
                    setGameData(newGameData)   
                }
                else{
                    const newGameData = {...data}
                    newGameData.clicks = newClicks
                    newGameData.player1.win = true
                    newGameData.player1.score += 1
                    if (newGameData.round!=3){
                        newGameData.round += 1
                    }
                    else{
                        newGameData.round = 1
                    }
                    console.log('Player 1 win')
                    console.log('moving to next round')
                    setGameData(newGameData)
                }
            }
            
        }
        else{
            const newClicks = [...data.clicks]
            if(newClicks[gridIndex]===' ' && (!data.player2.win || !data.player1.win)){
                newClicks[gridIndex] = data.player2.item
                const win = checkWin(newClicks)
                if(win==='tie'){
                    console.log('tieeeeeeeeeee')
                    const newGameData = {...data}
                    newGameData.clicks = newClicks
                    newGameData.player1.tie = true
                    newGameData.player2.tie = true
                    if (newGameData.round!=3){
                        newGameData.round += 1
                    }
                    else{
                        newGameData.round = 1
                    }
                    setGameData(newGameData)
                }
                else if(!win){
                    const newGameData = {...data}
                    newGameData.clicks = newClicks
                    newGameData.player2.turn=false
                    newGameData.player1.turn=true
                    console.log(newClicks)
                    setGameData(newGameData)
                }
                else{
                    const newGameData = {...data}
                    newGameData.clicks = newClicks
                    newGameData.player2.win = true
                    newGameData.player2.score += 1
                    if (newGameData.round!=3){
                        newGameData.round += 1
                    }
                    else{
                        newGameData.round = 1
                    }
                    console.log('Player 2 win')
                    console.log('moving to next round')
                    setGameData(newGameData)
                }
            }
        }
    }

    const resetGame = () => {
        console.log('calling reset')
        const resetState = {
                clicks: Array(9).fill(' '),
                round: 1,
                player1: {
                    name: 'Player 1',
                    tie:false,
                    turn: true,
                    item: 'X',
                    win: false,
                    score: 0,
                },
                player2: {
                    name: 'Player 2',
                    tie:false,
                    turn: false,
                    item: 'O',
                    win: false,
                    score: 0,
                }
        }
        console.log('setting state',resetState)
        setGameData(resetState)
        console.log('reset')
        
    }

    const nextRound = () => {
        const newData = {...data}
        newData.player1.win = false
        newData.player2.win = false
        newData.player1.tie = false
        newData.player2.tie = false
        newData.clicks = Array(9).fill(' ')
        setGameData(newData)
    }

    return (
        <div className="game-board">
            <p>Now: {data.player1.turn===true?'Player 1':'Player 2'}</p>
            {
                (data.round===1 && data.player1.score > data.player2.score) && <h4>Player 1 wins</h4>
            }
            {   
                (data.round===1 && data.player1.score < data.player2.score) && <h4>Player 2 wins</h4>
            }
            {
                (data.player1.tie===true || data.player2.tie===true || (data.player1.score===data.player2.score && data.player1.score!=0 && data.player2.score!=0)) && <h4>Game ties</h4>
            }
            <div className="game-board-container">
                <div className="grid grid1" onClick={()=>updateBoard(0)}>{data.clicks[0]}</div>
                <div className="grid grid2" onClick={()=>updateBoard(1)}>{data.clicks[1]}</div>
                <div className="grid grid3" onClick={()=>updateBoard(2)}>{data.clicks[2]}</div>

                <div className="grid grid4" onClick={()=>updateBoard(3)}>{data.clicks[3]}</div>
                <div className="grid grid5" onClick={()=>updateBoard(4)}>{data.clicks[4]}</div>
                <div className="grid grid6" onClick={()=>updateBoard(5)}>{data.clicks[5]}</div>

                <div className="grid grid7" onClick={()=>updateBoard(6)}>{data.clicks[6]}</div>
                <div className="grid grid8" onClick={()=>updateBoard(7)}>{data.clicks[7]}</div>
                <div className="grid grid9" onClick={()=>updateBoard(8)}>{data.clicks[8]}</div>
            </div>
            <div className="controls-container">
                <button onClick={resetGame} className="replay-button"><h4>Restart Game</h4></button>
                {
                    ((data.round!=1) && (data.player1.win===true || data.player2.win==true || data.player1.tie===true || data.player2.tie===true)) && <button onClick={nextRound} className="next-round"><h4>Play Round {data.round}</h4></button>
                }
            </div>
            
        </div>
    )
}

export default GameBoard