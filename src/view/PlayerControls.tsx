

export interface PlayerControlsProps {
    disabled: boolean;
    hit: () => void;
    stand: () => void;
}

export function PlayerControls(props: PlayerControlsProps) {
    return (
        <div className="player-controls">
            <button disabled={props.disabled} onClick={props.hit}>
                Hit me
            </button>
            <button disabled={props.disabled} onClick={props.stand}>
                Stand
            </button>
        </div>
    );
}
