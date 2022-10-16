import { useState } from "react";
import Board from "./board";
import Randomizer from './randomizer';

function Main() {
  const [cells, setCells] = useState('')
  const [Pulse, setPulse] = useState(0)

  return (
    <div className="main" >
      <h1>Tags</h1>
      <Board style={{display:"none"}} randomizedCells = {cells} getPulse = {Pulse}/>
      <Randomizer style={{display:`none`}}  randomizedCells = {setCells} setPulse = {setPulse}/>
    </div>
  );
}

export default Main;
