import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { numDhValue } from "./DoubleHalfState";

function Doubler({ setDhValue, value }: numDhValue): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue(2 * value);
            }}
        >
            Double
        </Button>
    );
}

function Halver({ setDhValue, value }: numDhValue): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue(0.5 * value);
            }}
        >
            Halve
        </Button>
    );
}

export function DoubleHalf({ value }: numDhValue): React.JSX.Element {
    const [dhvalue, setDhValue] = useState<number>(0);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{value}</span>
            </div>
            <Doubler setDhValue={setDhValue} value={dhvalue}></Doubler>
            <Halver setDhValue={setDhValue} value={dhvalue}></Halver>
        </div>
    );
}
