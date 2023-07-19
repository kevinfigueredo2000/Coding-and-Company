import { Col, Container, Row } from "react-bootstrap"
import "./Cursos.css"
import Image from "next/image"

export const Cursos = () => {
    return (
        <section id="cursos" className="py-4">
            <Image alt="yellow-trap" href="assets/yellow-trap.svg" id="yellow-trap"/>
            <Image alt="yellow-hex-full" href="assets/yellow-hex-full.svg" id="yellow-hex-full"/>
            <Image alt="cloud" href="assets/cloud.svg" id="cloud"/>
            <Image alt="yellow-asterisk-big" href="assets/yellow-asterisk-big.svg" id="yellow-asterisk"/>
            <Container>
                <Row>
                    <Col xxl="4" lg="4" md="12">
                        <h2>
                            Mucho más<br />que una escuela de<br /><u><b>creativos</b></u>
                        </h2>
                        <Col xxl="10" className="mt-4">
                            <p>
                                Un Brother es alguien que <u>piensa continuamente</u>, inquieto, <b>curioso</b> y reflexivo.
                            </p>
                            <p>
                                Que se <u>plantea preguntas</u> y busca las respuestas. Un brother es alguien que se abre camino, proactivo, que tiene iniciativas, que <b>busca oportunidades.</b>
                            </p>
                            <p>
                                Un bother no deja que las cosas pasen. Va a buscarlas y las pelea y que si gana, sigue a por más.
                            </p>
                            <p>
                                Y si pierde, <b>no se rinde <u>jamás</u>.</b>
                            </p>
                        </Col>
                    </Col>

                    <Col xxl="7" lg="7" md="12" className="ms-xxl-auto ">
                        <h2><b>Cursos & Workshops</b></h2>
                        <Row className="mt-4 ms-2">
                            <Col xxl="10" md="11" sm="11">
                                <Row className="mt-2">
                                    <article className="col-xxl-4 col-lg-4 col-md-4 col-4 pb-3" >
                                        <Image alt="thumb-2" href="assets/thumb-02.jpg" height="144px" width="144px" />
                                        <p className="col-8">Curso anual de Creatividad</p>
                                    </article>
                                    <article className="col-xxl-4 col-lg-4 col-md-4 col-4 pb-3" >
                                        <Image alt="thumb-3" href="assets/thumb-03.jpg" height="144px" width="144px" />
                                        <p className="col-8">Planificación y Estrategia Creativa 2021</p>
                                    </article>
                                    <article className="col-xxl-4 col-lg-4 col-md-4 col-4 pb-3" >
                                        <Image alt="thumb-1" href="assets/thumb-01.jpg" height="144px" width="144px" />
                                        <p className="col-8">Pr & Comunicación 2021</p>
                                    </article>
                                    <article className="col-xxl-4 col-lg-4 col-md-4 col-4 pb-3" >
                                        <Image alt="thumb-5" href="assets/thumb-05.jpg" height="144px" width="144px" />
                                        <p className="col-8">Digital y social Media</p>
                                    </article>
                                    <article className="col-xxl-4 col-lg-4 col-md-4 col-4 pb-3" >
                                        <Image alt="thumb-6" href="assets/thumb-06.jpg" height="144px" width="144px" />
                                        <p className="col-8">Design Thinking</p>
                                    </article>
                                    <article className="col-xxl-4 col-lg-4 col-md-4 col-4 pb-3" >
                                        <Image alt="thumb-4" href="assets/thumb-04.jpg" height="144px" width="144px" />
                                        <p className="col-8">Planificación y Estrategia Creativa</p>
                                    </article>
                                </Row>
                            </Col>
                            <Col xxl="1" md="1" sm="1" className="mt-2">
                                <Image alt="white-arrow" href="assets/white-arrow.svg" className="mb-4 flechas-cursos"/>
                                <Image alt="white-arrow" href="assets/white-arrow.svg" className="mb-4 flechas-cursos" id="white-arrow-down-cursos"/>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Container>
        </section>
    )
}