import Header from "../components/Header";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import Archivio from "../components/archivio";

export default function Home() {
  return (
    <>
      <Header />
      <Section backgroundImage="/images/hero-bg.png" fadeBottom>
        <SectionTitle variant="film">Il Cinema Maledetto</SectionTitle>
      </Section>
      <Archivio />
    </>
  );
}