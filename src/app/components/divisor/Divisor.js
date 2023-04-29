import { Row } from "react-bootstrap"
import "./Divisor.css"

export const Divisor = (prop) => {
    return (
        <section id="divisor" style={prop.section === "cursos" ? { backgroundColor: "#FF1F57" } : { backgroundColor: "#000000" }}>
            <marquee loop="-1" behavior="scroll" direction="left">
                <Row className="w-100 py-3">
                    <img src={`assets/${prop?.divisor[0]}.svg`} className="col-1 svg-divisor" />
                    <h3 className="col-2" style={prop.section === "cursos" ? { color: "#E9E6E1" } : { color: "#E1DF3C" }}>Chequea todos los cursos</h3>
                    <img src={`assets/${prop?.divisor[1]}.svg`} className="col-2 svg-divisor" />
                </Row>
            </marquee>
        </section>

    )
}