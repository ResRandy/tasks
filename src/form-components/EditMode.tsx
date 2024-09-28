import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [userName, setUserName] = useState<string>("Your Name");
    const [editing, setEditing] = useState<boolean>(false);
    const [isStudent, setIsStudent] = useState<boolean>(true);
    function updateEditing(event: React.ChangeEvent<HTMLInputElement>) {
        setEditing(event.target.checked);
    }
    function updateUserName(event: React.ChangeEvent<HTMLInputElement>) {
        setUserName(event.target.value);
    }
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }
    return (
        <div>
            <h4>
                {userName} {isStudent ? "is" : "is not"} a student
            </h4>
            <Form.Group className="switch" controlId="switchSection">
                <Form.Check
                    role="checkbox"
                    type="switch"
                    className="form-switch"
                    id="is-Editing-check"
                    label="editing?"
                    checked={editing}
                    onChange={updateEditing}
                />
            </Form.Group>
            {editing && (
                <Form.Group className="something" controlId="another">
                    <Form.Label>Edit Mode</Form.Label>
                    <Form.Control
                        value={userName}
                        onChange={updateUserName}
                        disabled={!editing}
                        role="textbox"
                    />
                    <Form.Check
                        role="checkbox"
                        type="checkbox"
                        id="is-student-check"
                        label="student?"
                        checked={isStudent}
                        disabled={!editing}
                        onChange={updateStudent}
                    />
                </Form.Group>
            )}
        </div>
    );
}
