import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CAMERA_TOP = "63%";
const CAMERA_LEFT = "74%";
const TORCH_RADIUS = 190;

export default function SeminterratoPage() {
  const [revealed, setRevealed] = useState(false);
  const [found, setFound] = useState(false);
  const [pointer, setPointer] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setRevealed(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    setPointer({ x: e.clientX, y: e.clientY });
  }

  function handleCameraFound() {
    setFound(true);
  }

  const torchX = pointer?.x ?? window.innerWidth / 2;
  const torchY = pointer?.y ?? window.innerHeight / 2;

  return (
    <div
      onPointerMove={revealed ? handlePointerMove : undefined}
      className="relative min-h-screen overflow-hidden bg-cover bg-center transition-[filter] duration-1000"
      style={{
        backgroundColor: "#0a0e0d",
        backgroundImage: revealed ? "url('/images/seminterrato.png')" : undefined,
        touchAction: revealed ? "none" : undefined,
        filter: found
          ? "sepia(1) hue-rotate(70deg) saturate(4) brightness(0.9)"
          : undefined,
      }}
    >
      {!revealed && (
        <div className="flex min-h-screen items-center justify-center">
          <p className="text-xs uppercase" style={{ color: "#e7e2d3", letterSpacing: "0.1em" }}>
            Fa freddo, qui sotto.
          </p>
        </div>
      )}

      {revealed && (
        <>
          <button
            type="button"
            aria-label="Un oggetto nascosto nella stanza"
            onClick={handleCameraFound}
            className="absolute"
            style={{
              top: CAMERA_TOP,
              left: CAMERA_LEFT,
              width: 40,
              height: 40,
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" width="100%" height="100%">
              <rect x="2" y="6" width="14" height="11" rx="2" stroke="#2b2f2c" strokeWidth="1.5" />
              <path d="M16 9.5l5-3v11l-5-3z" stroke="#2b2f2c" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
          </button>

          <div
            className="fixed inset-0 transition-opacity duration-1000"
            style={{
              opacity: found ? 0 : 1,
              pointerEvents: "none",
              zIndex: 50,
              background: `radial-gradient(circle ${TORCH_RADIUS}px at ${torchX}px ${torchY}px, transparent 0%, rgba(10,14,13,0.95) 55%, #0a0e0d 100%)`,
            }}
          />

          {!found && pointer === null && (
            <p
              className="pointer-events-none fixed inset-x-0 bottom-12 text-center text-xs uppercase"
              style={{ color: "#e7e2d3", letterSpacing: "0.1em", zIndex: 60 }}
            >
              Muovi per illuminare
            </p>
          )}

          {found && (
            <>
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  opacity: 0.15,
                  backgroundImage:
                    "repeating-linear-gradient(0deg, #e7e2d3 0px, #e7e2d3 1px, transparent 1px, transparent 3px)",
                }}
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at center, transparent 40%, rgba(10,14,13,0.85) 100%)",
                }}
              />
              <span
                className="rec-dot absolute flex items-center gap-2 text-xs font-semibold"
                style={{ top: "6%", left: "6%", color: "#6e0e1a", letterSpacing: "0.3em" }}
              >
                <span
                  className="inline-block h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: "#6e0e1a" }}
                />
                REC
              </span>

              <Link
                to="/"
                className="absolute text-xs font-medium uppercase"
                style={{
                  bottom: "8%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  color: "#e7e2d3",
                  letterSpacing: "0.2em",
                }}
              >
                Torna alla luce
              </Link>
            </>
          )}
        </>
      )}
    </div>
  );
}
