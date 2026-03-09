import Player from './components/Player';

export default function App() {
    return (
        <main>
            <div id="game-container">
                <ol id="players">
                    <Player name="Player1" symbol="X"/>
                    <Player name="Player2" symbol="O"/>
                </ol>

                Game Board
            </div>
            LOG
        </main>
    )
}