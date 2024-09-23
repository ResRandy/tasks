import React from "react";
import "./App.css";
<<<<<<< HEAD
import { Button, Col, Container, Row } from "react-bootstrap";
// inserting the image file
import car from "./Images/Wallpaper.jpg";
=======
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
>>>>>>> upstream/task-state

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript by Randolph Stokes
            </header>
<<<<<<< HEAD
            <div style={{ backgroundColor: "violet", padding: "6px" }}>
                <h1>Things that I like</h1>
            </div>
            <div>
                {" "}
                <Container>
                    <Row>
                        <Col>
                            <div
                                style={{
                                    padding: "6px",
                                    backgroundColor: "black",
                                    height: "200px",
                                    width: "300px",
                                }}
                            >
                                <Button
                                    onClick={() => {
                                        console.log("Hello World!");
                                    }}
                                >
                                    {" "}
                                    Log Hello World
                                </Button>
                                <div
                                    style={{
                                        backgroundColor: "red",
                                        height: "20px",
                                        width: "50px",
                                    }}
                                ></div>
                            </div>
                        </Col>{" "}
                        <Col>
                            <div
                                style={{
                                    padding: "6px",
                                    backgroundColor: "yellow",
                                    height: "200px",
                                    width: "500px",
                                }}
                            >
                                <div
                                    style={{
                                        backgroundColor: "red",
                                        height: "20px",
                                        width: "50px",
                                    }}
                                ></div>
                                <ul>
                                    <li>Cars</li>
                                    <li>Video games</li>
                                    <li>Art(including music)</li>
                                    <li>Nature</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div style={{ border: "4px solid blue", padding: "6px" }}>
                This is surrounded by a border although there is a lot of
                problems that have been created whenever I try to use Buttons
                and Containers
            </div>

            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. It not work for some reason.
            </p>
            <div>
                <img
                    src={car}
                    alt="Picture of Subaru BRZ 1st generation (car)"
                />
            </div>
=======
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
>>>>>>> upstream/task-state
        </div>
    );
}

export default App;
