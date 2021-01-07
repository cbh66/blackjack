import { insertCards } from "./insertCards";
import { cardsFrom, INITIAL_PLAYER } from "./testUtils";


describe("insertCards calculates point values", () => {
    it("calulates number cards", () => {
        const cards = cardsFrom(["4", "5"]);
        const result = insertCards(INITIAL_PLAYER,  cards);
        expect(result.points).toBe(9);
    });

    it("calculates face cards", () => {
        const cards = cardsFrom(["9", "QUEEN"]);
        const result = insertCards(INITIAL_PLAYER, cards);
        expect(result.points).toBe(19);
    });

    it("treats ace as high when score is low", () => {
        const cards = cardsFrom(["9", "ACE"]);
        const result = insertCards(INITIAL_PLAYER, cards);
        expect(result.points).toBe(20);
    });

    it("treats ace as low when score is high", () => {
        const cards = cardsFrom(["9", "ACE", "JACK"]);
        const result = insertCards(INITIAL_PLAYER, cards);
        expect(result.points).toBe(20);
    });
});
