import "./CardArea.css";

/**
 * Displays a set of face-up cards.
 */

export interface CardAreaProps {

}

export function CardArea(props: CardAreaProps) {
    return (
        <div className="card-area">
            {[1, 2, 3].map(num => <Card num={num} />)}
        </div>
    );
}


interface CardProps {
    num: number;
}

function Card(props: CardProps) {
    return (
        <div className="card">Card {props.num}</div>
    )
}
