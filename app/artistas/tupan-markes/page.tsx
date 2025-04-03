'use client'

import React from "react"
import { Phone, Mail, Instagram, Youtube, Music2 } from "lucide-react"
import Link from "next/link"

export default function TupanMarkesPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Cabeçalho com logo, nome e redes sociais */}
      <header className="flex flex-col items-center md:flex-row md:items-center justify-between px-4 py-4 max-w-6xl mx-auto mb-8 gap-4 text-center md:text-left">
        {/* Logo e nome à esquerda (centralizado no mobile) */}
        <div className="flex items-center gap-2 whitespace-nowrap">
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

        {/* Redes sociais à direita (centralizado no mobile) */}
        <div className="flex gap-4 items-center justify-center md:justify-end">
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
