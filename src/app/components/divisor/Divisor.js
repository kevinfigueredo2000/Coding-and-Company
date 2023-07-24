import { Col, Row } from "react-bootstrap"
import "./Divisor.css"
import Image from "next/image"

export const Divisor = (prop) => {
    return (
        <section id="divisor" style={prop.section === "cursos" ? { backgroundColor: "#FF1F57" } : { backgroundColor: "#000000" }}>
            <marquee loop="-1" behavior="scroll" direction="left">
                <Row className="w-100 py-3">
                    <Col>
                        <Row>
                            <Image width={0} height={0} alt={prop?.divisor[0]} src={`/assets/svg/${prop?.divisor[0]}.svg`} className="col svg-divisor" />
                            <h3 className="col my-auto" style={prop.section === "cursos" ? { color: "#E9E6E1" } : { color: "#E1DF3C" }}>Chequea todos los cursos</h3>
                            <Image alt={prop?.divisor[0]} src={`/assets/svg/${prop?.divisor[1]}.svg`} width={0} height={0} className="col svg-divisor" />
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Image width={0} height={0} alt={`/assets/${prop?.divisor[0]}.svg`} src={`/assets/svg/${prop?.divisor[0]}.svg`} className="col svg-divisor" />
                            <h3 className="col my-auto" style={prop.section === "cursos" ? { color: "#E9E6E1" } : { color: "#E1DF3C" }}>Chequea todos los cursos</h3>
                            <Image width={0} height={0} alt={prop?.divisor[0]} src={`/assets/svg/${prop?.divisor[1]}.svg`} className="col svg-divisor" />
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Image width={0} height={0} alt={prop?.divisor[0]} src={`/assets/svg/${prop?.divisor[0]}.svg`} className="col svg-divisor" />
                            <h3 className="col my-auto" style={prop.section === "cursos" ? { color: "#E9E6E1" } : { color: "#E1DF3C" }}>Chequea todos los cursos</h3>
                            <Image width={0} height={0} alt={prop?.divisor[0]} src={`/assets/svg/${prop?.divisor[1]}.svg`} className="col svg-divisor" />
                        </Row>
                    </Col>
                </Row>
            </marquee>
        </section>

    )
}