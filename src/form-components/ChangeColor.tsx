import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>("red");
    const sumColors = [
        "red",
        "blue",
        "yellow",
        "magenta",
        "cyan",
        "green",
        "orange",
        "purple",
    ];
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            <h3>Colors</h3>
            {sumColors.map((col: string, index: number) => (
                <Form.Check
                    inline
                    key={index}
                    type="radio"
                    name="colorButtons"
                    onChange={updateColor}
                    value={col}
                    checked={color === col}
                    style={{ backgroundColor: col }}
                    label={col}
                    id="colored-box"
                />
            ))}
            {"\n You have chosen "}{" "}
            <span style={{ backgroundColor: color }}>{color}</span>
            {"."}
        </div>
    );
}
