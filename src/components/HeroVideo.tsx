import { GoldDust } from "./GoldDust";

export function HeroVideo({
  src,
  poster,
  overlay = "from-charcoal/75 via-charcoal/35 to-charcoal/20",
}: {
  src: string;
  poster: string;
  overlay?: string;
}) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full scale-105 object-cover motion-safe:animate-slow-zoom"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        aria-hidden="true"
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className={`absolute inset-0 bg-linear-to-t ${overlay}`} />
      <GoldDust />
    </div>
  );
}
