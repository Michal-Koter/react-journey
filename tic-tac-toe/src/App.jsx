import {useState} from "react";

import Player from './components/Player';
import GameBoard from "./components/GameBoard";
import GameOver from "./components/GameOver";
import Log from "./components/Log.jsx";
import {WINNING_COMBINATIONS} from "./winning-combinations.js";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

function deriveActivePlayer(gameTurns) {
    let currentPlayer = "X";
    if (gameTurns.length > 0 && gameTurns[0].player === "X") {
        currentPlayer = "O";
    }
    return currentPlayer;
}

export default function App() {
    const [gameTurns, setGameTurns] = useState([]);
    const activePlayer = deriveActivePlayer(gameTurns);

    let gameBoard = initialGameBoard;
    for (const turn of gameTurns) {
        gameBoard[turn.square.row][turn.square.col] = turn.player;
    }

    let winner;
    for (const combination of WINNING_COMBINATIONS) {
        const firstSquare = gameBoard[combination[0].row][combination[0].col];
        const secondSquare = gameBoard[combination[1].row][combination[1].col];
        const thirdSquare = gameBoard[combination[2].row][combination[2].col];

        if (firstSquare && firstSquare === secondSquare && secondSquare === thirdSquare) {
            winner = firstSquare;
        }
    }

    const hasDraw = gameTurns.length === 9 && !winner;

    function handleSelectSquare(row, col) {
        // NOTE: avoid one state depends on another, better use computed value
        setGameTurns((prevTurns) => {
            // NOTE: compute currentPlayer to avoid use potential outdated player
            const currentPlayer = deriveActivePlayer(prevTurns);
            return [{square: {row, col}, player: currentPlayer}, ...prevTurns];
        })
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player name="Player1" symbol="X" isActive={activePlayer === "X"}/>
                    <Player name="Player2" symbol="O" isActive={activePlayer === "O"}/>
                </ol>
                {(winner || hasDraw) && <GameOver winner={winner}/>}
                <GameBoard onSelectSquare={handleSelectSquare} gameBoard={gameBoard}/>
            </div>
            <Log turns={gameTurns}/>
        </main>
    )
}