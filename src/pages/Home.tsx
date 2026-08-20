import Header from "../components/Header";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import Archivio from "../components/archivio";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-100 focus:px-4 focus:py-2"
        style={{ backgroundColor: "#0a0e0d", color: "#e7e2d3", border: "1px solid #2b2f2c" }}
      >
        Salta al contenuto
      </a>
      <Header />
      <main id="main-content">
        <Section
          id="home"
          backgroundImage="/images/hero-bg.png"
          mobileBackgroundImage="/images/hero-bg-mobile.jpg"
          fadeBottom
        >
          <div className="pt-24">
            <SectionTitle variant="film">Il Cinema Maledetto</SectionTitle>
          </div>
        </Section>
        <Archivio />
      </main>
      <Footer />
    </>
  );
}