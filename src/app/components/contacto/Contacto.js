import { Col, Container, Form, Row } from "react-bootstrap"
import "./Contacto.css"
import Image from "next/image"

export const Contacto = () => {
    //onFocus cambiar de color el border-bottom
    return (
        <section id="contacto">
            <Container>
                <Row>
                    <Col xxl="6" md="5" sm="12" className="me-auto">
                        <h2 className="ms-5 my-2" id="sos-lo-que-haces">#Sosloquehacés</h2>
                        <Image width={500} height={400} className="my-5" src="/assets/svg/bear-misc.svg" alt="bear-misc" />
                    </Col>
                    <Col xxl="5" md="5" sm="12">
                        <h3><b>¿Quieres saber más sobre nuestros cursos?</b></h3>
                        <h4 className="mt-3 mb-4">Completá este formulario</h4>
                        <Form>
                            <Col className="my-3">
                                <label for="nombre">Nombre*</label><br />
                                <input type="text" name="nombre" id="" placeholder="Escribe tu nombre" className="col-10 " />
                            </Col>
                            <Col className="my-3">
                                <label for="telefono">Teléfono*</label><br />
                                <input type="text" name="telefono" id="" placeholder="Escribe tu número de teléfono" className="col-10 " />
                            </Col>
                            <Col className="my-3">
                                <label for="email">E-mail*</label><br />
                                <input type="text" name="email" id="" placeholder="Escribe tu correo electrónico" className="col-10 " />
                            </Col>
                            <Col className="my-3">
                                <label for="options">Curso de interés</label><br />
                                <select name="options" className="col-10 p-2">
                                    <option disabled selected >
                                        Seleccioná un curso
                                    </option>
                                </select>
                            </Col>
                            <Col className="my-3">
                                <label for="mensaje">Mensaje</label><br />
                                <input type="text" name="mensaje" id="" placeholder="Escribe un mensaje adicional" className="col-10" />
                            </Col>
                            <p className="my-4">*datos obligatorios</p>
                            <button className="slide-button"><b>Enviar</b></button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}