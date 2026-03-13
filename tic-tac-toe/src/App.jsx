import {useState} from "react";

import Player from './components/Player';
import GameBoard from "./components/GameBoard";
import GameOver from "./components/GameOver";
import Log from "./components/Log.jsx";
import {WINNING_COMBINATIONS} from "./winning-combinations.js";

const INITIAL_GAME_BOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

const PLAYERS = {
    X: "Player 1",
    O: "Player 2"
}

function deriveActivePlayer(gameTurns) {
    let currentPlayer = "X";
    if (gameTurns.length > 0 && gameTurns[0].player === "X") {
        currentPlayer = "O";
    }
    return currentPlayer;
}

function deriveGameBoard(gameTurns) {
    let gameBoard = [...INITIAL_GAME_BOARD.map(arr => [...arr])];
    for (const turn of gameTurns) {
        gameBoard[turn.square.row][turn.square.col] = turn.player;
    }
    return gameBoard;
}

function deriveWinner(gameBoard, players) {
    let winner;
    for (const combination of WINNING_COMBINATIONS) {
        const firstSquare = gameBoard[combination[0].row][combination[0].col];
        const secondSquare = gameBoard[combination[1].row][combination[1].col];
        const thirdSquare = gameBoard[combination[2].row][combination[2].col];

        if (firstSquare && firstSquare === secondSquare && secondSquare === thirdSquare) {
            winner = players[firstSquare];
        }
    }
    return winner;
}

export default function App() {
    const [players, setPlayers] = useState(PLAYERS)
        , [gameTurns, setGameTurns] = useState([])
        , activePlayer = deriveActivePlayer(gameTurns)
        , gameBoard = deriveGameBoard(gameTurns)
        , winner = deriveWinner(gameBoard, players)
        , hasDraw = gameTurns.length === 9 && !winner;

    function handleSelectSquare(row, col) {
        // NOTE: avoid one state depends on another, better use computed value
        setGameTurns((prevTurns) => {
            // NOTE: compute currentPlayer to avoid use potential outdated player
            const currentPlayer = deriveActivePlayer(prevTurns);
            return [{square: {row, col}, player: currentPlayer}, ...prevTurns];
        })
    }

    function handleRestart() {
        setGameTurns([]);
    }

    function handlePlayerNameChange(symbol, newName) {
        setPlayers((prevPlayer) => {
            return {
                ...prevPlayer,
                [symbol]: newName
            }
        })
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player
                        name={PLAYERS.X}
                        symbol="X"
                        isActive={activePlayer === "X"}
                        onSave={handlePlayerNameChange}
                    />
                    <Player
                        name={PLAYERS.Y}
                        symbol="O"
                        isActive={activePlayer === "O"}
                        onSave={handlePlayerNameChange}
                    />
                </ol>
                {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
                <GameBoard onSelectSquare={handleSelectSquare} gameBoard={gameBoard}/>
            </div>
            <Log turns={gameTurns}/>
        </main>
    )
}