import { Col, Row } from "react-bootstrap";
import { useState } from "react";
import "./Chat.css"

export const Chat = () => {
    const [display, setDisplay] = useState("d-none");

    const handleShow = () => {
        display === "d-none" ? setDisplay("d-block") : setDisplay("d-none")
    }

    return (
        <>
            <Row className={`${display}`} id="chat-opcion-1">
                Completa el formulario
            </Row>
            <Row className={`${display}`} id="chat-opcion-2">
                Escribenos en whatsapp
            </Row>
            <Row id="chat" onClick={handleShow}>
                <Col xxl="3">
                    <img src="assets/chat.svg" />
                </Col>
                <Col xxl="9">
                    <span>Hola, Bro :{`)`}</span>
                </Col>
            </Row>
        </>
    )
}