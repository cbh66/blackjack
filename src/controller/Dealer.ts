import { CardState } from "../model/BlackjackGameState";
import { draw, shuffle } from "./DeckApi";

export class Dealer {
    private deckId: string | undefined = undefined;
    private numRemainingCards: number = 0;

    public async shuffle(): Promise<void> {
        const response = await shuffle();
        if (response.success) {
            this.deckId = response.deck_id;
            this.numRemainingCards = response.remaining;
        } else {
            console.error(response);
            throw new Error(`Unsuccessful shuffle attempt`);
        }
    }

    public async draw(numCards?: number): Promise<CardState[]> {
        if (this.deckId === undefined) {
            throw new Error("Deck uninitialized before drawing -- shuffle() needs to be called first");
        }
        if (
            (numCards !== undefined && numCards > this.numRemainingCards)
                || this.numRemainingCards === 0
        ) {
            throw new Error("Deck is out of cards");
        }
        const response = await draw(this.deckId, numCards);
        if (response.success) {
            this.numRemainingCards = response.remaining;
            return response.cards.map(card => ({
                value: card.value,
                imageUrl: card.image,
            }));
        } else {
            console.error(response);
            throw new Error("Failed to draw cards")
        }
    }

    public getNumRemainingCards(): number {
        return this.numRemainingCards;
    }
}
