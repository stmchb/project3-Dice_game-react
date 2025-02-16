import { useState } from "react";
import "./App.css";
import GamePage from "./components/GamePage";
import StartPage from "./components/StartPage";

function App() {
  const [showGamePage, setShowGamePage] = useState(false);
  function togglePage() {
    setShowGamePage((prev) => !prev);
  }
  return <>{showGamePage ? <GamePage /> : <StartPage toggle={togglePage} />}</>;
}

export default App;
