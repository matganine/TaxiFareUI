import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Ride = ({ details }) => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
        let endTime = new Date(details.startTime);
        endTime.setSeconds(endTime.getSeconds() + details.duration);
        let duration = new Date(details.duration * 1000)
            .toISOString()
            .substr(11, 8);
        alert(duration + " - " + endTime.toISOString());
    };

    const btnVariant = details.distance >= 2 ? "danger" : "success";

    return (
        <Container>
            <Row className="row-bottom-margin">
                <Col>
                    <Button
                        className="button-width"
                        variant={btnVariant}
                        size="lg"
                        onClick={handleClick}
                    >
                        <Row>
                            <Col className="text-left">Ride {details.id}</Col>
                            <Col className="text-left">{clicked ? "clicked" : null}</Col>
                        </Row>
                        <Row>
                            <Col className="text-left">Price: {details.price}</Col>
                        </Row>
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Ride;