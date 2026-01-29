"use client";

import { useState } from "react";
import Image from "next/image";

const certs = [
  {
    title: "Hackathon Unianchieta",
    image: "/certs/hackaton_unianchieta.jpg",
    description: "Projeto de App localizador de Clínicas e Hospitais próximos da sua Localização",
  },
  {
    title: "Bagagem Excel - Uniancheta",
    image: "/certs/certificado_excel.png",
    description: "Curso de aprofundamento em Excel proporcionado pelo Unianchieta",
  },
  {
    title: "Linguaskill - Certificado por Cambridge",
    image: "/certs/linguaskill_cambridge.jpg",
    description: "Certificado de Proficiência em Inglês, atestado em nível de uma média de B2 (Upper-Intermediate), com forte compreensão de leitura (C1) e boa comunicação oral (B2).",
  },
];

export default function Certifications() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <section id="certs" className="py-28 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Certificações e Outros</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {certs.map((cert, i) => (
            <button
              key={i}
              onClick={() => setSelected(cert)}
              className="text-left bg-zinc-900 rounded-2xl p-6 border border-zinc-800 hover:border-zinc-600 transition cursor-pointer"
            >
              <div className="relative w-full h-32 mb-4">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-contain"
                />
              </div>

              <h3 className="font-semibold text-lg mb-2">{cert.title}</h3>
              <p className="text-gray-400 text-sm">{cert.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-6"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative bg-zinc-900 p-6 rounded-2xl max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-white text-xl hover:text-gray-300"
            >
              ✕
            </button>

            <div className="relative w-full h-[70vh] mb-6">
              <Image
                src={selected.image}
                alt={selected.title}
                fill
                className="object-contain"
              />
            </div>

            <h3 className="text-2xl font-bold mb-2">{selected.title}</h3>
            <p className="text-gray-400">{selected.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}
