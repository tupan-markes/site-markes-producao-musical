'use client'

import React from "react"
import { Phone, Mail, Instagram, Youtube, Music2 } from "lucide-react"
import Link from "next/link"

export default function TupanMarkesPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Cabeçalho com logo, nome e redes sociais */}
      <header className="flex items-center justify-between px-4 py-4 max-w-6xl mx-auto mb-8">
        {/* Logo à esquerda */}
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M5 3v18l15-9L5 3z" />
          </svg>
          <h1 className="text-2xl font-bold">MARKES</h1>
          <span className="text-sm text-gray-500">Produção Musical</span>
        </div>

        {/* Nome centralizado */}
        <div className="flex-1 text-center">
          <h2 className="text-3xl font-extrabold text-orange-600">Tupan Markes</h2>
        </div>

        {/* Redes sociais à direita */}
        <div className="flex gap-4 items-center justify-end">
          <a href="https://www.instagram.com/tupanmarkes/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800" title="Instagram">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="https://www.youtube.com/@tupanmarkes" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800" title="YouTube">
            <Youtube className="w-6 h-6" />
          </a>
          <a href="https://www.tiktok.com/@tupanmarkes" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800" title="TikTok">
            <Music2 className="w-6 h-6" />
          </a>
          <a href="https://open.spotify.com/intl-pt/artist/5d4vrz2uodz6kGueGwABnJ?si=kVL9cuU3SLmjbWmhOpWO3w" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800" title="Spotify">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
              className="w-6 h-6 fill-current"
              preserveAspectRatio="xMidYMid meet"
            >
              <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm114.5 365.7c-5.3 8.4-16.7 11-25.1 5.7-69-42.3-156.2-51.9-259.2-28.8-9.6 2.2-19.2-3.8-21.4-13.4-2.3-9.6 3.8-19.2 13.4-21.4 112.4-25.4 210.3-14.1 287.2 33.1 8.3 5.3 10.9 16.6 5.1 24.8zM372 297.7c-6.5 10.5-20.3 13.9-30.8 7.4-59.3-36.7-149.8-47.3-219.4-26.2-11.3 3.4-23.2-2.9-26.6-14.3-3.4-11.3 2.9-23.2 14.3-26.6 82.5-24.8 183.1-13 251.5 30.5 10.3 6.6 13.3 20.4 6 29.2zM388.6 231c-71.3-43.8-189.9-47.7-261.4-26.4-13.2 3.9-27.2-3.5-31.1-16.7-3.9-13.2 3.5-27.2 16.7-31.1 84.2-25 217.6-20.4 298.2 29.6 12 7.3 15.8 23 8.5 35-7.3 12.1-23 15.9-35 8.6z" />
            </svg>
          </a>
        </div>
      </header>

      {/* Banner com imagem */}
      <div
        className="w-full h-[256px] bg-center bg-cover bg-no-repeat mb-12 rounded-xl max-w-6xl mx-auto"
        style={{ backgroundImage: "url('/imagens/banner/banner_tupanmarkes.jpg')" }}
      ></div>

      {/* Release */}
      <div className="mb-16 px-4 max-w-6xl mx-auto">
        <p className="text-2xl text-gray-800 text-justify leading-loose">
          Tupan Markes é sinônimo de presença de palco, música boa e carisma! Com um repertório eclético e um show pra cima que contagia o público do início ao fim, Tupan vem conquistando cada vez mais espaço na cena musical. Seu sucesso “Maria Fifi” já ultrapassou 300 mil players no Spotify, enquanto o Reels da música “Sentando no Colo do Pai” explodiu com mais de 1 milhão de visualizações no Instagram. Um artista completo, que mistura talento, versatilidade e energia em cada apresentação.
        </p>
      </div>

      {/* Reels */}
      <h2 className="text-2xl font-semibold mb-4 text-center">Reels do Instagram</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 px-4 max-w-6xl mx-auto">
        {[
          {
            video: "/imagens/reels/tupan_markes/reel1.mp4",
            link: "https://www.instagram.com/p/C2mRDK9s_FE/"
          },
          {
            video: "/imagens/reels/tupan_markes/reel2.mp4",
            link: "https://www.instagram.com/p/CuXRQKEArL_/"
          },
          {
            video: "/imagens/reels/tupan_markes/reel3.mp4",
            link: "https://www.instagram.com/p/CnNewJxKraj/"
          },
          {
            video: "/imagens/reels/tupan_markes/reel4.mp4",
            link: "https://www.instagram.com/p/CuPpcV8JaHJ/"
          }
        ].map((item, index) => (
          <a href={item.link} key={index} target="_blank" rel="noopener noreferrer">
            <video
              src={item.video}
              autoPlay
              muted
              loop
              playsInline
              className="w-full aspect-[9/16] rounded-xl object-cover"
            />
          </a>
        ))}
      </div>

      {/* Clipes YouTube */}
      <h2 className="text-2xl font-semibold mb-4 text-center">Clipes no YouTube</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 px-4 max-w-6xl mx-auto">
        {[
          {
            titulo: "Sentando no Colo do Pai",
            src: "https://www.youtube.com/embed/aCUxyZ7vRL8"
          },
          {
            titulo: "Eu Amo Piúma",
            src: "https://www.youtube.com/embed/waRTS4aQYRU"
          }
        ].map((video, index) => (
          <div key={index} className="flex flex-col">
            <iframe
              className="w-full aspect-video rounded-xl"
              src={video.src}
              title={video.titulo}
              allowFullScreen
            ></iframe>
            <p className="text-center text-lg font-medium text-gray-700 mt-2">
              {video.titulo}
            </p>
          </div>
        ))}
      </div>

      {/* Discografia */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-2xl font-semibold mb-4">🎵 Discografia</h2>
        <p className="text-lg text-gray-700 mb-4">Confira as músicas de Tupan Markes no Spotify:</p>
        <a
          href="https://open.spotify.com/intl-pt/artist/5d4vrz2uodz6kGueGwABnJ?si=kVL9cuU3SLmjbWmhOpWO3w"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-semibold"
        >
          Ouvir no Spotify
        </a>
      </div>

      {/* Contato */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-2xl font-semibold mb-4">Contato para shows</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <a
            href="https://wa.me/5528999338730"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl text-lg"
          >
            <Phone className="w-5 h-5" /> WhatsApp
          </a>
          <a
            href="mailto:markesproducaomusical@gmail.com"
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl text-lg"
          >
            <Mail className="w-5 h-5" /> E-mail
          </a>
        </div>
      </div>

      {/* Voltar */}
      <div className="text-center pb-10">
        <Link
          href="/"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg text-lg"
        >
          Voltar à página inicial
        </Link>
      </div>

      {/* Botão flutuante WhatsApp */}
      <a
        href="https://wa.me/5528999338730"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition transform hover:scale-110 animate-bounce"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="w-8 h-8"
          fill="white"
        >
          <path d="M380.9 97.1C339 55.3 284.7 32 224.6 32C103.2 32 0.5 134.8 0.5 256.2c0 45.4 11.8 89.6 34.2 128.5L0.1 480l98.7-33.1c36.4 19.9 77.4 30.4 119 30.4h0.1c121.3 0 224.1-102.8 224.1-224.2 0.1-60-23.3-116.2-65.1-155zM224.6 438.6c-35.2 0-69.8-9.4-100-27.1l-7.2-4.2-58.6 19.7 19.4-57-4.7-7.3c-20.8-32.6-31.7-70.3-31.7-108.5 0-111 90.5-201.6 201.7-201.6 53.8 0 104.3 20.9 142.3 58.8 37.9 37.9 58.8 88.4 58.7 142.3 0 111.1-90.6 201.9-201.9 201.9zm101.4-138.4c-5.6-2.8-33.1-16.3-38.3-18.2-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.4 18.2-17.6 21.9-3.2 3.7-6.5 4.2-12.1 1.4-33.1-16.5-54.8-29.5-76.6-66.6-5.8-10 5.8-9.3 16.5-30.9 1.8-3.7 0.9-6.9-0.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-0.2-6.9-0.2-10.5-0.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.4s19.9 53.9 22.6 57.6c2.8 3.7 38.9 59.4 94.3 83.3 13.2 5.7 23.4 9.1 31.4 11.6 13.2 4.2 25.2 3.6 34.7 2.2 10.6-1.6 33.1-13.5 37.8-26.6 4.6-13.1 4.6-24.3 3.2-26.5-1.2-2.3-5.1-3.7-10.7-6.5z" />
        </svg>
      </a>
    </div>
  )
}
