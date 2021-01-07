import "./CardTable.css";
import React from "react";
import { PlayingArea } from "./PlayingArea";
import { BlackjackGameState } from "../model/BlackjackGameState";

/**
 * Displays the entire state of a game.
 * Specifically incudes showing all players' cards and point totals.
 */

 export interface CardTableProps {
    game: BlackjackGameState;
 }

 export function CardTable(props: CardTableProps) {
     const { house, player } = props.game;
     return (
        <div className="card-table">
            <PlayingArea name="House" points={house.points} cards={house.cards} />
            <PlayingArea name="You" points={player.points} cards={player.cards} />
        </div>
     );
 }