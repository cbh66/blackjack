import React from 'react';
import './App.css';
import { Dealer } from './controller/Dealer';
import { insertCards } from './controller/insertCards';
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
                const house = insertCards(this.state.game.house, cards.slice(0, 2));
                const player = insertCards(this.state.game.player, cards.slice(2));
                this.setState({
                    game: { house, player },
                });
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
