import { ReactNode } from "react";
import Container from "./Container";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({
  id,
  children,
  className = "",
}: SectionProps) {
  return (
    <div className="relative overflow-hidden">
      <section
        id={id}
        className={`py-24 md:py-32 ${className}`}
      >
        <Container>{children}</Container>
      </section>
    </div>
  );
}