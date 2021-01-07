import { BlackjackGameState } from "../model/BlackjackGameState";

/**
 * WON means the player will win if she ends right now.
 * LOST means the player has automatically lost.
 * LOSING means the player will lose if she ends the game, but the
 *    game hasn't yet ended automatically yet (she can still draw cards)
 */
export enum PlayerStatus { WON, LOST, LOSING };

export function getPlayerStatus(game: BlackjackGameState): PlayerStatus {
    const { house, player } = game;
    if (player.points > 21) {
        return PlayerStatus.LOST;
    } else if (house.points > 21) {
        return PlayerStatus.WON;
    } else if (house.points < 21 && player.points > house.points) {
        return PlayerStatus.WON;
    } else {
        return PlayerStatus.LOSING;
    }
}
