import "./Overlay.css";
import React from "react";

export interface OverlayProps {
    children?: React.ReactChild;
}

export function Overlay(props: OverlayProps) {
    return (
        <div className="overlay-viewport">
            <div className="overlay-box">
                {props.children}
            </div>
        </div>
    );
}
