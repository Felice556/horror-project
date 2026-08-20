import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import SecretRoom from "./pages/SecretRoom";
import SeminterratoPage from "./pages/SeminterratoPage";
import EnigmiPage from "./pages/EnigmiPage";

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const el = document.querySelector(hash);
    el?.scrollIntoView({ behavior: "smooth" });
  }, [hash]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stanza237" element={<SecretRoom />} />
        <Route path="/seminterrato" element={<SeminterratoPage />} />
        <Route path="/enigmi" element={<EnigmiPage />} />
      </Routes>
    </>
  );
}