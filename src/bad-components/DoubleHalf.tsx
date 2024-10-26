import React from "react";
// import { useState } from "react";
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
                setDhValue(value / 2);
            }}
        >
            Halve
        </Button>
    );
}

export function DoubleHalf({
    setDhValue,
    value,
}: numDhValue): React.JSX.Element {
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{value}</span>
            </div>
            <Doubler setDhValue={setDhValue} value={value}></Doubler>
            <Halver setDhValue={setDhValue} value={value}></Halver>
        </div>
    );
}
