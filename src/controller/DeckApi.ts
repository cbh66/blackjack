import { isArray, isBoolean, isNumber, isObject, isString } from "lodash";

const API: string = "https://deckofcardsapi.com/api/deck";

export interface ShuffleResponse {
    success: boolean;
    deck_id: string;
    shuffled: boolean;
    remaining: number;
}

export async function shuffle(): Promise<ShuffleResponse> {
    const json = await getFromApi(`${API}/new/shuffle`)
    if (isValidShuffleResponse(json)) {
        return json;
    } else {
        throw Error(`Unexpected shuffle response from api: ${JSON.stringify(json)}`);
    }
}

export interface CardResponse {
    image: string;
    value: string;
    suit: string;
    code: string;
}

export interface DrawResponse {
    success: boolean;
    cards: CardResponse[];
    deck_id: string;
    remaining: number;
}

export async function draw(deckId: string, numCards?: number): Promise<DrawResponse> {
    const params = numCards === undefined ? "" : `?count=${numCards}`;
    const json = await getFromApi(`${API}/${deckId}/draw/${params}`);
    if (isValidDrawResponse(json)) {
        return json;
    } else {
        throw Error(`Unexpected draw response from api: ${JSON.stringify(json)}`)
    }
}

async function getFromApi(url: string): Promise<any> {
    const response = await fetch(url);
    if (response.ok) {
        return await response.json();
    } else {
        throw Error(`Failed to get response from API: ${response.statusText}`);
    }
}

function isValidShuffleResponse(r: any): r is ShuffleResponse {
    if (!isObject(r)) {
        return false;
    }
    const obj = r as Partial<ShuffleResponse>;
    return isBoolean(obj.success)
        && isString(obj.deck_id)
        && isBoolean(obj.shuffled)
        && isNumber(obj.remaining);
}

function isValidDrawResponse(r: any): r is DrawResponse {
    if (!isObject(r)) {
        return false;
    }
    const obj = r as Partial<DrawResponse>;
    return isBoolean(obj.success)
        && isString(obj.deck_id)
        && isNumber(obj.remaining)
        && isArray(obj.cards)
        && obj.cards.every(isValidCardResponse);
}

function isValidCardResponse(r: any): r is CardResponse {
    if (!isObject(r)) {
        return false;
    }
    const obj = r as Partial<CardResponse>;
    return isString(obj.image)
        && isString(obj.value)
        && isString(obj.suit)
        && isString(obj.code);
}
