import React from 'react';
import './App.css';
import { Game } from './view/Game';

function App() {
    const gameOver = false;
    if (gameOver) {
        return <div>Game Over</div>; // TODO: victory or defeat screen
    }
    return (
        <div className="App">
            <div className="app-content">
                <Game />
            </div>
        </div>
    );
}

export default App;
