import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [askAttempts, setaskAttempts] = useState<string>("0");
    function updateAskAttempts(event: React.ChangeEvent<HTMLInputElement>) {
        setaskAttempts(event.target.value);
    }
    return (
        <div>
            <Form.Group className="check-A" controlId="formAnswer">
                <Form.Label>attempts</Form.Label>
                <Form.Control
                    type="number"
                    value={askAttempts}
                    onChange={updateAskAttempts}
                />
                <Form.Text>
                    You have {attempts} attempts left and are requesting{" "}
                    {askAttempts} attempts more
                </Form.Text>
            </Form.Group>
            <Button
                onClick={() => {
                    setAttempts(attempts - 1);
                }}
                disabled={attempts === 0}
            >
                use
            </Button>
            <Button
                onClick={() => {
                    setAttempts(
                        attempts +
                            (isNaN(Number(askAttempts)) ? 0
                            : Number(askAttempts) >= 0 ? Number(askAttempts)
                            : 0),
                    );
                }}
            >
                gain
            </Button>
        </div>
    );
}
