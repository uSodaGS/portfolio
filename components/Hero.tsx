import Image from "next/image";
export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-black via-gray-900 to-black">
      <Image
        src="/img/profile_photo.jpeg"
        alt="Foto de Gustavo"
        width={350}
        height={350}
        className="rounded-full mb-10 border-4 border-white object-cover"
      />
      <h1 className="text-5xl font-bold tracking-tight">Gustavo Ribeiro</h1>
        <p className="mt-6 text-gray-400 max-w-xl text-lg">
          Estudante de Engenharia de Software | Python | SQL | Dados
        </p>

      <div className="mt-8 flex gap-4">
        <a
          href="#certs"
          className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
         >
          Certificações
        </a>

        <a
          href="#goals"
          className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
          >
          Objetivos
        </a>
      </div>
            
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          href="/cv/Gustavo_Ribeiro_CV.pdf"
          download
          className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:opacity-80 transition"
         >
          Baixar Currículo
        </a>

        <a
          href="#contact"
          className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:opacity-80 transition"
          >
          Entrar em Contato
        </a>
      </div>
    </section>
  )
}
