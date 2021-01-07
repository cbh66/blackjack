import { BlackjackGameState } from "../model/BlackjackGameState";
import { CardTable } from "./CardTable";
import { PlayerControls } from "./PlayerControls";

/**
 * Displays everything associated with a game, including the
 * status of the game and and controls for the player.
 */
export interface GameProps {
    game: BlackjackGameState;
    isFrozen: boolean;
    hit: () => void;
    stand: () => void;
}

export function Game(props: GameProps) {
    return (
        <div>
            <CardTable game={props.game} />
            <PlayerControls
                disabled={props.isFrozen}
                hit={props.hit}
                stand={props.stand}
            />
        </div>
    );
}
