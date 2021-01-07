
export interface CardState {
    /** Value is an identifier for the type of card, not necessarily equivalent
     *   to the number of points provided by that card.  eg. Aces have a value
     *   of 1, but can sometimes give a point value of 11.
     */
    readonly value: number;
    readonly imageUrl: string;
}

export interface PlayerState {
    readonly points: number;
    readonly cards: ReadonlyArray<CardState>;
}

export interface BlackjackGameState {
    readonly house: PlayerState;
    readonly player: PlayerState;
}
