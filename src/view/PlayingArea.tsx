import "./PlayingArea.css";
import { CardArea } from "./CardArea";

/**
 * Displays the playing area for a single player, which includes
 * the entire public information about the state of the player's
 * game.  Specifically, it shows their cards and points.
 */

export interface PlayingAreaProps {

}

export function PlayingArea(props: PlayingAreaProps) {
    return (
        <div className="playing-area">
            <div className="points">Points: 0</div>
            <CardArea />
        </div>
    );
}
