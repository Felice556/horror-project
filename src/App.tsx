import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SecretRoom from "./pages/SecretRoom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stanza237" element={<SecretRoom />} />
    </Routes>
  );
}