'use client';
import "./globals.css"
import { Contacto } from './components/contacto/Contacto'
import { Cursos } from './components/cursos/Cursos'
import { Divisor } from './components/divisor/Divisor'
import { Footer } from './components/footer/Footer';
import { Index } from './components/index/Index'
import { Navbar } from './components/navBar/NavBar';
import { NoticiasFrescas } from './components/noticiasFrescas/NoticiasFrescas'
import { Chat } from "./components/chat/Chat";

export default function Home() {
  return (
    <>
      <header >
        <Navbar className="w-100"/>
      </header>
      <main >
        <Chat/>
        <section id="inicio">
          <Index />
        </section>
        <section id="cursos">
          <Cursos />
        </section>
        <Divisor divisor={["yellow-bear", "yellow-arrows"]} section="noticias-frescas" />
        <section id="noticias-frescas">
          <NoticiasFrescas />
        </section>
        <Divisor divisor={["white-arrows", "white-smile"]} section="cursos" />
        <section id="contacto">
          <Contacto />
        </section>
      </main >
      <footer>
        <Footer />
      </footer>
    </>
  )
}
