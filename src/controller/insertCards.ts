import { CardState, PlayerState } from "../model/BlackjackGameState";


export function insertCards(
    playerState: PlayerState,
    newCards: ReadonlyArray<CardState>
): PlayerState {
    const allCards = playerState.cards.concat(newCards);
    return {
        points: calculateScore(allCards),
        cards: allCards,
    };
}

function isAce(card: CardState): boolean {
    return card.value === "ACE";
}

function calculateScore(cards: ReadonlyArray<CardState>) {
    const aces = cards.filter(isAce);
    const otherCards = cards.filter(card => !isAce(card));
    let score = otherCards
        .map(card => cardValue(card.value))
        .reduce((a, b) => a + b, 0);
    
    // Aces can be worth 11 or 1.  More is better unless you go over 21.
    // So we start by assigning them all 11.  If that brings us over 21,
    // we drop their value down one at a time.
    score += 11 * aces.length;
    let numLowAces = 0;
    while (numLowAces < aces.length && score > 21) {
        score -= 10;
        ++numLowAces;
    }
    return score;
}

// Only valid for cards with constant values.  Do not use for aces, whose
// values can change.
function cardValue(value: string) {
    if (["JACK", "QUEEN", "KING"].includes(value)) {
        return 10;
    } else {
        return parseInt(value);
    }
}
