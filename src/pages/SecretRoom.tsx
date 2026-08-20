import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SecretRoom.css";

export default function SecretRoom() {
  const [revealed, setRevealed] = useState(false);
  const [scared, setScared] = useState(false);
  const alarmRef = useRef<HTMLAudioElement>(null);
  const screamRef = useRef<HTMLAudioElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setRevealed(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  function handleAlarmClick() {
    alarmRef.current?.play();

    setTimeout(() => {
      if (alarmRef.current) {
        alarmRef.current.pause();
        alarmRef.current.currentTime = 0;
      }
      setScared(true);
      screamRef.current?.play();

      setTimeout(() => {
        navigate("/seminterrato");
      }, 1800);
    }, 5000);
  }

  return (
    <div
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#0a0e0d", color: "#e7e2d3" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{
          backgroundImage: "url(/images/stanza237-bg.png)",
          opacity: revealed ? 1 : 0,
        }}
      />

      <button
        type="button"
        aria-label="Allarme antincendio sulla parete"
        onClick={handleAlarmClick}
        className="absolute"
        style={{
          top: "20%",
          left: "29%",
          width: "6%",
          height: "12%",
          opacity: 0,
        }}
      />

      <h1
        className="relative z-10 text-3xl transition-opacity duration-1000"
        style={{ opacity: revealed ? 0 : 1 }}
      >
        Non dovevi trovarla.
      </h1>

      <audio ref={alarmRef} src="/sounds/alarm.flac" />
      <audio ref={screamRef} src="/sounds/scream.wav" />

      {scared && (
        <div
          className="jumpscare-shake bg-cover bg-center"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999,
            backgroundImage: "url('/images/woman_jumpscare.jpg')",
          }}
        />
      )}
    </div>
  );
}
