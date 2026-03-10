import Player from './components/Player';
import GameBoard from "./components/GameBoard";
import {useState} from "react";

export default function App() {
    const [activePlayer, setActivePlayer] = useState("X");

    function handleSelectSquare() {
        setActivePlayer((currentActivePlayer) => {
            return currentActivePlayer === "X" ? "O" : "X";
        })
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player name="Player1" symbol="X" isActive={activePlayer === "X"} />
                    <Player name="Player2" symbol="O" isActive={activePlayer === "O"} />
                </ol>

                <GameBoard onSelectSquare={handleSelectSquare} activePlayer={activePlayer} />
            </div>
            LOG
        </main>
    )
}