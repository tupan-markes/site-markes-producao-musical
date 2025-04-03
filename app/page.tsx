'use client'

import React from 'react'
import { Instagram, Youtube, Music2, Spotify, Phone, Mail } from 'lucide-react'
import Link from 'next/link'

export default function TupanMarkesPage() {
  const reels = [
    {
      link: 'https://www.instagram.com/p/C2mRDK9s_FE/',
      video: '/imagens/reels/tupan_markes/reel1.mp4',
    },
    {
      link: 'https://www.instagram.com/p/CuXRQKEArL_/',
      video: '/imagens/reels/tupan_markes/reel2.mp4',
    },
    {
      link: 'https://www.instagram.com/p/CnNewJxKraj/',
      video: '/imagens/reels/tupan_markes/reel3.mp4',
    },
    {
      link: 'https://www.instagram.com/p/CuPpcV8JaHJ/',
      video: '/imagens/reels/tupan_markes/reel4.mp4',
    },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* TOPO */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-2 mb-2 md:mb-0">
            <div className="text-orange-500 text-3xl font-bold -mt-1">▶</div>
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold tracking-[0.35em] md:tracking-[0.45em]">MARKES</span>
              <span className="text-sm text-gray-500 -mt-1 ml-1">Produção Musical</span>
            </div>
          </div>

          {/* NOME E REDES */}
          <div className="flex flex-col md:flex-row md:items-center md:gap-4 text-center md:text-left">
            <h1 className="text-3xl font-bold text-orange-600 mb-2 md:mb-0">Tupan Markes</h1>
            <div className="flex justify-center md:justify-start gap-4 text-orange-600 text-xl">
              <a href="https://www.instagram.com/tupanmarkes/" target="_blank" rel="noopener noreferrer"><Instagram /></a>
              <a href="https://www.youtube.com/@tupanmarkes" target="_blank" rel="noopener noreferrer"><Youtube /></a>
              <a href="https://open.spotify.com/intl-pt/artist/5d4vrz2uodz6kGueGwABnJ?si=kVL9cuU3SLmjbWmhOpWO3w" target="_blank" rel="noopener noreferrer"><Spotify /></a>
              <a href="https://www.tiktok.com/@tupanmarkes" target="_blank" rel="noopener noreferrer"><Music2 /></a>
            </div>
          </div>
        </div>
      </div>

      {/* BANNER */}
      <div className="max-w-4xl mx-auto px-4 mb-6">
        <img
          src="/imagens/banner/banner_tupanmarkes.jpg"
          alt="Banner Tupan Markes"
          className="w-full rounded-xl object-cover"
        />
      </div>

      {/* TEXTO DESTAQUE */}
      <div className="max-w-3xl mx-auto px-4 mb-10 text-justify">
        <h2 className="text-orange-600 text-lg font-bold text-center mb-4">
          Tupan Markes é sinônimo de presença de palco, música boa e carisma!
        </h2>
        <p className="text-base leading-relaxed text-gray-700">
          Com um repertório eclético e um show pra cima que contagia o público do início ao fim,
          Tupan vem conquistando cada vez mais espaço na cena musical. Seu sucesso “Maria Fifi” já
          ultrapassou 300 mil players no Spotify, enquanto o Reels da música “Sentando no Colo do Pai”
          explodiu com mais de 1 milhão de visualizações no Instagram. Um artista completo, que mistura talento,
          versatilidade e energia em cada apresentação.
        </p>
      </div>

      {/* REELS */}
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <h3 className="text-2xl font-semibold mb-4">Reels do Instagram</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {reels.map((item, index) => (
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
      </div>

      {/* CLIPES */}
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <h3 className="text-2xl font-semibold mb-4">Clipes no YouTube</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <iframe
              className="w-full aspect-video rounded-xl"
              src="https://www.youtube.com/embed/aCUxyZ7vRL8"
              title="Sentando no Colo do Pai"
              allowFullScreen
            ></iframe>
            <p className="mt-2 font-medium text-gray-700">Sentando no Colo do Pai</p>
          </div>
          <div>
            <iframe
              className="w-full aspect-video rounded-xl"
              src="https://www.youtube.com/embed/waRTS4aQYRU"
              title="Eu Amo Piúma"
              allowFullScreen
            ></iframe>
            <p className="mt-2 font-medium text-gray-700">Eu Amo Piúma</p>
          </div>
        </div>
      </div>

      {/* CONTATO */}
      <div className="max-w-4xl mx-auto text-center mb-12 px-4">
        <h3 className="text-2xl font-semibold mb-4">Contato para shows</h3>
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

      {/* VOLTAR */}
      <div className="text-center pb-10">
        <Link
          href="/"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg text-lg"
        >
          Voltar à página inicial
        </Link>
      </div>
    </div>
  )
}
