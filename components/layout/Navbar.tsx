"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import Brand from "./Brand";
import { navigation } from "@/data/navigation";


export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  useEffect(() => {

    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }


    window.addEventListener(
      "scroll",
      handleScroll
    );


    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };

  }, []);



  function closeMenu() {
    setMenuOpen(false);
  }



  return (

    <header
      className={`
        fixed
        top-0
        z-50
        w-full
        transition-all
        duration-300

        ${
          scrolled || menuOpen
            ? "border-b border-white/10 bg-[#09090B]/90 backdrop-blur-xl"
            : "bg-transparent"
        }
      `}
    >

      <div className="
        mx-auto
        flex
        h-20
        max-w-7xl
        items-center
        justify-between
        px-6
      ">


        <Brand />


        {/* Desktop */}

        <nav className="
          hidden
          items-center
          gap-8
          md:flex
        ">

          {navigation.map((item) => (

            <a
              key={item.name}
              href={item.href}
              className="
                text-sm
                text-zinc-400
                transition-colors
                hover:text-white
              "
            >
              {item.name}
            </a>

          ))}

        </nav>



        <div className="
          hidden
          items-center
          gap-4
          md:flex
        ">

          <a
            href="/cv/Gustavo_Ribeiro_CV.pdf"
            target="_blank"
            className="
              rounded-xl
              bg-blue-600
              px-5
              py-3
              text-sm
              font-medium
              text-white
              transition-all
              hover:bg-blue-500
            "
          >
            Download CV
          </a>

        </div>



        {/* Mobile button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            rounded-lg
            border
            border-white/10
            p-2
            text-zinc-300
            md:hidden
          "
          aria-label="Abrir menu"
        >

          {menuOpen ? (
            <X size={24}/>
          ) : (
            <Menu size={24}/>
          )}

        </button>


      </div>



      {/* Mobile menu */}

      {menuOpen && (

        <div className="
          border-t
          border-white/10
          bg-[#09090B]/95
          px-6
          py-6
          backdrop-blur-xl
          md:hidden
        ">


          <nav className="
            flex
            flex-col
            gap-5
          ">


            {navigation.map((item) => (

              <a
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className="
                  text-zinc-300
                  transition-colors
                  hover:text-white
                "
              >
                {item.name}
              </a>

            ))}



            <a
              href="/cv/Gustavo_Ribeiro_CV.pdf"
              target="_blank"
              className="
                mt-3
                rounded-xl
                bg-blue-600
                px-5
                py-3
                text-center
                font-medium
                text-white
              "
            >
              Download CV
            </a>


          </nav>


        </div>

      )}


    </header>

  );
}