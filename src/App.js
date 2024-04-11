import GameApp from "./components/GameApp";
import { GameProvider } from "./context/GameContext";

function App() {
  return (
    <>
      <GameProvider>
        <div className="App">
          <GameApp />
        </div>
      </GameProvider>
    </>
  );
}

export default App;
