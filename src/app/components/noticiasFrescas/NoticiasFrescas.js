import { Col, Container, Row } from "react-bootstrap";
import "./NoticiasFrescas.css";
import Image from "next/image";

export const NoticiasFrescas = () => {
    return (
        <section id="noticias-frescas">
            <Image href="assets/magenta-cloud.svg" id="magenta-cloud"/>
            <Image href="assets/magenta-circle.svg" id="magenta-circle"/>
            <Image href="assets/magenta-circle2.svg" id="magenta-circle-2"/>
            <Image href="assets/cloud.svg" id="cloud-noticias-frescas"/>
            <Container>
                <Row>
                    <h2 className="text-center">Noticias Frescas</h2>
                </Row>
                <Row>
                    <Col xxl="3" sm="6" className="mt-4">
                        <article className="mb-3">
                            <Image href="assets/news-01.jpg" className="col-12 borde-news mb-1" />
                            <p>Chin chin por nuestra plata en el #hackforgood del cdec</p>
                            <p>Publicado: 04/04/2020 Leer más --{`>`}</p>
                        </article>
                        <article >
                            <Image href="assets/news-06.jpg" className="col-12 borde-news mb-1" />
                            <p>Chin chin por nuestra plata en el #hackforgood del cdec</p>
                            <p>Publicado: 04/04/2020 Leer más --{`>`}</p>
                        </article>

                    </Col>
                    <Col xxl="3" sm="6">
                        <article >
                            <Image href="assets/news-02.jpg" className="col-12 borde-news mb-1" />
                            <p>Dos alumnas de Brother crean la primera manifestación feminista en Twitch</p>
                            <p>Publicado: 04/04/2020 Leer más --{`>`}</p>
                            
                        </article>
                        <article >
                            <Image href="assets/news-05.jpg" className="col-12 borde-news mb-1" />
                            <p>#PROHIBIDOFIJARCARTELES: UNA NUEVA OPORTUNIDAD PARA EL CARTEL MÁS FEO DEL MUNDO</p>
                            <p>Publicado: 04/04/2020 Leer más --{`>`}</p>
                        </article>


                    </Col>
                    <Col xxl="3" sm="6">
                        <article >
                            <Image href="assets/news-03.jpg" className="col-12 borde-news mb-1" />
                            <p>Brother Presenta {`<`}Pinta y Colorea{`>`}: el ciclo con el mejor talento gráfico de Madrid</p>
                            <p>Publicado: 04/04/2020 Leer más --{`>`}</p>
                        </article>
                        <article >
                            <Image href="assets/news-07.jpg" className="col-12 borde-news mb-1" />
                            <p>Somos la escuela con más finalistas en el Festival CDEC (otra vez ;) )</p>
                            <p>Publicado: 04/04/2020 Leer más --{`>`}</p>
                        </article>

                    </Col>
                    <Col xxl="3" sm="6">
                        <article >
                            <Image href="assets/news-04.jpg" className="col-12 borde-news mb-1" />
                            <p>Las nuevas ideas llegan a correos gracias a los alumnos de Brother</p>
                            <p>Publicado: 04/04/2020 Leer más --{`>`}</p>
                        </article>
                        {/* */}

                        <article >
                            <Image href="assets/news-08.jpg" className="col-12 borde-news mb-1" />
                            <p>Nueva representación del kingdom a cargo del ilustrador asis percales</p>
                            <p>Publicado: 04/04/2020 Leer más --{`>`}</p>
                        </article>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}