import "./CardTable.css";
import React from "react";
import { PlayingArea } from "./PlayingArea";

/**
 * Displays the entire state of a game.
 * Specifically incudes showing all players' cards and point totals.
 */

 export interface CardTableProps {

 }

 export function CardTable(props: CardTableProps) {
     return (
        <div className="card-table">
            <PlayingArea />
            <PlayingArea />
        </div>
     );
 }