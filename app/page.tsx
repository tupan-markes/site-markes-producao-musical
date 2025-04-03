'use client'

import React from 'react'
import { Play } from 'lucide-react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Home() {
  const noticias = [
    {
      imagem: '/imagens/materias/noticia_01.png',
      link: 'https://radarcapixaba.com.br/davi-garcindo-da-essencia-do-pagode-ao-impulso-da-cultura-musical-no-sul-do-estado/',
      titulo: 'Davi Garcindo: Da essência do Pagode ao Impulso da Cultura Musical no Sul do Estado',
    },
    {
      imagem: '/imagens/materias/noticia_02.png',
      link: 'https://www.youtube.com/watch?v=aCUxyZ7vRL8',
      titulo: 'Tupan Markes Lança Música no Youtube chamada sentando no colo do pai',
    },
    {
      imagem: '/imagens/materias/noticia_03.png',
      link: 'https://www.noticiacapixaba.com/banda-santarens-eletrico-promete-agitar-por-onde-passar-e-2025-promete-muita-alegria-e-agitacao-no-es/',
      titulo: 'Banda Santarens Elétrico promete agitar por onde passar, e 2025 promete muita alegria e agitação no ES',
    },
    {
      imagem: '/imagens/materias/noticia_04.png',
      link: 'https://www.instagram.com/marata_news/p/DFpn-D6uC8m/',
      titulo: 'É de Marataízes: ex-vocalista do Bonde do Forró e Djavú é a nova cantora da Banda KS10',
    },
    {
      imagem: '/imagens/materias/noticia_05.png',
      link: 'https://www.youtube.com/watch?v=aoU8V7s4BvE',
      titulo: 'Luiz Show Lança Clipe no Youtube com a Música 10 Negativos',
    },
  ]

  const artistas = [
    { nome: 'Tupan Markes', genero: 'Forró / Piseiro', slug: 'tupan-markes' },
    { nome: 'Banda KS10', genero: 'Axé', slug: 'banda-ks10' },
    { nome: 'Banda Santarens', genero: 'Forró / Piseiro', slug: 'banda-santarens' },
    { nome: 'Davi Garcindo', genero: 'Pagode', slug: 'davi-garcindo' },
    { nome: 'Luiz Show', genero: 'Forró / Piseiro', slug: 'luiz-show' },
    { nome: 'DJ Robson Leadro', genero: 'Funk', slug: 'dj-robson-leadro' },
    { nome: 'DJ João Vianna', genero: 'Funk', slug: 'dj-joao-vianna' },
    { nome: 'Wemerson Araújo', genero: 'Forró / Piseiro', slug: 'wemerson-araujo' },
  ]

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    cssEase: 'linear',
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
    ],
  }

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="flex items-center justify-between p-4 shadow-md sticky top-0 bg-white z-50">
        <div className="flex items-center gap-2">
          <Play className="text-orange-500 w-8 h-8" />
          <h1 className="text-2xl font-bold whitespace-nowrap">MARKES</h1>
          <span className="text-sm text-gray-500 whitespace-nowrap">Produção Musical</span>
        </div>
        <nav className="hidden md:flex items-center gap-4 text-sm">
          <a href="#" className="hover:text-orange-500">Início</a>
          <a href="#sobre" className="hover:text-orange-500">Sobre</a>
          <a href="#agenda" className="hover:text-orange-500">Agenda</a>
          <a href="#videos" className="hover:text-orange-500">Vídeos</a>
          <a href="#contato">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg">Contrate</button>
          </a>
        </nav>
      </header>


      <section className="text-center py-32 px-4 bg-orange-100">
        <h2 className="text-5xl font-bold mb-4">A música que nos move</h2>
        <p className="text-xl text-gray-600 mb-8">Produzindo talentos e shows inesquecíveis</p>
        <a href="#artistas">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg rounded-xl">Conheça nossos artistas</button>
        </a>
      </section>

      <section className="bg-orange-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8">📰 Notícias da Markes Produção Musical</h3>
          <Slider {...sliderSettings}>
            {noticias.map((item, index) => (
              <div key={index} className="px-2">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={item.imagem}
                    alt="Notícia"
                    className="rounded-xl shadow-lg w-full h-64 object-cover transition-transform duration-300 hover:scale-105 active:scale-105"
                  />
                  <p className="text-sm mt-2 font-semibold text-center text-gray-700">{item.titulo}</p>
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section id="artistas" className="py-20 px-4 max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold text-center mb-12">🎤 Nossos Artistas</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {artistas.map((artista, index) => (
            <a
              key={index}
              href={`/artistas/${artista.slug}`}
              className="aspect-[9/16] bg-gray-100 rounded-xl shadow hover:shadow-lg p-4 flex flex-col justify-end items-center text-center transition-transform duration-300 hover:scale-105 active:scale-105 hover:bg-orange-50"
            >
              {artista.slug === 'tupan-markes' ? (
                <img
                  src="/imagens/artistas/Tupan_Markes.jpg"
                  alt="Tupan Markes"
                  className="w-full h-full object-cover rounded mb-4"
                />
              ) : (
                <div className="w-full h-full bg-gray-300 flex items-center justify-center rounded mb-4">
                  <span className="text-center font-bold text-xl text-gray-600">{artista.nome}</span>
                </div>
              )}
              <h4 className="text-lg font-semibold mb-1 text-orange-600 hover:underline">{artista.nome}</h4>
              <p className="text-sm text-gray-500">{artista.genero}</p>
            </a>
          ))}
        </div>
      </section>

      <section id="contato" className="text-center py-20 px-4 bg-gray-100">
        <h3 className="text-4xl font-bold mb-4">Quer contratar um show?</h3>
        <p className="text-lg mb-6 text-gray-600">Fale com nossa equipe pelo WhatsApp ou e-mail</p>
        <a href="https://wa.me/5528999338730" target="_blank" rel="noopener noreferrer">
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 text-lg rounded-xl font-semibold">Fale conosco</button>
        </a>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-10 px-4 text-center">
        <p className="text-sm">© {new Date().getFullYear()} Markes Produção Musical</p>
      </footer>

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
