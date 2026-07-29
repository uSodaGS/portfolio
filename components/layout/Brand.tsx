export default function Brand() {
  return (
    <a
      href="#"
      className="flex items-center gap-3 transition-opacity hover:opacity-80"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 font-bold text-white shadow-lg shadow-blue-600/20">
        GR
      </div>

      <div className="leading-tight">
        <p className="text-sm text-zinc-400">
          Desenvolvedor Full Stack
        </p>

        <h1 className="font-semibold text-white">
          Gustavo Ribeiro
        </h1>
      </div>
    </a>
  );
}