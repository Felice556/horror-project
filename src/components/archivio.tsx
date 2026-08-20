import { useState, useEffect } from "react";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import ArchiveCard from "./archiveCard";
import { archiveItems } from "../data/archiveItems";

export default function Archivio() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [code, setCode] = useState(""); 

  useEffect(() => {
    let typed = "";

    function handleKeyDown(e: KeyboardEvent) {
      typed += e.key;
      typed = typed.slice(-3);

      if (typed === "237") {
        setIsUnlocked(true);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
 function handleCodeChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setCode(value);

    if (value === "237") {
      setIsUnlocked(true);
    }
  }
  return (
    <Section id="archivio" backgroundImage="/images/archivio-bg.jpg" fadeTop>
      <div style={{ paddingTop: "5px" }}>
        <SectionTitle variant="film" >Archivio</SectionTitle>

        {isUnlocked ? (
          <div className="grid w-full max-w-5xl py-8 gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {archiveItems.map((item) => (
              <ArchiveCard key={item.title} {...item} />
            ))}
          </div>
        ) : (
           <div className="flex flex-col items-center gap-4">
          <p
            className="site-title text-sm italic"
            style={{
              color: "#d64545",
              fontFamily: "ui-monospace, 'Courier New', monospace",
              letterSpacing: "0.05em",
            }}
          >
            Alcuni ricordi sono stati murati vivi. Da qualche parte, una stanza ricorda ancora la via per farli riemergere...
          </p>
              <label htmlFor="archive-code" className="sr-only">
              Codice segreto per sbloccare l'archivio
            </label>
              <input
              id="archive-code"
              type="text"
              inputMode="numeric"
              value={code}
              onChange={handleCodeChange}
              placeholder="SBLOCCA"
              maxLength={3}
              className="w-24 border bg-transparent px-3 py-2 text-center text-sm xl:hidden"
              style={{ borderColor: "#2b2f2c", color: "#e7e2d3" }}
            />
          </div>
        )}
      </div>
    </Section>
  );
}