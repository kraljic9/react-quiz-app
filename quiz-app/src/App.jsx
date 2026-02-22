import "./App.css";
import { Routes, Route } from "react-router-dom";
import StartScreen from "../pages/StartScreen";
import EndScreen from "../pages/EndScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartScreen />} />
      <Route path="/end-screen" element={<EndScreen />} />
    </Routes>
  );
}

export default App;
