import React from "react";

export interface OverlayProps {
    children?: React.ReactChild;
}

export function Overlay(props: OverlayProps) {
    return (
        <div className="overlay">
            {props.children}
        </div>
    );
}
