'use client'

import React from "react";
import Link from "next/link";

export default function BandaSantarensPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl font-bold text-orange-600 mb-4">Banda Santarens</h1>
      <p className="text-lg text-gray-600 mb-8">Página em construção</p>

      <Link
        href="/"
        className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg text-lg"
      >
        Voltar à página principal
      </Link>
    </div>
  )
}
