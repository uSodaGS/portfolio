import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

import { about } from "@/data/about";


export default function About() {

  return (
    <Section id="about">


      <SectionTitle
        title="Sobre mim"
        subtitle="Conheça um pouco da minha trajetória e da forma como desenvolvo soluções."
      />



      <div className="
        mt-12
        grid
        gap-8
        lg:grid-cols-3
      ">


        <Card className="
          lg:col-span-2
        ">


          <div className="
            space-y-5
            text-lg
            leading-8
            text-zinc-400
          ">

            <p>
              {about.description}
            </p>


            <p>
              {about.secondParagraph}
            </p>

          </div>


        </Card>



        <div className="
          grid
          gap-5
        ">


          {about.stats.map((stat) => (

            <Card key={stat.label}>


              <p className="
                text-3xl
                font-bold
                text-white
              ">
                {stat.value}
              </p>


              <span className="
                mt-2
                block
                text-sm
                text-zinc-400
              ">
                {stat.label}
              </span>


            </Card>

          ))}


        </div>


      </div>


    </Section>
  );
}