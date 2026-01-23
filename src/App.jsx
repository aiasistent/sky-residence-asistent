import { BrowserRouter, Routes, Route } from "react-router-dom";
import LanguageSelect from "./components/LanguageSelect";
import ChatEn from "./components/ChatEng";
import ChatSr from "./components/ChatSr";

export default function App() {
  return (
    <div
      className="min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/tower.jpeg')" }}
    >
      <div className="z-10 w-full">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LanguageSelect />} />
            <Route path="/chat-sr" element={<ChatSr />} />
            <Route path="/chat-en" element={<ChatEn />} />
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
