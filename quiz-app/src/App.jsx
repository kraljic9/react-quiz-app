import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartScreen from "../pages/StartScreen";
import EndScreen from "../pages/EndScreen";
import Quiz from "../pages/Quiz";
import ContextProvider from "../context/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartScreen />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/end-screen" element={<EndScreen />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
