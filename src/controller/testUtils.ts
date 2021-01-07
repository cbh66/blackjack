import { BlackjackGameState, CardState, PlayerState } from "../model/BlackjackGameState";
import { insertCards } from "./insertCards";

export const INITIAL_PLAYER: PlayerState = {
    points: 0,
    cards: [],
};

export function cardsFrom(values: string[]): CardState[] {
    return values.map(value => ({ value, imageUrl: "" }));
}

export function gameFrom(cards: { house: string[], player: string[] }): BlackjackGameState {
    return {
        house: insertCards(INITIAL_PLAYER,  cardsFrom(cards.house)),
        player: insertCards(INITIAL_PLAYER, cardsFrom(cards.player)),
    };
}