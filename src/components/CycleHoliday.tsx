import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function emoji(day: string) {
    if (day === "Valentine's day") {
        return "❤️";
    } else if (day === "Christmas") {
        return "🎄";
    } else if (day === "Independance Day") {
        return "🇺🇸";
    } else if (day === "New Years") {
        return "🎆";
    } else if (day === "Thanksgiving") {
        return "🦃";
    } else {
        return "";
    }
}

export function alphabet(day: string) {
    if (day === "Valentine's day") {
        return "Christmas";
    } else if (day === "Christmas") {
        return "Independance Day";
    } else if (day === "Independance Day") {
        return "New Years";
    } else if (day === "New Years") {
        return "Thanksgiving";
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    } else if (day === "Thanksgiving") {
        return "Valentine's day";
    } else {
        return "";
    }
}

export function timeLine(day: string) {
    if (day === "Valentine's day") {
        return "Independance Day";
    } else if (day === "Christmas") {
        return "New Years";
    } else if (day === "Independance Day") {
        return "Thanksgiving";
    } else if (day === "New Years") {
        return "Valentine's day";
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    } else if (day === "Thanksgiving") {
        return "Christmas";
    } else {
        return "";
    }
}

export function CycleHoliday(): React.JSX.Element {
    const [day, setHoliday] = useState<string>("Valentine's day");
    return (
        <div>
            <Button
                onClick={() => {
                    setHoliday(alphabet(day));
                }}
            >
                Advance by Alphabet
            </Button>
            <Button
                onClick={() => {
                    setHoliday(timeLine(day));
                }}
            >
                Advance by Year
            </Button>
            {" Holiday: " + emoji(day)}
        </div>
    );
}
