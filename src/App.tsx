import React from 'react';
import './App.css';
import { Dealer } from './controller/Dealer';
import { BlackjackGameState, EMPTY_STATE } from './model/BlackjackGameState';
import { Game } from './view/Game';

type AppProps = {};
interface AppState {
    game: BlackjackGameState;
}

class App extends React.PureComponent<AppProps, AppState> {
    private dealer: Dealer = new Dealer();

    constructor(props: AppProps) {
        super(props);
        this.state = {
            game: EMPTY_STATE,
        }
    }

    public componentDidMount() {
        this.dealer.shuffle().then(() => {
            this.dealer.draw(4).then(cards => {
                console.log(cards);
            });
        });
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
