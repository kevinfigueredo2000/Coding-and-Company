import { Container, Row } from "react-bootstrap"
import "./NavBar.css"
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Itemlist = [
    "Cursos",
    "Quiénes somos",
    "Noticias Frescas",
    "#wearedoers",
    "Contacto"
]

export const Navbar = () => {
    const [display, setDisplay] = useState("hide");
    const [ubicacionPrincipal, setUbicacionPrincipal] = useState();
    const [desplazamiento_Actual, setDesplazamiento_Actual] = useState(0);
    const BgNav = useRef()
    const Logo = useRef()
    const Iso = useRef()
    const ToTop = useRef()

    useEffect(() => {
        const handleScroll = () => {
            window && setDesplazamiento_Actual(window.pageYOffset);
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


    return (
        < >
            <div id="nav-bar" ref={BgNav}>
                <Link href="#index"><Image src="/assets/svg/white-arrow.svg" width={15} height={15} ref={ToTop} alt="white-arrow" className="d-none" id="to-top" /></Link>
                <Row>
                    <ul className="nav justify-content-end" style={{ width: "80%" }}>
                        <li className="nav-item col-2 me-5">
                            <Link href="#index">
                                <Image src="/assets/svg/iso.svg" width={20} height={20} ref={Iso} alt="iso" className="iconos-nav" />
                                <Image src="/assets/svg/logo.svg" width={100} height={20} ref={Logo} alt="logo" className="d-none" />
                            </Link>
                        </li>
                        {Itemlist.map((i, index)=>{
                            return(
                        <li className=" px-4 my-auto" onMouseEnter={()=> setDisplay(index)} onMouseLeave={() => setDisplay(null)}>
                            <Image width={70} height={60} src="/assets/svg/hex-blue.svg" alt="hex-blue" key={index} className={`${i === "#wearedoers" || display === index ? 'show' : ''} hex-blue-nav`} />
                            <Link href="">{i}</Link>
                        </li>
                        )
                        })}
                        <li className="mx-4">
                            <Link href=""><Image width={20} height={20} src="/assets/svg/email.svg" alt="email" className="iconos-nav" /></Link>
                        </li>
                        <li className=" mx-4">
                            <Link href=""><Image width={20} height={20} src="/assets/svg/instagram.svg" alt="instagram" className="iconos-nav" /></Link>
                        </li>
                        <li className="mx-4">
                            <Link href=""><Image width={20} height={20} src="/assets/svg/globe.svg" alt="globe" className="iconos-nav" /></Link>
                        </li>
                    </ul>
                </Row>
            </div>
        </>
    )
}