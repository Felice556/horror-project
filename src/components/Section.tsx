import type { SectionProps } from "../types/section";

export default function Section({
  id,
  backgroundImage,
  mobileBackgroundImage,
  children,
  fadeTop = false,
  fadeBottom = false,
}: SectionProps) {
  return (
    <section id={id} className="relative">
      {mobileBackgroundImage ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat sm:hidden"
            style={{ backgroundImage: `url('${mobileBackgroundImage}')` }}
          />
          <div
            className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat sm:block"
            style={{ backgroundImage: `url('${backgroundImage}')` }}
          />
        </>
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        />
      )}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,14,13,0.05) 0%, rgba(10,14,13,0.3) 100%)",
        }}
      />

      {fadeTop && (
        <div
          className="absolute inset-x-0 top-0 h-32 sm:h-48"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,14,13,1) 0%, rgba(10,14,13,0) 100%)",
          }}
        />
      )}

      {fadeBottom && (
        <div
          className="absolute inset-x-0 bottom-0 h-32 sm:h-48"
          style={{
            background:
              "linear-gradient(to top, rgba(10,14,13,1) 0%, rgba(10,14,13,0) 100%)",
          }}
        />
      )}

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-start  px-6 text-center">
        {children}
      </div>
    </section>
  );
}