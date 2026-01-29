export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-black/80 backdrop-blur border-b border-white/10 z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <span className="font-bold text-white">Gustavo Ribeiro | Portfólio</span>

        <div className="space-x-6 text-sm text-gray-300">
          <a href="#about" className="hover:text-white transition">Sobre</a>
          <a href="#certs" className="hover:text-white transition">Certificações</a>
          <a href="#goals" className="hover:text-white transition">Objetivos</a>
          <a href="#contact" className="hover:text-white transition">Contato</a>
        </div>
      </nav>
    </header>
  )
}
