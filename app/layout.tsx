import './globals.css'

export const metadata = {
  title: 'Markes Produção Musical',
  description: 'Site oficial da Markes Produção Musical',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-gray-800">{children}</body>
    </html>
  )
}