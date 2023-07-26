import { Col, Row } from "react-bootstrap"
import "./Index.css";
import Image from "next/image";
import Link from "next/link";

export const Index = () => {
    return (
        <section id="index">
            <Image width={100} height={100} alt="blue-asterisk" src="/assets/svg/blue-asterisk.svg" id="red-asterisk" />
            <Image width={100} height={100} alt="blue-asterisk" src="/assets/svg/blue-asterisk.svg" id="blue-asterisk" />
            <Image width={100} height={100} alt="yellow-hex" src="/assets/svg/yellow-hex.svg" id="yellow-hex1" />
            <Image width={100} height={100} alt="hex-blue" src="/assets/svg/hex-blue.svg" id="hex-blue" />
            <Image width={100} height={100} alt="magenta-circle" src="/assets/svg/magenta-circle.svg" id="circle" />
            <Image width={100} height={100} alt="green-trapp" src="/assets/svg/green-trap.svg" id="green-trap" />
            <Image width={100} height={100} alt="white-arrow" src="/assets/svg/white-arrow1.svg" id="white-arrow2" style={{ stroke: "white" }} />
            <Row className="w-100">
                <hr />
                <Col xxl="5" className="ms-auto">
                    <Row>
                        <Image width={100} height={100} alt="minus" src="/assets/svg/minus.svg" id="minus" className="col-5" />
                        <Image width={100} height={100} alt="logo" src="/assets/svg/logo.svg" id="logo" className="col-7 my-auto" />
                    </Row>
                    <hr className="hrs" />
                    <Row>
                        <Col xxl="auto">
                            <h1 className="ms-4">Madrid</h1>
                        </Col>
                        <Col className="my-auto ms-4" xxl="auto">
                            <Image width={100} height={100} alt="white-arrow2" src="/assets/svg/white-arrow2.svg" id="white-arrow-madrid" />
                        </Col>
                    </Row>
                    <hr className="hrs" />
                    <p id="sub-titulo">Doers School</p>
                </Col>
                <Col xxl="4" id="col-botones">
                    <div style={{ position: "absolute" }}>
                        <Image width={100} height={100} alt="yellow-hex" src="/assets/svg/yellow-hex.svg" id="orange-hex" />
                    </div>
                    <Row>
                        <Col xxl="10">
                            <Row>
                                <Col xxl="1" id="dots-col">
                                    <Image width={100} height={100} alt="dots" src="/assets/svg/dots.svg" style={{ height: "30vh" }} />
                                </Col>
                                <Col xxl="7" className="botones-index">
                                    <Row>
                                        <Col xxl="6" className="ms-2">
                                            <h5>Curso Anual de Creatividad</h5>
                                        </Col>
                                        <Col xxl="4" className="d-flex justify-content-end">
                                            <p>{'>'}</p>
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
                                <Col xxl="7" className="botones-index">
                                    <Row>
                                        <Col xxl="6" className="ms-2">
                                            <h5>Curso Anual de Creatividad</h5>
                                        </Col>
                                        <Col xxl="4" className="d-flex justify-content-end">
                                            <p>{'>'}</p>
                                        </Col>
                                        <p className="col-8 ms-2">Quedan pocas plazas. No te quedes fuera!</p>
                                    </Row>
                                </Col>
                                <Col xxl="auto">
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <hr style={{position:"absolute", width:"119rem", right:"0"}}/>
                    <Row>
                        <Col xxl="6" >
                            <marquee>
                                {'//ver todos los cursos'}
                            </marquee>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Link href="#cursos" id="white-arrow-down"><Image alt="white-arrow-down" src="/assets/svg/white-arrow-down.svg" width={100} height={50}  style={{ position: "absolute" }} /></Link>
        </section >
    )
}