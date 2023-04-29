import { Col, Container, Row } from "react-bootstrap"
import "./Footer.css"

export const Footer = () => {
    return (
        <>
            <section id="footer-nav">
                <Row className="w-100">
                    <ul className="nav justify-content-center">
                        <li className="nav-item mx-4 cursos">
                            <a>Cursos</a>
                        </li>
                        <li className="nav-item mx-4 prueba">
                            <a>Quiénes somos</a>
                        </li>
                        <li className="nav-item mx-4 prueba">
                            <a>Noticias Frescas</a>
                        </li>
                        <li className="nav-item mx-4 prueba">
                            <a>#Wearedoers</a>
                        </li>
                        <li className="nav-item mx-4 contacto">
                            <a>Contacto</a>
                        </li>
                    </ul>
                </Row>
            </section>
            <section id="footer">
                <Container>
                    <Row className="pt-4">
                        <Col xxl="4" md="4" sm="4" className="my-2">
                            <img src="/assets/email.svg" className="iconos-redes mx-3" />
                            <img src="/assets/instagram.svg" className="iconos-redes mx-3" />
                            <img src="/assets/globe.svg" className="iconos-redes mx-3" />
                            <p className="texto-footer mt-4">
                                2021 brother Madrid
                            </p>
                        </Col>
                        <Col xxl="4" md="4" sm="4" id="white-logo-col">
                            <img src="/assets/white-logo.svg" />
                        </Col>
                        <Col xxl="4" md="4" sm="4" id="col-redes">
                            <span className="texto-footer">Calle Gran Vía 27, 28013 Madrid.</span>
                            <span className="texto-footer">+34 910 52 66 49 | +34 612 27 84 09</span>
                            <span className="texto-footer">madrid@brotherad.com</span>
                            <span className="texto-footer my-2">Made by 20DEDOS</span>
                        </Col>
                    </Row>
                </Container>
            </section >
        </>
    )
}