import { Col, Row } from "react-bootstrap";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa"
import { BiErrorCircle } from "react-icons/bi"
import "./Chat.css"
import Image from "next/image";

export const Chat = () => {
    const [display, setDisplay] = useState("d-none");

    const handleShow = () => {
        display === "d-none" ? setDisplay("d-flex") : setDisplay("d-none")
    }

    return (
        <>
            <Row className={`${display}`}id="chat-opcion-1">
                <Col xxl="1">
                    <BiErrorCircle />
                </Col>
                <Col xxl="auto">
                    <p>Completa el formulario</p>
                </Col>
            </Row>
            <Row className={`${display}`} id="chat-opcion-2">
                <Col xxl="1">
                    <FaWhatsapp />
                </Col>
                <Col xxl="auto">
                    <p>Escribenos en whatsapp</p>
                </Col>
            </Row>
            <Row id="chat" onClick={handleShow}>
                <Col xxl="3">
                    <Image width={20} height={20}src="/assets/svg/chat.svg" alt="chat"/>
                </Col>
                <Col xxl="9">
                    <span>Hola, Bro :{`)`}</span>
                </Col>
            </Row>
        </>
    )
}