interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mb-14">
      <h2 className="text-4xl font-bold tracking-tight text-white">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 max-w-2xl text-zinc-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}