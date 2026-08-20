import { useState } from "react";
import { Link } from "react-router-dom";
import { quizQuestions } from "../data/quizQuestions";

const UNLOCK_CODE = "4458";

const MONO = "ui-monospace, 'Courier New', monospace";

function normalizeDate(value: string) {
  return value.replace(/[^0-9]/g, "");
}

function decodeBase64Utf8(base64: string): string {
  const binaryString = atob(base64);
  const bytes = Uint8Array.from(binaryString, (c) => c.charCodeAt(0));
  return new TextDecoder("utf-8").decode(bytes);
}

// Data corretta codificata in Base64, per non lasciarla in chiaro nel
// sorgente (il repository è pubblico). Decodifica: 26082023.
const DATA_CORRETTA_CODIFICATA = "MjYwODIwMjM=";

// Messaggio personale codificato in Base64 (UTF-8, per via degli accenti).
// Per generare una nuova stringa codificata: apri la Console del browser (F12)
// sul sito e scrivi:
//   btoa(String.fromCharCode(...new TextEncoder().encode("il tuo nuovo testo")))
// copia il risultato e sostituiscilo sopra. Non scrivere mai il messaggio in
// chiaro in questo file.
const MESSAGGIO_CODIFICATO =
  "VGkgYW1vLCBzZWkgbGEgcGVyc29uYSBwacO5IGltcG9ydGFudGUgZGVsbGEgbWlhIHZpdGE=";

export default function EnigmiPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isCorrectSelected, setIsCorrectSelected] = useState<boolean | null>(null);

  const [bonusInput, setBonusInput] = useState("");
  const [bonusCorrect, setBonusCorrect] = useState(false);
  const [bonusError, setBonusError] = useState(false);

  const currentQuestion = quizQuestions[currentIndex];

  function handleOptionClick(optionId: string) {
    if (selectedOptionId) return;

    const correct = optionId === currentQuestion.correctOptionId;
    setSelectedOptionId(optionId);
    setIsCorrectSelected(correct);
    if (correct) setScore((s) => s + 1);

    setTimeout(() => {
      if (currentIndex + 1 < quizQuestions.length) {
        setCurrentIndex((i) => i + 1);
        setSelectedOptionId(null);
        setIsCorrectSelected(null);
      } else {
        setFinished(true);
      }
    }, 650);
  }

  function handleRetry() {
    setCurrentIndex(0);
    setScore(0);
    setFinished(false);
    setSelectedOptionId(null);
    setIsCorrectSelected(null);
  }

  function handleBonusSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (normalizeDate(bonusInput) === atob(DATA_CORRETTA_CODIFICATA)) {
      setBonusCorrect(true);
      setBonusError(false);
    } else {
      setBonusError(true);
    }
  }

  return (
    <main
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-16"
      style={{ backgroundColor: "#0a0e0d", color: "#e7e2d3" }}
    >
      <div className="w-full max-w-xl text-center">
        {!finished ? (
          <>
            <p
              className="text-xs uppercase"
              style={{ color: "#c7b23a", letterSpacing: "0.2em", fontFamily: MONO }}
            >
              Domanda {currentIndex + 1} di {quizQuestions.length}
            </p>

            <h1
              className="mt-4 text-xl sm:text-2xl"
              style={{ fontFamily: MONO, letterSpacing: "0.02em" }}
            >
              {currentQuestion.question}
            </h1>

            <div className="mt-8 flex flex-col gap-3">
              {currentQuestion.options.map((option) => {
                const isSelected = selectedOptionId === option.id;
                const feedbackColor = isSelected
                  ? isCorrectSelected
                    ? "#3fae5c"
                    : "#c0392b"
                  : undefined;

                return (
                  <button
                    key={option.id}
                    type="button"
                    disabled={selectedOptionId !== null}
                    onClick={() => handleOptionClick(option.id)}
                    className="w-full border px-4 py-3 text-left text-sm transition-colors duration-300 border-[#2b2f2c] hover:border-[#6e0e1a] disabled:cursor-default"
                    style={{
                      color: "#e7e2d3",
                      fontFamily: MONO,
                      borderColor: feedbackColor,
                    }}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </>
        ) : score === quizQuestions.length ? (
          <div className="border p-8" style={{ borderColor: "#2b2f2c" }}>
            <p
              className="text-sm uppercase"
              style={{ letterSpacing: "0.15em", fontFamily: MONO }}
            >
              Hai sbloccato un codice per l'Archivio
            </p>
            <p
              className="mt-6 text-5xl font-bold"
              style={{ color: "#c7b23a", fontFamily: MONO, letterSpacing: "0.2em" }}
            >
              {UNLOCK_CODE}
            </p>
            <Link
              to="/#archivio"
              className="mt-8 inline-block border px-6 py-3 text-xs uppercase transition-colors duration-300 border-[#2b2f2c] hover:border-[#6e0e1a]"
              style={{ color: "#e7e2d3", fontFamily: MONO, letterSpacing: "0.1em" }}
            >
              Torna all'Archivio
            </Link>

            <div className="mt-8 border-t pt-8" style={{ borderColor: "#2b2f2c" }}>
              {bonusCorrect ? (
                <p
                  style={{
                    fontFamily: "'EB Garamond', Georgia, serif",
                    fontStyle: "italic",
                    fontSize: "clamp(1.05rem, 2.6vw, 1.4rem)",
                    lineHeight: 1.7,
                    color: "#e7e2d3",
                    textShadow: "0 0 24px rgba(231, 226, 211, 0.25)",
                  }}
                >
                  {decodeBase64Utf8(MESSAGGIO_CODIFICATO)}
                </p>
              ) : (
                <form onSubmit={handleBonusSubmit} className="flex flex-col gap-3">
                  <p className="text-sm" style={{ fontFamily: MONO }}>
                    Domanda bonus: Qual è la data più importante per me?
                  </p>
                  <label htmlFor="bonus-date" className="sr-only">
                    Data nel formato giorno mese anno
                  </label>
                  <input
                    id="bonus-date"
                    type="text"
                    value={bonusInput}
                    onChange={(e) => {
                      setBonusInput(e.target.value);
                      setBonusError(false);
                    }}
                    placeholder="GG/MM/AAAA"
                    className="border bg-transparent px-3 py-2 text-sm border-[#2b2f2c]"
                    style={{ color: "#e7e2d3", fontFamily: MONO }}
                  />
                  <button
                    type="submit"
                    className="border px-4 py-2 text-xs uppercase transition-colors duration-300 border-[#2b2f2c] hover:border-[#6e0e1a]"
                    style={{ color: "#e7e2d3", fontFamily: MONO, letterSpacing: "0.1em" }}
                  >
                    Conferma
                  </button>
                  {bonusError && (
                    <p className="text-xs" style={{ color: "#6e0e1a" }}>
                      Non è questa la data giusta...
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        ) : (
          <div>
            <p className="text-xl" style={{ fontFamily: MONO }}>
              Punteggio: {score}/{quizQuestions.length}
            </p>
            <button
              type="button"
              onClick={handleRetry}
              className="mt-6 border px-6 py-3 text-xs uppercase transition-colors duration-300 border-[#2b2f2c] hover:border-[#6e0e1a]"
              style={{ color: "#e7e2d3", fontFamily: MONO, letterSpacing: "0.1em" }}
            >
              Riprova
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
