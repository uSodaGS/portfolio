"use client";

import { ReactNode } from "react";
import { X } from "lucide-react";


interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}


export default function Modal({
  open,
  onClose,
  children,
}: ModalProps) {


  if (!open) return null;


  return (

    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/70
        px-6
        backdrop-blur-sm
      "
      onClick={onClose}
    >


      <div
        className="
          relative
          max-h-[90vh]
          w-full
          max-w-3xl
          overflow-y-auto
          rounded-3xl
          border
          border-white/10
          bg-[#09090B]
          p-8
        "
        onClick={(e) => e.stopPropagation()}
      >


        <button
          onClick={onClose}
          className="
            absolute
            right-5
            top-5
            rounded-full
            border
            border-white/10
            p-2
            text-zinc-400
            hover:text-white
          "
        >

          <X size={20}/>

        </button>


        {children}


      </div>


    </div>

  );
}