import { Col, Row } from "react-bootstrap"
import "./Index.css";
import Image from "next/image";

export const Index = () => {
    return (
        <section id="index">
            <Image href="assets/blue-asterisk.svg" id="red-asterisk" />
            <Image href="assets/blue-asterisk.svg" id="blue-asterisk" />
            <Image href="assets/yellow-hex.svg" id="yellow-hex1" />
            <Image href="assets/hex-blue.svg" id="hex-blue" />
            <Image href="assets/magenta-circle.svg" id="circle" />
            <Image href="assets/green-trap.svg" id="green-trap" />
            <Image href="assets/white-arrow.svg" id="white-arrow2" />
            <a style={{position:"absolute"}} href="#cursos"id="white-arrow-down"><Image href="assets/white-arrow-down.svg"/></a>
            <Row className="w-100">
                <hr />
                <Col xxl="5" className="ms-auto">
                    <Row style={{ backgroundColor: "white" }}>
                        <Image href="/assets/minus.svg" id="minus" className="col-5" />
                        <Image href="/assets/logo.svg" id="logo" className="col-7 my-auto" />
                    </Row>
                    <hr className="hrs" />
                    <Row>
                        <Col xxl="auto">
                            <h1 className="ms-4">Madrid</h1>
                        </Col>
                        <Col className="my-auto ms-4" xxl="auto">
                            <Image href="/assets/white-arrow2.svg" id="white-arrow-madrid"/>
                        </Col>
                    </Row>
                    <hr className="hrs" />
                    <p id="sub-titulo">Doers School</p>
                </Col>
                <Col xxl="1" id="dots-col">
                    <Image href="assets/dots.svg" style={{height: "266px"}} />
                </Col>
                <Col xxl="4" id="col-botones">
                    <div style={{ position: "absolute" }}>
                        <Image href="assets/yellow-hex.svg" id="orange-hex" />
                    </div>
                    <Row>
                        <Col xxl="10">
                            <Row>
                                <Col xxl="8" className="botones-index">
                                    <Row>
                                        <Col xxl="6" className="ms-2">
                                            <h5>Curso Anual de Creatividad</h5>
                                        </Col>
                                        <Col xxl="4" className="d-flex justify-content-end">
                                            <p>{`>`}</p>
                                        </Col>
                                        <p className="col-8 ms-2">Hay plazas disponibles. Apúntate!</p>
                                    </Row>
                                </Col>
                                <Col xxl="auto">
                                </Col>
                            </Row>
                        </Col>
                        <Col xxl="10">
                            <Row>
                                <Col xxl="8" className="botones-index">
                                    <Row>
                                        <Col xxl="6" className="ms-2">
                                            <h5>Curso Anual de Creatividad</h5>
                                        </Col>
                                        <Col xxl="4" className="d-flex justify-content-end">
                                            <p>{`>`}</p>
                                        </Col>
                                        <p className="col-8 ms-2">Quedan pocas plazas. No te quedes fuera!</p>
                                    </Row>
                                </Col>
                                <Col xxl="auto">
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col xxl="6" >
                            <marquee>
                                //ver todos los cursos
                            </marquee>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </section >
    )
}