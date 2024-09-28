import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [currentAns, setCurrentAns] = useState<string>(options[0]);
    function updateCurrentAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        setCurrentAns(event.target.value);
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="multipleChoiceQuestion">
                <Form.Select value={currentAns} onChange={updateCurrentAnswer}>
                    {options.map((opt: string, index: number) => (
                        <option value={opt} key={index}>
                            {opt}
                        </option>
                    ))}
                </Form.Select>
                <Form.Text>
                    {currentAns === expectedAnswer ? "✔️" : "❌"}
                </Form.Text>
            </Form.Group>
        </div>
    );
}
