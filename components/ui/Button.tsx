import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-500"
      : "border border-white/15 bg-white/5 text-white hover:bg-white/10";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-xl px-6 py-3 font-medium transition-all duration-300 ${styles}`}
    >
      {children}
    </Link>
  );
}