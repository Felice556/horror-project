import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center"
      style={{ backgroundColor: "#0a0e0d", color: "#e7e2d3" }}
    >
      <h1
        className="site-title text-2xl sm:text-3xl font-bold uppercase"
        style={{ fontFamily: "ui-monospace, 'Courier New', monospace", letterSpacing: "0.1em" }}
      >
        {t("notFound.title")}
      </h1>

      <p
        className="text-sm"
        style={{ color: "rgba(231, 226, 211, 0.6)", fontFamily: "ui-monospace, 'Courier New', monospace" }}
      >
        {t("notFound.subtitle")}
      </p>

      <Link
        to="/"
        className="mt-6 border px-6 py-3 text-xs uppercase transition-colors duration-300 border-[#2b2f2c] hover:border-[#6e0e1a]"
        style={{ color: "#e7e2d3", fontFamily: "ui-monospace, 'Courier New', monospace", letterSpacing: "0.1em" }}
      >
        {t("notFound.backHome")}
      </Link>
    </main>
  );
}
