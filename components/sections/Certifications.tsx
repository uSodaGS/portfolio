"use client";

import { useState } from "react";

import Image from "next/image";

import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Modal from "@/components/ui/Modal";

import { certifications } from "@/data/certifications";

type Certification = typeof certifications[number];



export default function Certifications() {
  const [selected, setSelected] = 
    useState<Certification | null>(null);

  return (
    <Section id="certifications">

      <SectionTitle
        title="Certificações"
        subtitle="Certificados e conhecimentos adquiridos ao longo da minha trajetória."
      />


      <div className="
        mt-12
        grid
        gap-8
        md:grid-cols-3
      ">


        {certifications.map((certification) => (

          <Card
            key={certification.title}
            onClick={() => setSelected(certification)}
            className="
              cursor-pointer
              overflow-hidden
              p-0
            "
          >


            <div className="
              relative
              h-56
              overflow-hidden
            ">

              <Image
                src={certification.image}
                alt={certification.title}
                fill
                className="
                  object-cover
                  transition-transform
                  duration-500
                  hover:scale-105
                "
              />

            </div>



            <div className="p-6">


              <h3 className="
                text-xl
                font-bold
                text-white
              ">
                {certification.title}
              </h3>


              <p className="
                mt-2
                text-sm
                text-blue-400
              ">
                {certification.institution}
              </p>


              <p className="
                mt-4
                text-sm
                leading-6
                text-zinc-400
              ">
                {certification.description}
              </p>


            </div>


          </Card>

        ))}


      </div>
      <Modal
        open={!!selected}
        onClose={() => setSelected(null)}
      >

        {selected && (

          <div className="space-y-6">


            <div className="
              relative
              h-[400px]
              w-full
            ">

              <Image
                src={selected.image}
                alt={selected.title}
                fill
                className="
                  rounded-2xl
                  object-contain
                "
              />

            </div>



            <div>

              <h3 className="
                text-3xl
                font-bold
                text-white
              ">
                {selected.title}
              </h3>


              <p className="
                mt-2
                text-blue-400
              ">
                {selected.institution}
              </p>


              <p className="
                mt-5
                leading-7
                text-zinc-400
              ">
                {selected.description}
              </p>

            </div>


          </div>

        )}

      </Modal>
    </Section>
  );
}