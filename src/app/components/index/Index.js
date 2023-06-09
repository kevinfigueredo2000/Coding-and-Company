import { Col, Row } from "react-bootstrap"
import "./Index.css";

export const Index = () => {
    return (
        <section id="index">
            <img src="assets/blue-asterisk.svg" id="red-asterisk" />
            <img src="assets/blue-asterisk.svg" id="blue-asterisk" />
            <img src="assets/yellow-hex.svg" id="yellow-hex1" />
            <img src="assets/hex-blue.svg" id="hex-blue" />
            <img src="assets/magenta-circle.svg" id="circle" />
            <img src="assets/green-trap.svg" id="green-trap" />
            <img src="assets/white-arrow.svg" id="white-arrow2" />
            <a style={{position:"absolute"}} href="#cursos"id="white-arrow-down"><img src="assets/white-arrow-down.svg"/></a>
            <Row className="w-100">
                <hr />
                <Col xxl="5" className="ms-auto">
                    <Row style={{ backgroundColor: "white" }}>
                        <img src="/assets/minus.svg" id="minus" className="col-5" />
                        <img src="/assets/logo.svg" id="logo" className="col-7 my-auto" />
                    </Row>
                    <hr className="hrs" />
                    <Row>
                        <Col xxl="auto">
                            <h1 className="ms-4">Madrid</h1>
                        </Col>
                        <Col className="my-auto ms-4" xxl="auto">
                            <img src="/assets/white-arrow2.svg" id="white-arrow-madrid"/>
                        </Col>
                    </Row>
                    <hr className="hrs" />
                    <p id="sub-titulo">Doers School</p>
                </Col>
                <Col xxl="1" id="dots-col">
                    <img src="assets/dots.svg" style={{height: "266px"}} />
                </Col>
                <Col xxl="4" id="col-botones">
                    <div style={{ position: "absolute" }}>
                        <img src="assets/yellow-hex.svg" id="orange-hex" />
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