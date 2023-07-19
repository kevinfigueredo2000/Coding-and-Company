import { Container, Row } from "react-bootstrap"
import "./NavBar.css"
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export const Navbar = () => {
    const [display, setDisplay] = useState("d-none");
    const [ubicacionPrincipal, setUbicacionPrincipal] = useState(window?.pageYOffset);
    const [desplazamiento_Actual, setDesplazamiento_Actual] = useState(0);
    const BgNav = useRef()
    const Logo = useRef()
    const Iso = useRef()
    const ToTop = useRef()

    useEffect(() => {
        const handleScroll = () => {
          setDesplazamiento_Actual(window?.pageYOffset);
          if (desplazamiento_Actual >= 380) {
            BgNav.current?.classList.add("color-nav");
            BgNav.current?.classList.remove("transparente-nav");
            Logo.current?.classList.add("d-show");
            Logo.current?.classList.remove("d-none");
            Iso.current?.classList.add("d-none");
            Iso.current?.classList.remove("d-show");
            ToTop.current?.classList.add("d-show");
            ToTop.current?.classList.remove("d-none");
          } else {
            BgNav.current?.classList.remove("color-nav");
            BgNav.current?.classList.add("transparente-nav");
            Logo.current?.classList.add("d-none");
            Logo.current?.classList.remove("d-show");
            Iso.current?.classList.add("d-show");
            Iso.current?.classList.remove("d-none");
            ToTop.current?.classList.add("d-none");
            ToTop.current?.classList.remove("d-show");
          }
          setUbicacionPrincipal(desplazamiento_Actual);
        };
    
        window?.addEventListener("scroll", handleScroll);
    
        return () => {
          window?.removeEventListener("scroll", handleScroll);
        };
      }, [desplazamiento_Actual]);

    const handleShow = () => {
        display === "d-none" ? setDisplay("d-block") : setDisplay("d-none")
    }
    return (
        < >
            <div id="nav-bar" ref={BgNav}>
                <a href="#index"><Image src="/assets/white-arrow.svg" width={0} height={0} ref={ToTop} alt="white-arrow" className="d-none" id="to-top" /></a>
                <Row>
                    <ul className="nav justify-content-end" style={{width:"80%"}}>
                        <li className="nav-item col-2 me-5">
                            <a href="#index">
                                <Image src="/assets/iso.svg" width={20} height={20} ref={Iso} alt="iso" className="iconos-nav" />
                                <Image src="/assets/logo.svg" width={0} height={0} ref={Logo} alt="logo" className="d-none" />
                            </a>
                        </li>
                        <li className=" px-4 my-auto" onMouseEnter={handleShow}>
                            <Image width={0} height={0} src="/assets/hex-blue.svg" alt="hex-blue" className={`${display} hex-blue-nav`} />
                            <a href="">Cursos</a>
                        </li>
                        <li className=" px-4 my-auto" onMouseEnter={handleShow}>
                            <Image width={0} height={0} src="/assets/hex-blue.svg" alt="hex-blue" className={`${display} hex-blue-nav`} />
                            <a href="">Quiénes somos</a>
                        </li>
                        <li className=" px-4 my-auto" onMouseEnter={handleShow}>
                            <Image width={0} height={0} src="/assets/hex-blue.svg" alt="hex-blue" className={`${display} hex-blue-nav`} />
                            <a href="">Noticias Frescas</a>
                        </li>
                        <li className=" px-4 my-auto" onMouseEnter={handleShow}>
                            <Image width={0} height={0} src="/assets/hex-blue.svg" alt="hex-blue" className={`${display} hex-blue-nav`} />
                            <a href=""><u><b>#Wearedoers</b></u></a>
                        </li>
                        <li className=" ps-4 pe-5 my-auto" onMouseEnter={handleShow}>
                            <Image width={0} height={0} src="/assets/hex-blue.svg" alt="hex-blue" className={`${display} hex-blue-nav`} />
                            <a href="">Contacto</a>
                        </li>
                        <li className="mx-4">
                            <a href=""><Image width={0} height={0} href="/assets/email.svg" alt="email" className="iconos-nav" /></a>
                        </li>
                        <li className=" mx-4">
                            <a href=""><Image width={0} height={0} href="/assets/instagram.svg" alt="instagram" className="iconos-nav" /></a>
                        </li>
                        <li className="mx-4">
                            <a href=""><Image width={0} height={0} href="/assets/globe.svg" alt="globe" className="iconos-nav" /></a>
                        </li>
                    </ul>
                </Row>
            </div>
        </>
    )
}