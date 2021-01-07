import React from 'react';
import './App.css';
import { Dealer } from './controller/Dealer';
import { insertCards } from './controller/insertCards';
import { getPlayerStatus, PlayerStatus } from './controller/playerStatus';
import { BlackjackGameState, EMPTY_STATE } from './model/BlackjackGameState';
import { Game } from './view/Game';
import { Overlay } from './view/Overlay';

type AppProps = {};
interface AppState {
    won: boolean;
    lost: boolean;
    game: BlackjackGameState;
}

class App extends React.PureComponent<AppProps, AppState> {
    private dealer: Dealer = new Dealer();

    constructor(props: AppProps) {
        super(props);
        this.state = {
            won: false,
            lost: false,
            game: EMPTY_STATE,
        }
    }

    public componentDidMount() {
        this.startNewGame();
    }

    public render() {
        return (
            <div className="App">
                {this.state.won &&
                    <Overlay><GameOverMessage onReset={this.resetGame}>
                        You've won!
                    </GameOverMessage></Overlay>}
                {this.state.lost &&
                    <Overlay><GameOverMessage onReset={this.resetGame}>
                        You've lost.    
                    </GameOverMessage></Overlay>}
                <div className="app-content">
                    <Game
                        game={this.state.game}
                        hit={this.hit}
                        stand={this.stand}
                        isFrozen={this.state.won || this.state.lost}
                    />
                </div>
            </div>
        );
    }

    private hit = () => {
        this.dealer.draw().then(cards => {
            const house = this.state.game.house;
            const player = insertCards(this.state.game.player, cards);
            this.updateGame({ house, player });
        });
    }

    private stand = () => {
        const status = getPlayerStatus(this.state.game);
        if (status === PlayerStatus.WON) {
            this.setState({ won: true });
        } else {
            this.setState({ lost: true });
        }
    }

    private updateGame(newGame: BlackjackGameState) {
        const status = getPlayerStatus(newGame);
        this.setState({
            lost: status === PlayerStatus.LOST,
            game: newGame,
        });
    }

    private resetGame = async () => {
        this.setState({
            won: false,
            lost: false,
            game: EMPTY_STATE,
        });
        await this.startNewGame();
    }

    private startNewGame = async () => {
        await this.dealer.shuffle();
        const cards = await this.dealer.draw(4);
        const house = insertCards(this.state.game.house, cards.slice(0, 2));
        const player = insertCards(this.state.game.player, cards.slice(2));
        this.updateGame({ house, player });
    }
}

interface GameOverProps {
    children?: React.ReactChild;
    onReset: () => void;
}

function GameOverMessage(props: GameOverProps) {
    return (
        <div className="game-over">
            <div className="game-over-message">
                {props.children}
            </div>
            <div className="game-over-controls">
                <button onClick={props.onReset}>Start Over</button>
            </div>
        </div>
    );
}

export default App;
