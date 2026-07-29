import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

import { technologies } from "@/data/technologies";


export default function Technologies() {
  return (
    <Section id="technologies">

      <SectionTitle
        title="Tecnologias"
        subtitle="Ferramentas e tecnologias que utilizo para desenvolver aplicações e soluções."
      />


      <div className="mt-12 grid gap-8 md:grid-cols-3">

        {technologies.map((group) => (

          <Card key={group.category}>

            <h3 className="
              text-xl
              font-bold
              text-white
            ">
              {group.category}
            </h3>


            <div className="mt-8 space-y-6">

              {group.items.map((tech) => (

                <div key={tech.name}>


                  <div className="
                    mb-2
                    flex
                    justify-between
                    text-sm
                  ">

                    <span className="text-zinc-300">
                      {tech.name}
                    </span>

                    <span className="text-blue-400">
                      {tech.level}%
                    </span>

                  </div>


                  <div className="
                    h-2
                    overflow-hidden
                    rounded-full
                    bg-white/10
                  ">

                    <div
                      className="
                        h-full
                        rounded-full
                        bg-blue-500
                      "
                      style={{
                        width: `${tech.level}%`,
                      }}
                    />

                  </div>


                </div>

              ))}

            </div>

          </Card>

        ))}

      </div>


    </Section>
  );
}