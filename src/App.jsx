import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Chat from "./components/Chat";

export default function App() {
  return (
    <div
      className="min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/tower.jpeg')" }}
    >
      <div className="z-10 w-full">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </BrowserRouter>

        <div className="mt-6 text-center text-sm text-gray-300">
          Powered by{" "}
          <a
            href="https://www.instagram.com/aiapartman/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-300 hover:text-blue-400 transition"
          >
            AI Apartman
          </a>
        </div>
      </div>
    </div>
  );
}
