import { CardState } from "../model/BlackjackGameState";
import "./CardArea.css";

/**
 * Displays a set of face-up cards.
 */

export interface CardAreaProps {
    cards: ReadonlyArray<CardState>;
}

export function CardArea(props: CardAreaProps) {
    return (
        <div className="card-area">
            {props.cards.map(card => <Card imgUrl={card.imageUrl} />)}
        </div>
    );
}


interface CardProps {
    imgUrl: string;
}

function Card(props: CardProps) {
    return (
        <img className="card" src={props.imgUrl} />
    )
}
