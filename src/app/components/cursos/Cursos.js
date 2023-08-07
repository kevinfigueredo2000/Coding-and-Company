import { Col, Container, Row } from "react-bootstrap"
import "./Cursos.css"
import Image from "next/image"
import { useState } from "react"
import cursos from "/cursos.json" 

export const Cursos = () => {

    const [transformArrowDown, setTransformArrowDown] = useState("white-arrow-down-cursos")
    const [transformArrow, setTransformArrow] = useState()
    const [show, setShow] = useState("hide")

    return (
        <section id="cursos" className="py-4">
            <Image width={100} height={100} alt="yellow-trap" src="/assets/svg/yellow-trap.svg" id="yellow-trap" />
            <Image width={100} height={100} alt="yellow-hex-full" src="/assets/svg/yellow-hex-full.svg" id="yellow-hex-full" />
            <Image width={100} height={100} alt="cloud" src="/assets/svg/cloud.svg" id="cloud" />
            <Image width={100} height={100} alt="yellow-asterisk-big" src="/assets/svg/yellow-asterisk-big.svg" id="yellow-asterisk" />
            <Container>
                <Row>
                    <Col xxl="4" lg="3" md="12">
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
                    <Col xxl="7" xl="8" lg="9" md="12" className="ms-xxl-auto ">
                        <h2><b>Cursos & Workshops</b></h2>
                        <Row className="mt-4 ms-2">
                            <Col xxl="10" md="11" sm="11">
                                <Row className="mt-2">
                                    {cursos.map((curso, index) => {
                                        return (
                                            <article className="col-xxl-4 col-lg-4 col-md-4 col-4 pb-3 position-relative" >
                                                <div>
                                                    <Image width={150} height={150} alt={curso.title}
                                                        src={curso.img} className="img-cursos"
                                                        onMouseEnter={() => setShow(index)}
                                                        onMouseLeave={() => setShow(null)}
                                                    />
                                                    <p className={`${show === index ? 'show' : "hide"} disponibility`}style={{pointerEvents: "none"}}>{curso.available}</p>
                                                </div>
                                                <p className="col-8">{curso.description}</p>
                                            </article>
                                        )
                                    })}
                                </Row>
                            </Col>
                            <Col xxl="1" md="1" sm="1" className="mt-2">
                                <Row className="mb-4 flechas-cursos" style={{ width: "130%" }} onMouseEnter={() => setTransformArrow("arrow")} onMouseLeave={() => setTransformArrow("")}>
                                    <Image width={25} height={40} className={`col-11 m-auto ${transformArrow}`} alt="white-arrow" src="/assets/svg/white-arrow.svg" />
                                </Row>
                                <Row className="mb-4 flechas-cursos" style={{ width: "130%" }} onMouseEnter={() => setTransformArrowDown("arrow1")} onMouseLeave={() => setTransformArrowDown("white-arrow-down-cursos")}>
                                    <Image width={25} height={40} className={`col-11 m-auto ${transformArrowDown}`} alt="white-arrow" src="/assets/svg/white-arrow.svg" id="white-arrow-down-cursos" />
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Container>
        </section>
    )
}