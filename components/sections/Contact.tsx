import {
  Mail,
  Linkedin,
  Github,
  MessageCircle,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";


export default function Contact() {
  return (
    <Section id="contact">


      <SectionTitle
        title="Contato"
        subtitle="Vamos conversar sobre projetos, oportunidades e novas ideias."
      />


      <div
        className="
          mt-12
          grid
          gap-6
          sm:grid-cols-2
          lg:grid-cols-4
        "
      >


        <Card className="
          text-center
          transition-all
          hover:-translate-y-1
        ">

          <a
            href="mailto:gusilvadev@gmail.com"
          >

            <Mail
              className="
                mx-auto
                mb-4
                text-blue-400
              "
              size={32}
            />

            <h3 className="
              font-semibold
              text-white
            ">
              Email
            </h3>


            <p className="
              mt-2
              text-sm
              text-zinc-400
            ">
              gusilvadev@gmail.com
            </p>

          </a>

        </Card>



        <Card className="
          text-center
          transition-all
          hover:-translate-y-1
        ">

          <a
            href="https://www.linkedin.com/in/gustavo-ribeiro-6015012a3"
            target="_blank"
            rel="noopener noreferrer"
          >

            <Linkedin
              className="
                mx-auto
                mb-4
                text-blue-400
              "
              size={32}
            />


            <h3 className="
              font-semibold
              text-white
            ">
              LinkedIn
            </h3>


            <p className="
              mt-2
              text-sm
              text-zinc-400
            ">
              Conecte-se comigo
            </p>

          </a>

        </Card>




        <Card className="
          text-center
          transition-all
          hover:-translate-y-1
        ">


          <a
            href="https://github.com/uSodaGS"
            target="_blank"
            rel="noopener noreferrer"
          >

            <Github
              className="
                mx-auto
                mb-4
                text-blue-400
              "
              size={32}
            />


            <h3 className="
              font-semibold
              text-white
            ">
              GitHub
            </h3>


            <p className="
              mt-2
              text-sm
              text-zinc-400
            ">
              Meus projetos
            </p>

          </a>


        </Card>




        <Card className="
          text-center
          transition-all
          hover:-translate-y-1
        ">


          <a
            href="https://wa.me/+5511998000041"
            target="_blank"
            rel="noopener noreferrer"
          >

            <MessageCircle
              className="
                mx-auto
                mb-4
                text-blue-400
              "
              size={32}
            />


            <h3 className="
              font-semibold
              text-white
            ">
              WhatsApp
            </h3>


            <p className="
              mt-2
              text-sm
              text-zinc-400
            ">
              Fale diretamente comigo
            </p>


          </a>


        </Card>



      </div>


    </Section>
  );
}