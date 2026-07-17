export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9998] flex items-center justify-center bg-[var(--bg-void)]">
      <div className="relative h-16 w-16">
        <div className="absolute inset-0 animate-spin-slow rounded-full border-2 border-transparent border-t-aurora-violet border-r-aurora-cyan" />
        <div className="absolute inset-2 animate-pulse-glow rounded-full bg-gradient-to-br from-aurora-violet/40 to-aurora-cyan/40 blur-sm" />
      </div>
    </div>
  );
}
