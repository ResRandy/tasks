import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);
    return (
        <div>
            <Button
                onClick={() => {
                    setInProgress(inProgress ? true : true);
                    setAttempts(attempts - 1);
                }}
                disabled={inProgress || attempts === 0}
            >
                Start Quiz
            </Button>
            <Button
                onClick={() => {
                    setInProgress(inProgress ? false : false);
                }}
                disabled={!inProgress}
            >
                Stop Quiz
            </Button>
            <Button
                onClick={() => {
                    setAttempts(attempts + 1);
                }}
            >
                Mulligan
            </Button>{" "}
            Number of attempts = {attempts} and {inProgress ? "is" : "isn't"} in
            progress
        </div>
    );
}
