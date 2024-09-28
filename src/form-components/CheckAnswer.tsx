import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [uAnswer, setUAnswer] = useState<string>("");
    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setUAnswer(event.target.value);
    }
    return (
        <div>
            <Form.Group className="check-A" controlId="formAnswer">
                <Form.Label>answer</Form.Label>
                <Form.Control
                    placeholder="Enter answer"
                    onChange={updateAnswer}
                />
                <Form.Text>
                    Your answer is {uAnswer === expectedAnswer ? "✔️" : "❌"}
                </Form.Text>
            </Form.Group>
        </div>
    );
}
