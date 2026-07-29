import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Motion from "@/components/ui/Motion";

import { experiences } from "@/data/experience";


export default function Experience() {
  return (
    <Section id="experience">

      <SectionTitle
        title="Experiência"
        subtitle="Minha trajetória profissional, projetos desenvolvidos e principais responsabilidades."
      />

      <Motion>
      <div className="relative mt-12 space-y-8">

        <div className="
          absolute
          left-5
          top-0
          h-full
          w-px
          bg-white/10
          md:left-1/2
        "/>


        {experiences.map((experience, index) => (

          <div
            key={experience.role}
            className={`
              relative
              flex
              md:justify-between
              ${
                index % 2 === 0
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
              }
            `}
          >

            <div className="hidden md:block md:w-[45%]" />


            <div className="
              absolute
              left-3
              top-8
              h-5
              w-5
              rounded-full
              border-4
              border-zinc-950
              bg-blue-500
              md:left-1/2
              md:-translate-x-1/2
            "/>


            <Card className="ml-12 md:ml-0 md:w-[45%]">

              <span className="text-sm text-blue-400">
                {experience.period}
              </span>


              <h3 className="
                mt-3
                text-2xl
                font-bold
                text-white
              ">
                {experience.role}
              </h3>


              <p className="mt-1 text-zinc-300">
                {experience.company}
              </p>


              <p className="
                mt-5
                leading-7
                text-zinc-400
              ">
                {experience.description}
              </p>


              <ul className="
                mt-5
                space-y-2
                text-sm
                text-zinc-400
              ">

                {experience.responsibilities.map((item) => (

                  <li key={item}>
                    ✓ {item}
                  </li>

                ))}

              </ul>


            </Card>


          </div>

        ))}

      </div>
      </Motion>
    </Section>
  );
}