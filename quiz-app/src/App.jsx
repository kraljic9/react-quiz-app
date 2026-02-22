import "./App.css";
import { Routes, Route } from "react-router-dom";
import StartScreen from "../pages/StartScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartScreen />} />
    </Routes>
  );
}

export default App;
