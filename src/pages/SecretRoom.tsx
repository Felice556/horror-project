import { useEffect, useState } from "react";

export default function SecretRoom() {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setRevealed(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#0a0e0d", color: "#e7e2d3" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{
          backgroundImage: "url(/images/stanza237-bg.png)",
          opacity: revealed ? 1 : 0,
        }}
      />

      <h1
        className="relative z-10 text-3xl transition-opacity duration-1000"
        style={{ opacity: revealed ? 0 : 1 }}
      >
        Non dovevi trovarla.
      </h1>
    </div>
  );
}
