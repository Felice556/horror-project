import Header from "./components/Header";
import "./App.css";
import Section from "./components/Section";
import SectionTitle from "./components/SectionTitle";
import Archivio from "./components/archivio";

export default function App() {
  return (
    <>
      <Header />
      <Section
        backgroundImage="/images/hero-bg.png"
        mobileBackgroundImage="/images/hero-bg-mobile.jpg"
        fadeBottom
      >
        <SectionTitle variant="film">Il Cinema Maledetto</SectionTitle>
      </Section>
       <Archivio />
    </>
  );
}