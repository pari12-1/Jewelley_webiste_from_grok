export function GoldDust() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden" aria-hidden="true">
      {Array.from({ length: 18 }, (_, i) => (
        <span
          key={i}
          className="gold-mote absolute rounded-full bg-gold-light/40"
          style={{
            left: `${(i * 17 + 8) % 100}%`,
            bottom: `${(i * 11) % 40}%`,
            width: i % 3 === 0 ? 3 : 2,
            height: i % 3 === 0 ? 3 : 2,
            animationDelay: `${i * 0.45}s`,
            animationDuration: `${8 + (i % 5)}s`,
          }}
        />
      ))}
    </div>
  );
}
