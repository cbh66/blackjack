
/**
 * Displays everything associated with a game, including the
 * status of the game and and controls for the player.
 */

import { CardTable } from "./CardTable";
import { PlayerControls } from "./PlayerControls";

export interface GameProps {

}

export function Game(props: GameProps) {
    return (
        <div>
            <CardTable />
            <PlayerControls />
        </div>
    );
}
