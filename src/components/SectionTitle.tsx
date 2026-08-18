import type { SectionTitleProps } from "../types/sectionTitle";

export default function SectionTitle({
  children,
  variant = "default",
}: SectionTitleProps) {
  const titleStyle = {
    color: "#e7e2d3",
    fontFamily: "ui-monospace, 'Courier New', monospace",
    letterSpacing: "0.1em",
    textShadow: "0 4px 24px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.6)",
  };

  return (
    <h2
      className={`text-4xl font-bold uppercase ${
        variant === "film" ? "site-title" : ""
      }`}
      style={titleStyle}
    >
      {children}
    </h2>
  );
}