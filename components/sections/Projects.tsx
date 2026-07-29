import Image from "next/image";

import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

import { projects } from "@/data/projects";


export default function Projects() {

  return (

    <Section id="projects">


      <SectionTitle
        title="Projetos"
        subtitle="Algumas soluções que desenvolvi envolvendo aplicações web, automações e engenharia de dados."
      />



      <div className="
        mt-12
        grid
        gap-8
        md:grid-cols-2
      ">


        {projects.map((project) => (

          <Card
            key={project.title}
            className="overflow-hidden p-0"
          >


            <div className="
              relative
              h-56
              w-full
              overflow-hidden
            ">

              <Image
                src={project.image}
                alt={project.title}
                fill
                className="
                  object-cover
                  transition-transform
                  duration-500
                  hover:scale-105
                "
              />


            </div>



            <div className="p-8">


              <span className="
                text-sm
                text-blue-400
              ">
                {project.status}
              </span>



              <h3 className="
                mt-3
                text-2xl
                font-bold
                text-white
              ">
                {project.title}
              </h3>



              <p className="
                mt-4
                leading-7
                text-zinc-400
              ">
                {project.description}
              </p>



              <div className="
                mt-5
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-4
              ">

                <p className="
                  text-sm
                  text-zinc-300
                ">
                  {project.highlight}
                </p>


              </div>



              <div className="
                mt-6
                flex
                flex-wrap
                gap-2
              ">

                {project.technologies.map((tech) => (

                  <span
                    key={tech}
                    className="
                      rounded-full
                      border
                      border-blue-500/20
                      bg-blue-500/10
                      px-3
                      py-1
                      text-xs
                      text-blue-300
                    "
                  >
                    {tech}
                  </span>

                ))}


              </div>


            </div>


          </Card>


        ))}


      </div>


    </Section>

  );
}