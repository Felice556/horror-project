import Header from "../components/Header";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import Archivio from "../components/archivio";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
}