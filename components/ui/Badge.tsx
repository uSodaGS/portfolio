import { ReactNode } from "react";

interface BadgeProps{
    children:ReactNode;
}

export default function Badge({children}:BadgeProps){

    return(

        <span className="
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-white/10
        bg-white/5
        px-4
        py-2
        text-sm
        text-zinc-300
        transition-all
        duration-300
        hover:border-blue-500/40
        hover:bg-blue-500/10
        hover:scale-105">

            {children}

        </span>

    )

}