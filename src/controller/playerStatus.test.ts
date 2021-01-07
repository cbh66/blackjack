import { BlackjackGameState } from "../model/BlackjackGameState";
import { insertCards } from "./insertCards";
import { getPlayerStatus, PlayerStatus } from "./playerStatus";
import { cardsFrom, gameFrom, INITIAL_PLAYER } from "./testUtils";


describe("playerStatus", () => {
    it("is win when player > house", () => {
        const game = gameFrom({
            house: ["4", "5"],
            player: ["7", "8"],
        })
        const result = getPlayerStatus(game);
        expect(result).toBe(PlayerStatus.WON);
    });

    it("is win when player = 21 != house", () => {
        const game = gameFrom({
            house: ["4", "5"],
            player: ["KING", "ACE"],
        })
        const result = getPlayerStatus(game);
        expect(result).toBe(PlayerStatus.WON);
    });

    it("is losing when house = 21", () => {
        const game = gameFrom({
            house: ["KING", "ACE"],
            player: ["KING", "QUEEN"],
        })
        const result = getPlayerStatus(game);
        expect(result).toBe(PlayerStatus.LOSING);
    });

    it("is losing when house = 21 even if player = 21", () => {
        const game = gameFrom({
            house: ["KING", "ACE"],
            player: ["QUEEN", "ACE"],
        })
        const result = getPlayerStatus(game);
        expect(result).toBe(PlayerStatus.LOSING);
    });

    it("is loss when player > 21", () => {
        const game = gameFrom({
            house: ["7", "KING"],
            player: ["JACK", "QUEEN", "3"],
        })
        const result = getPlayerStatus(game);
        expect(result).toBe(PlayerStatus.LOST);
    });

    it("is losing when player < house < 21", () => {
        const game = gameFrom({
            house: ["7", "KING"],
            player: ["7", "3"],
        })
        const result = getPlayerStatus(game);
        expect(result).toBe(PlayerStatus.LOSING);
    });
});
