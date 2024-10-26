import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

const PEOPLE = [
    "Alan Turing",
    "Grace Hopper",
    "Ada Lovelace",
    "Charles Babbage",
    "Barbara Liskov",
    "Margaret Hamilton",
];

export function ChooseTeam(newMember: string): React.JSX.Element {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [allOptions, setAllOptions] = useState<string[]>(PEOPLE);
    const [team, setTeam] = useState<string[]>([]);

    function chooseMember() {
        if (!team.includes(newMember)) {
            team.push(newMember);
        }
        const isThere = team.filter(
            (people: String): boolean => people === newMember,
        );
        if (isThere.length === 0) {
            const newTeam = [...team, newMember];
            setTeam(newTeam);
        }
    }

    function clearTeam() {
        const newTeam: string[] = [];
        setTeam(newTeam);
    }

    return (
        <div>
            <h3>Choose Team</h3>
            <Row>
                <Col>
                    {allOptions.map((option: string) => (
                        <div key={option} style={{ marginBottom: "4px" }}>
                            Add{" "}
                            <Button onClick={chooseMember} size="sm">
                                {option}
                            </Button>
                        </div>
                    ))}
                </Col>
                <Col>
                    <strong>Team:</strong>
                    {team.map((member: string) => (
                        <li key={member}>{member}</li>
                    ))}
                    <Button onClick={clearTeam}>Clear Team</Button>
                </Col>
            </Row>
        </div>
    );
}
