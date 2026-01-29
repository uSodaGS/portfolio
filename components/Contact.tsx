import { Mail, Linkedin, Github, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 bg-zinc-950 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Contato</h2>
        <p className="text-gray-400 mb-12 text-lg">
          Entre em contato comigo e me conheça melhor
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          <a
            href="mailto:gusilvadev@gmail.com"
            className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-zinc-600 transition"
          >
            <Mail className="mx-auto mb-4" size={32} />
            <p className="font-medium">Email</p>
            <p className="text-sm text-gray-400">Entre em contato: gusilvadev@gmail.com</p>
          </a>

          <a
            href="https://www.linkedin.com/in/gustavo-ribeiro-6015012a3"
            target="_blank"
            className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-zinc-600 transition"
          >
            <Linkedin className="mx-auto mb-4" size={32} />
            <p className="font-medium">LinkedIn</p>
            <p className="text-sm text-gray-400">Conecte-se Comigo</p>
          </a>

          <a
            href="https://github.com/uSodaGS"
            target="_blank"
            className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-zinc-600 transition"
          >
            <Github className="mx-auto mb-4" size={32} />
            <p className="font-medium">GitHub</p>
            <p className="text-sm text-gray-400">Projetos</p>
          </a>

          <a
            href="https://wa.me/+5511998000041"
            target="_blank"
            className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-zinc-600 transition"
          >
            <MessageCircle className="mx-auto mb-4" size={32} />
            <p className="font-medium">Telefone</p>
            <p className="text-sm text-gray-400">Entre Em Contato Diretamente</p>
          </a>
        </div>
      </div>
    </section>
  );
}
