// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button } from "react-bootstrap";

interface pos {
    position: number;
    setPosition: (newPosition: number) => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ShoveBoxButton(num: pos) {
    return (
        <Button
            onClick={() => {
                num.setPosition(4 + num.position);
            }}
        >
            Shove the Box
        </Button>
    );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function MoveableBox(num: pos): React.JSX.Element {
    return (
        <div
            data-testid="moveable-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: "lightblue",
                border: "1px solid blue",
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: num.position + "px",
            }}
        ></div>
    );
}

export function ShoveBox(): React.JSX.Element {
    // const box = MoveableBox();

    return (
        <div>
            <h3>Shove Box</h3>
            {/* <span>The box is at: {box.position}</span> */}
            <div>
                {/* <ShoveBoxButton
                    position={box.position}
                    setPosition={box.setPosition}
                ></ShoveBoxButton>
                {box}-- */}
            </div>
        </div>
    );
}
