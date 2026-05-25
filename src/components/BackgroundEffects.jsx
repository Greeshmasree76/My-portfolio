export default function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-35" />
      <div className="absolute -left-28 top-16 h-96 w-96 rounded-full bg-pinkGlow/20 blur-[120px]" />
      <div className="absolute right-0 top-40 h-[32rem] w-[32rem] rounded-full bg-violetGlow/20 blur-[130px]" />
      <div className="absolute bottom-0 left-1/3 h-[28rem] w-[28rem] rounded-full bg-blueGlow/10 blur-[120px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(255,255,255,0.07),transparent_36%),linear-gradient(180deg,rgba(7,8,18,0.12),#070812_88%)]" />
    </div>
  );
}
