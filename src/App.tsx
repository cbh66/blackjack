import React from 'react';
import './App.css';
import { BlackjackGameState } from './model/BlackjackGameState';
import { Game } from './view/Game';

type AppProps = {};
interface AppState {
    game: BlackjackGameState;
}

class App extends React.PureComponent<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            game: {
                house: {
                    points: 0,
                    cards: [],
                },
                player: {
                    points: 0,
                    cards: [],
                },
            },
        }
    }

    public render() {
        const gameOver = false;
        if (gameOver) {
            return <div>Game Over</div>; // TODO: victory or defeat screen
        }
        return (
            <div className="App">
                <div className="app-content">
                    <Game game={this.state.game} />
                </div>
            </div>
        );
    }
}

export default App;
