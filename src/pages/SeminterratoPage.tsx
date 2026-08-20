import { useEffect, useState } from "react";

export default function SeminterratoPage() {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setRevealed(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{
        backgroundColor: "#0a0e0d",
        backgroundImage: revealed ? "url('/images/seminterrato.png')" : undefined,
      }}
    >
      {!revealed && (
        <p
          className="text-xs uppercase"
          style={{ color: "#e7e2d3", letterSpacing: "0.1em" }}
        >
          Fa freddo, qui sotto.
        </p>
      )}
    </div>
  );
}
