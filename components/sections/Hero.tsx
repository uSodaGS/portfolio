import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import Motion from "@/components/ui/Motion";
import {
  FaReact,
  FaDocker,
  FaPython
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiPostgresql,
  SiTypescript
} from "react-icons/si";

export default function Hero() {
  return (
    <Section className="pt-36">
      <Motion>
      <div className="absolute left-0 top-20 -z-10 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-blue-400">
            Olá, eu sou
          </p>

          <h1 className="text-5xl font-extrabold leading-tight text-white md:text-7xl">
            Gustavo Ribeiro
          </h1>

          <h2 className="mt-4 text-2xl text-zinc-300">
            Desenvolvedor Full Stack
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
            Desenvolvo aplicações modernas, APIs escaláveis,
            automações inteligentes e soluções de dados utilizando
            tecnologias como React, Next.js, TypeScript e Python.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#projects">
              Ver Projetos
            </Button>

            <Button
              href="/cv/Gustavo_Ribeiro_CV.pdf"
              variant="secondary"
            >
              Download CV
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Badge>React</Badge>
            <Badge>Next.js</Badge>
            <Badge>TypeScript</Badge>
            <Badge>Python</Badge>
            <Badge>Docker</Badge>
            <Badge>PostgreSQL</Badge>
          </div>
        </div>

        <Card className="relative overflow-hidden flex items-center justify-center">

          <div className="
            absolute
            inset-0
            bg-blue-500/10
            blur-3xl
          "/>


          <div className="
            relative
            text-center
          ">

            <div className="
              mx-auto
              h-72
              w-72
              overflow-hidden
              rounded-full
              border
              border-blue-500/30
              shadow-2xl
              shadow-blue-500/20
            ">

              <img
                src="/img/profile_photo.jpeg"
                alt="Gustavo Ribeiro"
                className="
                  h-full
                  w-full
                  object-cover
                "
              />

            </div>


            <div className="
              mt-8
              space-y-2
            ">

              <p className="
                text-xl
                font-bold
                text-white
              ">
                Gustavo Ribeiro
              </p>


              <p className="
                text-blue-400
              ">
                Full Stack Developer
              </p>


              <p className="
                text-sm
                text-zinc-400
              ">
                Next.js • Python • Data
              </p>

            </div>


          </div>

        </Card>
      </div>
    </Motion>
    </Section>
  );
}