import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}


export default function Card({
  children,
  className = "",
  onClick,
}: CardProps) {

  return (
    <div
      onClick={onClick}
      className={`
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
        backdrop-blur-sm
        transition-all
        duration-300
        hover:border-blue-500/30
        ${onClick ? "cursor-pointer" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}