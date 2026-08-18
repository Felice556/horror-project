
import type { archiveItem } from "../types/archiveItems";

export default function ArchiveCard({ title, reference, description }: archiveItem) {
  return (
    <div
      className="flex min-h-45 flex-col border-l-4 p-6 text-left backdrop-blur-sm transition-colors duration-300 hover:border-l-[#d64545]"
      style={{
        borderColor: "#6e0e1a",
        background: "rgba(10,14,13,0.72)",
        boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
      }}
    >
      <p
        className="text-xs uppercase"
        style={{ color: "#d64545", letterSpacing: "0.2em" }}
      >
        {reference}
      </p>
      <h3 className="mt-2 text-lg font-bold" style={{ color: "#e7e2d3" }}>
        {title}
      </h3>
      <p className="mt-2 text-sm" style={{ color: "#a9a49a" }}>
        {description}
      </p>
    </div>
  );
}