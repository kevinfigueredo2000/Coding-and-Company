import { Container, Row } from "react-bootstrap"
import "./NavBar.css"
import { useRef, useState } from "react";

export const Navbar = () => {
    const [display, setDisplay] = useState("d-none");
    const [ubicacionPrincipal, setUbicacionPrincipal] = useState(window?.pageYOffset);
    const [desplazamiento_Actual, setDesplazamiento_Actual] = useState(0);
    const BgNav = useRef()
    const Logo = useRef()
    const Iso = useRef()
    const ToTop = useRef()

    window.onscroll = function () {
        setDesplazamiento_Actual(window.pageYOffset)
        if (desplazamiento_Actual >= 380) {
            BgNav.current?.classList.add("color-nav")
            BgNav.current?.classList.remove("transparente-nav")
            Logo.current?.classList.add("d-show")
            Logo.current?.classList.remove("d-none")
            Iso.current?.classList.add("d-none")
            Iso.current?.classList.remove("d-show")
            ToTop.current?.classList.add("d-show")
            ToTop.current?.classList.remove("d-none")
        } else {
            BgNav.current?.classList.remove("color-nav")
            BgNav.current?.classList.add("transparente-nav")
            Logo.current?.classList.add("d-none")
            Logo.current?.classList.remove("d-show")
            Iso.current?.classList.add("d-show")
            Iso.current?.classList.remove("d-none")
            ToTop.current?.classList.add("d-none")
            ToTop.current?.classList.remove("d-show")
        }
        setUbicacionPrincipal(desplazamiento_Actual);
    }

    const handleShow = () => {
        display === "d-none" ? setDisplay("d-block") : setDisplay("d-none")
    }
    return (
        < >
            <div id="nav-bar" ref={BgNav}>
                <a href="#index"><img src="/assets/white-arrow.svg" ref={ToTop} className="d-none" id="to-top" /></a>
                <Row>
                    <ul className="nav justify-content-end" style={{width:"80%"}}>
                        <li className="nav-item col-2 me-5">
                            <a href="#index">
                                <img src="/assets/iso.svg" ref={Iso} className="iconos-nav" />
                                <img src="/assets/logo.svg" ref={Logo} className="d-none" />
                            </a>
                        </li>
                        <li className=" px-4 my-auto" onMouseEnter={handleShow}>
                            <img src="/assets/hex-blue.svg" className={`${display} hex-blue-nav`} />
                            <a href="">Cursos</a>
                        </li>
                        <li className=" px-4 my-auto" onMouseEnter={handleShow}>
                            <img src="/assets/hex-blue.svg" className={`${display} hex-blue-nav`} />
                            <a href="">Quiénes somos</a>
                        </li>
                        <li className=" px-4 my-auto" onMouseEnter={handleShow}>
                            <img src="/assets/hex-blue.svg" className={`${display} hex-blue-nav`} />
                            <a href="">Noticias Frescas</a>
                        </li>
                        <li className=" px-4 my-auto" onMouseEnter={handleShow}>
                            <img src="/assets/hex-blue.svg" className={`${display} hex-blue-nav`} />
                            <a href=""><u><b>#Wearedoers</b></u></a>
                        </li>
                        <li className=" ps-4 pe-5 my-auto" onMouseEnter={handleShow}>
                            <img src="/assets/hex-blue.svg" className={`${display} hex-blue-nav`} />
                            <a href="">Contacto</a>
                        </li>
                        <li className="mx-4">
                            <a href=""><img src="/assets/email.svg" className="iconos-nav" /></a>
                        </li>
                        <li className=" mx-4">
                            <a href=""><img src="/assets/instagram.svg" className="iconos-nav" /></a>
                        </li>
                        <li className="mx-4">
                            <a href=""><img src="/assets/globe.svg" className="iconos-nav" /></a>
                        </li>
                    </ul>
                </Row>
            </div>
        </>
    )
}