import { Col, Container, Row } from "react-bootstrap"
import "./Footer.css"
import Image from "next/image"
import Link from "next/link"

export const Footer = () => {
    return (
        <>
            <section id="footer-nav">
                <Row className="w-100">
                    <ul className="nav justify-content-center">
                        <li className="nav-item mx-4 cursos">
                            <Link href="#">Cursos</Link>
                        </li>
                        <li className="nav-item mx-4 footer-nav-separator">
                            <Link href="#">Quiénes somos</Link>
                        </li>
                        <li className="nav-item mx-4" id="footer-nav-separator-mid">
                            <Link href="#">Noticias Frescas</Link>
                        </li>
                        <li className="nav-item mx-4 footer-nav-separator">
                            <Link href="#">#Wearedoers</Link>
                        </li>
                        <li className="nav-item mx-4 contacto">
                            <Link href="#">Contacto</Link>
                        </li>
                    </ul>
                </Row>
            </section >
            <section id="footer">
                <Container>
                    <Row className="pt-4">
                        <Col xxl="4" md="4" sm="4" className="my-2">
                            <Image width={0} height={0} alt="email" src="/assets/svg/email.svg" className="iconos-redes mx-3" />
                            <Image width={0} height={0} alt="instagram" src="/assets/svg/instagram.svg" className="iconos-redes mx-3" />
                            <Image width={0} height={0} alt="globe" src="/assets/svg/globe.svg" className="iconos-redes mx-3" />
                            <p className="texto-footer mt-4">
                                2021 brother Madrid
                            </p>
                        </Col>
                        <Col xxl="4" md="4" sm="4" id="white-logo-col">
                            <Image width={0} height={0} alt="white-logo" src="/svg/assets/white-logo.svg" />
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