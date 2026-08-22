import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CAMERA_MOBILE_TOP = "54%";
const CAMERA_MOBILE_LEFT = "74%";
const CAMERA_TABLET_TOP = "57%";
const CAMERA_TABLET_LEFT = "64%";
const CAMERA_DESKTOP_TOP = "59%";
const CAMERA_DESKTOP_LEFT = "72%";

const TORCH_RADIUS = 190;
const TORCH_RADIUS_MOBILE = 110;
const NIGHT_VISION_FILTER = "sepia(1) hue-rotate(70deg) saturate(4) brightness(1.4)";

export default function SeminterratoPage() {
  const { t } = useTranslation();
  const [revealed, setRevealed] = useState(false);
  const [found, setFound] = useState(false);
  const [pointer, setPointer] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setRevealed(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  function handlePointerMove(e: React.PointerEvent<HTMLElement>) {
    setPointer({ x: e.clientX, y: e.clientY });
  }

  function handleCameraFound() {
    setFound(true);
  }

  const torchX = pointer?.x ?? window.innerWidth / 2;
  const torchY = pointer?.y ?? window.innerHeight / 2;
  const torchRadius = window.innerWidth < 640 ? TORCH_RADIUS_MOBILE : TORCH_RADIUS;

  return (
    <main
      onPointerMove={revealed ? handlePointerMove : undefined}
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundColor: "#0a0e0d",
        touchAction: revealed ? "none" : undefined,
      }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-[filter] duration-1000 sm:hidden"
        style={{
          backgroundImage: revealed ? "url('/images/seminterrato_mobile.jfif')" : undefined,
          filter: found ? NIGHT_VISION_FILTER : undefined,
        }}
      />
      <div
        className="absolute inset-0 hidden bg-cover bg-center transition-[filter] duration-1000 sm:portrait:block"
        style={{
          backgroundImage: revealed ? "url('/images/seminterrato_mobile.jfif')" : undefined,
          filter: found ? NIGHT_VISION_FILTER : undefined,
        }}
      />
      <div
        className="absolute inset-0 hidden bg-cover bg-center transition-[filter] duration-1000 sm:landscape:block lg:landscape:hidden"
        style={{
          backgroundImage: revealed ? "url('/images/seminterrato_tablet.jfif')" : undefined,
          filter: found ? NIGHT_VISION_FILTER : undefined,
        }}
      />
      <div
        className="absolute inset-0 hidden bg-cover bg-center transition-[filter] duration-1000 lg:landscape:block"
        style={{
          backgroundImage: revealed ? "url('/images/seminterrato.jfif')" : undefined,
          filter: found ? NIGHT_VISION_FILTER : undefined,
        }}
      />

      {!revealed && (
        <div className="flex min-h-screen items-center justify-center">
          <p className="text-xs uppercase" style={{ color: "#e7e2d3", letterSpacing: "0.1em" }}>
            {t("seminterrato.cold")}
          </p>
        </div>
      )}

      {revealed && (
        <>
          <button
            type="button"
            aria-label="Un oggetto nascosto nella stanza"
            onClick={handleCameraFound}
            className="absolute sm:hidden"
            style={{ top: CAMERA_MOBILE_TOP, left: CAMERA_MOBILE_LEFT, width: 40, height: 40 }}
          />
          <button
            type="button"
            aria-label="Un oggetto nascosto nella stanza"
            onClick={handleCameraFound}
            className="absolute hidden sm:portrait:block"
            style={{ top: CAMERA_MOBILE_TOP, left: CAMERA_MOBILE_LEFT, width: 40, height: 40 }}
          />
          <button
            type="button"
            aria-label="Un oggetto nascosto nella stanza"
            onClick={handleCameraFound}
            className="absolute hidden sm:landscape:block lg:landscape:hidden"
            style={{ top: CAMERA_TABLET_TOP, left: CAMERA_TABLET_LEFT, width: 40, height: 40 }}
          />
          <button
            type="button"
            aria-label="Un oggetto nascosto nella stanza"
            onClick={handleCameraFound}
            className="absolute hidden lg:landscape:block"
            style={{
              top: `calc(${CAMERA_DESKTOP_TOP} + 20px)`,
              left: `calc(${CAMERA_DESKTOP_LEFT} + 20px)`,
              transform: "translate(-50%, -50%)",
              width: 110,
              height: 110,
            }}
          />

          <div
            className="fixed inset-0 transition-opacity duration-1000"
            style={{
              opacity: found ? 0 : 1,
              pointerEvents: "none",
              zIndex: 50,
              background: `radial-gradient(circle ${torchRadius}px at ${torchX}px ${torchY}px, transparent 0%, rgba(10,14,13,0.95) 55%, #0a0e0d 100%)`,
            }}
          />

          {!found && pointer === null && (
            <p
              className="pointer-events-none fixed inset-x-0 bottom-12 text-center text-xs uppercase"
              style={{ color: "#e7e2d3", letterSpacing: "0.1em", zIndex: 60 }}
            >
              {t("seminterrato.moveToLight")}
            </p>
          )}

          {found && (
            <>
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  opacity: 0.06,
                  backgroundImage:
                    "repeating-linear-gradient(0deg, #e7e2d3 0px, #e7e2d3 1px, transparent 1px, transparent 3px)",
                }}
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at center, transparent 55%, rgba(10,14,13,0.5) 100%)",
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
                {t("seminterrato.backToLight")}
              </Link>
            </>
          )}
        </>
      )}
    </main>
  );
}
