'use client'

import React from 'react'
import { Phone, Mail, Instagram, Youtube } from 'lucide-react'
import Link from 'next/link'

export default function TupanMarkesPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="px-4 py-8 max-w-6xl mx-auto">

        {/* Cabeçalho */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          {/* Logo */}
          <div className="flex flex-col items-center sm:items-start">
            <img
              src="/imagens/logo/logo_markes_producao_musical.png"
              alt="Logo Markes Produção Musical"
              className="w-48 h-auto mb-2"
            />

            {/* Nome do artista */}
            <h1 className="text-3xl sm:text-4xl font-bold text-orange-600 mt-2 sm:mt-0 text-center sm:text-left">
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

        {/* (continua com o restante da página normalmente) */}
