import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

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
            {t("footer.credit")}
          </p>

          <p
            className="text-xs"
            style={{ color: "#e7e2d3", opacity: 0.55, letterSpacing: "0.02em" }}
          >
            {t("footer.aiDisclaimer")}
          </p>

          <p
            className="text-xs"
            style={{ color: "#e7e2d3", opacity: 0.55, letterSpacing: "0.05em" }}
          >
            {t("footer.copyright")}
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
            {t("footer.github")}
            <span className="sr-only"> {t("footer.githubNewTab")}</span>
          </a>

          <a
            href="mailto:felice.lgg@gmail.com"
            className="text-xs font-medium uppercase"
            style={{ color: "#e7e2d3", letterSpacing: "0.15em" }}
          >
            {t("footer.contact")}
          </a>

          <a
            href="#home"
            className="text-xs font-medium uppercase"
            style={{ color: "#e05656", letterSpacing: "0.15em" }}
          >
            {t("footer.backToTop")}
          </a>
        </div>
      </div>
    </footer>
  );
}
