
export interface CardState {
    readonly value: string;
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

export const EMPTY_STATE: BlackjackGameState = {
    house: {
        points: 0,
        cards: [],
    },
    player: {
        points: 0,
        cards: [],
    },
};
