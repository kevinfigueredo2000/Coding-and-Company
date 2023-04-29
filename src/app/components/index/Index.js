import { Col, Row } from "react-bootstrap"
import "./Index.css";

export const Index = () => {
    return (
        <section id="index">
            <img src="assets/blue-asterisk.svg" id="red-asterisk" />
            <img src="assets/blue-asterisk.svg" id="blue-asterisk" />
            <img src="assets/yellow-hex.svg" id="yellow-hex1" />
            <img src="assets/hex-blue.svg" id="hex-blue" />
            <img src="assets/yellow-hex.svg" id="orange-hex" />
            <img src="assets/magenta-circle.svg" id="circle" />
            <img src="assets/green-trap.svg" id="green-trap" />
            <img src="assets/white-arrow.svg" id="white-arrow2" />
            <img src="assets/white-arrow-down.svg" id="white-arrow-down" />
            <Row className="w-100">
                <hr />
                <Col xxl="5">
                    <Row>
                        <img src="/assets/minus.svg" id="minus" className="col-6" />
                        <img src="/assets/logo.svg" id="logo" className="col-6" />
                    </Row>
                    <hr />
                    <Row>
                        <Col xxl="auto">
                            <h1 className="ms-4">Madrid</h1>
                        </Col>
                        <Col className="my-auto" xxl="auto">
                            <img src="/assets/white-arrow2.svg" id="white-arrow" />
                        </Col>
                    </Row>
                    <hr />
                    <p id="sub-titulo">Doers School</p>
                </Col>
                <Col xxl="1" id="dots-col">
                    <img src="assets/dots.svg" />
                </Col>
                <Col xxl="5">
                    <Row>
                        <Col xxl="10">
                            <Row className="botones-index">
                                <Col xxl="6">
                                    <h5>Curso Anual de Creatividad</h5>
                                </Col>
                                <Col xxl="auto">
                                    <p>z</p>
                                </Col>
                                <p className="col-6">Hay plazas disponibles. Apúntate!</p>
                            </Row>
                        </Col>
                        <Col xxl="10">
                            <Row className="botones-index">
                                <Col xxl="6">
                                    <h5>Curso Anual de Creatividad</h5>
                                </Col>
                                <Col xxl="auto">
                                    <p>z</p>
                                </Col>
                                <p className="col-6">Hay plazas disponibles. Apúntate!</p>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </section >
    )
}
{/* <Row>
            <Col xxl="7">
                <Row style={{ display: "flex", justifyContent: "end" }}>
                    <img src="/assets/minus.svg" id="minus" className="col-2" />
                    <img src="/assets/logo.svg" id="logo" className="col-6" />
                </Row>
            </Col>
        </Row>
        <hr />
        <Col xxl="1" id="dots-col">
            <img src="assets/dots.svg" />
        </Col>
        <Row>
            <Col xxl="6">
                <Row style={{ display: "flex", justifyContent: "end" }}>
                    <Col xxl="auto">
                        <h1 className="ms-4">Madrid</h1>
                    </Col>
                    <Col className="my-auto" xxl="auto">
                        <img src="/assets/white-arrow2.svg" id="white-arrow" />
                    </Col>
                </Row>
            </Col>
            <Col></Col>
            <Col xxl="5">
                <Row style={{ display: "flex", justifyContent: "center" }}>
                    <Col xxl="6">
                        <h5>Curso Anual de Creatividad</h5>
                    </Col>
                    <Col xxl="auto">
                        <p>z</p>
                    </Col>
                    <p className="col-6">Hay plazas disponibles. Apúntate!</p>
                </Row>
            </Col>
        </Row>
        <hr />
        <Row>
            <Col xxl="6">
                <Row style={{ display: "flex", justifyContent: "end" }}>
                    <Col xxl="2">
                        <p id="sub-titulo">Doers School</p>
                    </Col>
                </Row>
            </Col>
            <Col></Col>
            <Col xxl="5">
                <Row style={{ display: "flex", justifyContent: "center" }}>
                    <Col xxl="6">
                        <h5>Planificación y Estrategia Creativa</h5>
                    </Col>
                    <Col xxl="auto">
                        <p>z</p>
                    </Col>
                    <p className="col-6">Quedan pocas plazas. No te quedes fuera!</p>
                </Row>
            </Col>
            <hr />
        </Row> */}