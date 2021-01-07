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
            {props.cards.map((card, index) => (
                <Card
                    key={index}
                    value={card.value}
                    imgUrl={card.imageUrl}
                />
            ))}
        </div>
    );
}


interface CardProps {
    value: string;
    imgUrl: string;
}

function Card(props: CardProps) {
    return (
        <img
            className="card"
            alt={`card ${props.value}`}
            src={props.imgUrl}
        />
    )
}
