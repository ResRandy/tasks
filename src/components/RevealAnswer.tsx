import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [visible, setVisibility] = useState<boolean>(false);
    const ans = 42;
    return (
        <div>
            <Button
                onClick={() => {
                    setVisibility(!visible);
                }}
            >
                Reveal Answer
            </Button>{" "}
            Answer = {visible ? ans : ""}
        </div>
    );
}
