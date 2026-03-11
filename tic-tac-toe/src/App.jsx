import {useState} from "react";

import Player from './components/Player';
import GameBoard from "./components/GameBoard";
import Log from "./components/Log.jsx";

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

                <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}/>
            </div>
            <Log turns={gameTurns}/>
        </main>
    )
}