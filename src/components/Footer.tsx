export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{ backgroundColor: "#0a0e0d", borderColor: "#2b2f2c" }}
    >
      <div className="flex flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
        <div className="flex flex-col gap-2">
          <p
            className="text-xs uppercase"
            style={{
              color: "#e7e2d3",
              opacity: 0.6,
              fontFamily: "ui-monospace, 'Courier New', monospace",
              letterSpacing: "0.15em",
            }}
          >
            Creato da Felice Russo · React · TypeScript · Tailwind CSS
          </p>

          <p
            className="text-xs"
            style={{ color: "#e7e2d3", opacity: 0.4, letterSpacing: "0.02em" }}
          >
            Le immagini di questo sito sono state generate con intelligenza artificiale a scopo creativo.
          </p>

          <p
            className="text-xs"
            style={{ color: "#e7e2d3", opacity: 0.4, letterSpacing: "0.05em" }}
          >
            © 2026 Stanza 237
          </p>
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-8">
          <a
            href="https://github.com/Felice556/horror-project"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium uppercase"
            style={{ color: "#e7e2d3", letterSpacing: "0.15em" }}
          >
            GitHub
          </a>

          <a
            href="mailto:felice.lgg@gmail.com"
            className="text-xs font-medium uppercase"
            style={{ color: "#e7e2d3", letterSpacing: "0.15em" }}
          >
            Contatti
          </a>

          <a
            href="#home"
            className="text-xs font-medium uppercase"
            style={{ color: "#6e0e1a", letterSpacing: "0.15em" }}
          >
            Torna su
          </a>
        </div>
      </div>
    </footer>
  );
}
