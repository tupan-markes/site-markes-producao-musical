'use client'

import React from 'react'
import { Phone, Mail, Instagram, Youtube, Play } from 'lucide-react'
import Link from 'next/link'

export default function TupanMarkesPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="px-4 py-8 max-w-6xl mx-auto">

        {/* Cabeçalho */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          {/* Logo + Nome */}
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-2">
              <Play className="text-orange-500 w-8 h-8" />
              <div className="text-center sm:text-left">
                <h1 className="text-2xl font-bold tracking-[0.4em] w-fit mx-auto sm:mx-0 leading-none">MARKES</h1>
                <span className="text-sm text-gray-500">Produção Musical</span>
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-orange-600 mt-4 sm:mt-2 text-center sm:text-left">
              Tupan Markes
            </h1>

            {/* Redes sociais no mobile */}
            <div className="flex justify-center sm:hidden gap-4 mt-4">
              <a href="https://www.instagram.com/tupanmarkes/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.youtube.com/@tupanmarkes" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="https://open.spotify.com/intl-pt/artist/5d4vrz2uodz6kGueGwABnJ" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 496 512" fill="currentColor">
                  <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121 365c-4 6-11 8-17 4-47-29-106-36-176-20-7 1-14-3-16-10s3-14 10-16c78-18 144-10 198 24 6 4 8 11 4 18zm24-61c-5 8-15 10-22 5-53-33-133-43-196-24-9 3-18-2-21-11s2-18 11-21c75-22 164-12 227 28 8 5 10 15 5 23zm2-65c-65-40-177-44-242-24-10 3-21-2-24-13s2-21 13-24c77-23 200-18 276 29 9 6 11 17 5 26s-17 11-26 6z" />
                </svg>
              </a>
              <a href="https://www.tiktok.com/@tupanmarkes" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 448 512" fill="currentColor">
                  <path d="M448,209.7V127.2c-25.3,0-49.7-5.3-72.4-15.3c-22.3-9.9-42.4-24.1-59.1-41.5c-16.7-17.5-30.2-38-39.8-60.1H256v316.1c0,28.2-22.9,51.2-51.2,51.2c-28.2,0-51.2-22.9-51.2-51.2c0-28.2,22.9-51.2,51.2-51.2c6.1,0,11.9,1.1,17.3,3.1V209.7c-5.7-.8-11.5-1.2-17.3-1.2c-66.2,0-120,53.8-120,120s53.8,120,120,120c66.2,0,120-53.8,120-120v-161.3c18.7,13.3,39.8,23.9,62.1,31.3c22.9,7.5,47.3,11.4,72.4,11.4Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Redes sociais desktop */}
          <div className="hidden sm:flex justify-end gap-4">
            <a href="https://www.instagram.com/tupanmarkes/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://www.youtube.com/@tupanmarkes" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800">
              <Youtube className="w-6 h-6" />
            </a>
            <a href="https://open.spotify.com/intl-pt/artist/5d4vrz2uodz6kGueGwABnJ" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 496 512" fill="currentColor">
                <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121 365c-4 6-11 8-17 4-47-29-106-36-176-20-7 1-14-3-16-10s3-14 10-16c78-18 144-10 198 24 6 4 8 11 4 18zm24-61c-5 8-15 10-22 5-53-33-133-43-196-24-9 3-18-2-21-11s2-18 11-21c75-22 164-12 227 28 8 5 10 15 5 23zm2-65c-65-40-177-44-242-24-10 3-21-2-24-13s2-21 13-24c77-23 200-18 276 29 9 6 11 17 5 26s-17 11-26 6z" />
              </svg>
            </a>
            <a href="https://www.tiktok.com/@tupanmarkes" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 448 512" fill="currentColor">
                <path d="M448,209.7V127.2c-25.3,0-49.7-5.3-72.4-15.3c-22.3-9.9-42.4-24.1-59.1-41.5c-16.7-17.5-30.2-38-39.8-60.1H256v316.1c0,28.2-22.9,51.2-51.2,51.2c-28.2,0-51.2-22.9-51.2-51.2c0-28.2,22.9-51.2,51.2-51.2c6.1,0,11.9,1.1,17.3,3.1V209.7c-5.7-.8-11.5-1.2-17.3-1.2c-66.2,0-120,53.8-120,120s53.8,120,120,120c66.2,0,120-53.8,120-120v-161.3c18.7,13.3,39.8,23.9,62.1,31.3c22.9,7.5,47.3,11.4,72.4,11.4Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Banner */}
        <div className="w-full h-[256px] bg-cover bg-center rounded-xl mb-8" style={{ backgroundImage: "url(/imagens/banner/banner_tupanmarkes.jpg)" }}></div>

        {/* Biografia */}
        <p className="text-lg text-gray-700 leading-relaxed text-justify px-2 mb-12 max-w-3xl mx-auto">
          <strong className="block text-center text-xl text-orange-600 mb-4">Tupan Markes é sinônimo de presença de palco, música boa e carisma!</strong>
          Com um repertório eclético e um show pra cima que contagia o público do início ao fim, Tupan vem conquistando cada vez mais espaço na cena musical.
          Seu sucesso “Maria Fifi” já ultrapassou 300 mil players no Spotify, enquanto o Reels da música “Sentando no Colo do Pai” explodiu com mais de 1 milhão de visualizações no Instagram.
          Um artista completo, que mistura talento, versatilidade e energia em cada apresentação.
        </p>

        {/* Reels Instagram */}
        <h2 className="text-2xl font-semibold mb-4">Reels do Instagram</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[1, 2, 3, 4].map((num) => (
            <a href="https://www.instagram.com/tupanmarkes/" key={num} target="_blank" rel="noopener noreferrer">
              <video
                src={`/imagens/reels/tupan_markes/reel${num}.mp4`}
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
        <h2 className="text-2xl font-semibold mb-4">Clipes no YouTube</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div>
            <iframe className="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/aCUxyZ7vRL8" title="Sentando no Colo do Pai" allowFullScreen></iframe>
            <p className="text-center text-sm mt-2 font-semibold text-gray-700">Sentando no Colo do Pai</p>
          </div>
          <div>
            <iframe className="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/waRTS4aQYRU" title="Eu Amo Piúma" allowFullScreen></iframe>
            <p className="text-center text-sm mt-2 font-semibold text-gray-700">Eu Amo Piúma</p>
          </div>
        </div>

        {/* Contato para shows */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-4">Contato para shows</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <a href="https://wa.me/5528999338730" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl text-lg">
              <Phone className="w-5 h-5" /> WhatsApp
            </a>
            <a href="mailto:markesproducaomusical@gmail.com" className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl text-lg">
              <Mail className="w-5 h-5" /> E-mail
            </a>
          </div>
        </div>

        {/* Voltar à home */}
        <div className="text-center pb-10">
          <Link href="/" className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg text-lg">
            Voltar à página inicial
          </Link>
        </div>

      </div>
    </div>
  )
}
