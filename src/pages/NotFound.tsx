import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center"
      style={{ backgroundColor: "#0a0e0d", color: "#e7e2d3" }}
    >
      <h1
        className="site-title text-2xl sm:text-3xl font-bold uppercase"
        style={{ fontFamily: "ui-monospace, 'Courier New', monospace", letterSpacing: "0.1em" }}
      >
        Ti sei perso nel corridoio sbagliato.
      </h1>

      <p
        className="text-sm"
        style={{ color: "rgba(231, 226, 211, 0.6)", fontFamily: "ui-monospace, 'Courier New', monospace" }}
      >
        Questa stanza non esiste. O forse non dovrebbe.
      </p>

      <Link
        to="/"
        className="mt-6 border px-6 py-3 text-xs uppercase transition-colors duration-300 border-[#2b2f2c] hover:border-[#6e0e1a]"
        style={{ color: "#e7e2d3", fontFamily: "ui-monospace, 'Courier New', monospace", letterSpacing: "0.1em" }}
      >
        Torna sulla via di casa
      </Link>
    </main>
  );
}
