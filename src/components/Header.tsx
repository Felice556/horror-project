import { useEffect, useState } from "react";
import { navItems } from "../data/navItems";
import "./Header.css";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 0);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b overflow-hidden transition-colors duration-300"
      style={{
        backgroundColor: scrolled ? "transparent" : "#0a0e0d",
        borderColor: scrolled ? "transparent" : "#2b2f2c",
      }}
    >
    <div
  className="pointer-events-none absolute inset-0"
  style={{
    opacity: 0.06,
    backgroundImage:
      "repeating-linear-gradient(0deg, #e7e2d3 0px, #e7e2d3 1px, transparent 1px, transparent 3px)",
  }}
/>
    <div className="flex items-center justify-between pl-10 pr-6 py-5">
        
     <div className="flex flex-col gap-1">
  <span
    className="rec-dot flex items-center gap-2 text-xs font-semibold"
    style={{ color: "#6e0e1a", letterSpacing: "0.3em" }}
  >
    <span
      className="inline-block h-1.5 w-1.5 rounded-full"
      style={{ backgroundColor: "#6e0e1a" }}
    />
    REC
  </span>

  <h1
    className="site-title site-title-glitch text-2xl font-bold uppercase"
    data-text="STANZA 237"
    style={{
      color: "#e7e2d3",
      fontFamily: "ui-monospace, 'Courier New', monospace",
      letterSpacing: "0.15em",
    }}
  >
    STANZA 237
  </h1>
</div>
<nav className="hidden md:flex items-center gap-8">
  {navItems.map((item) => (
    <a
      key={item.href}
      href={item.href}
      className="text-xs font-medium uppercase"
      style={{
        color: item.isSecret ? "#c7b23a" : "#e7e2d3",
        letterSpacing: "0.2em",
      }}
    >
      {item.label}
    </a>
  ))}
</nav>
<button
  className="flex md:hidden flex-col gap-1.5"
  aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
  onClick={() => setMenuOpen(!menuOpen)}
>
  <span className="h-0.5 w-6" style={{ backgroundColor: "#e7e2d3" }} />
  <span className="h-0.5 w-6" style={{ backgroundColor: "#e7e2d3" }} />
  <span className="h-0.5 w-4" style={{ backgroundColor: "#6e0e1a" }} />
</button>
</div>
<div
  className="overflow-hidden transition-all duration-300 md:hidden"
  style={{ maxHeight: menuOpen ? "220px" : "0px" }}
>
  <nav className="flex flex-col items-end gap-4 px-6 pb-6">
    {navItems.map((item) => (
      <a
        key={item.href}
        href={item.href}
        onClick={() => setMenuOpen(false)}
        className="text-xs font-medium uppercase"
        style={{
          color: item.isSecret ? "#c7b23a" : "#e7e2d3",
          letterSpacing: "0.2em",
        }}
      >
        {item.label}
      </a>
    ))}
  </nav>
</div>
    </header>
  );
}