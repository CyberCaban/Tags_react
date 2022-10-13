import { useState } from "react";
import './App.css';
import Board from "./components/board";
import Randomizer from './components/randomizer';

function App() {
  const [cells, setCells] = useState('')
  const [pulse, setPulse] = useState(0)
  return (
    <div className="app">
      <h1>Tags</h1>
      <Board randomizedCells = {cells}/>
      <Randomizer randomizedCells = {setCells}/>
    </div>
  );
}

export default App;
