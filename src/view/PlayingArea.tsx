import "./PlayingArea.css";
import { CardArea } from "./CardArea";
import { CardState } from "../model/BlackjackGameState";

/**
 * Displays the playing area for a single player, which includes
 * the entire public information about the state of the player's
 * game.  Specifically, it shows their cards and points.
 */

export interface PlayingAreaProps {
    name: string;
    points: number;
    cards: ReadonlyArray<CardState>;
}

export function PlayingArea(props: PlayingAreaProps) {
    return (
        <div className="playing-area">
            <div className="name">{props.name}</div>
            <div className="points">Points: {props.points}</div>
            <CardArea cards={props.cards} />
        </div>
    );
}
