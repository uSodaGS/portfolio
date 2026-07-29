export default function Background() {
  return (
    <>
      <div className="fixed inset-0 -z-50 bg-[#09090B]" />

      <div className="fixed left-0 top-0 -z-40 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[160px]" />

      <div className="fixed right-0 bottom-0 -z-40 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[160px]" />

      <div
        className="fixed inset-0 -z-30 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
    </>
  );
}