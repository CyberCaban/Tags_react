import { useState, useEffect } from "react";

function Randomizer(props:any) {

    const [cellTable, setCellTable] = useState([
        {
          value: 1,
          x: 0,
          y: 0,
        },
        {
          value: 2,
          x: 1,
          y: 0,
        },
        {
          value: 3,
          x: 2,
          y: 0,
        },
        {
          value: 4,
          x: 3,
          y: 0,
        },
        {
          value: 5,
          x: 0,
          y: 1,
        },
        {
          value: 6,
          x: 1,
          y: 1,
        },
        {
          value: 7,
          x: 2,
          y: 1,
        },
        {
          value: 8,
          x: 3,
          y: 1,
        },
        {
          value: 9,
          x: 0,
          y: 2,
        },
        {
          value: 10,
          x: 1,
          y: 2,
        },
        {
          value: 11,
          x: 2,
          y: 2,
        },
        {
          value: 12,
          x: 3,
          y: 2,
        },
        {
          value: 13,
          x: 0,
          y: 3,
        },
        {
          value: 14,
          x: 1,
          y: 3,
        },
        {
          value: 15,
          x: 2,
          y: 3,
        },
    ]);
    
    function getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
    }

    function getRandomNumber() {
        let tempTable = cellTable.slice()
        let pool = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
        
        tempTable.forEach((item, index)=>{
            let temp
            temp = getRandomInt(pool.length)
            item.value = pool[temp]
            pool.splice(temp, 1)
        })
        
        setCellTable(tempTable)
        console.log(cellTable);
    }
    
    function setup() {
        props.randomizedCells(cellTable)
    }

    return <div className="randomButton">
        <button id="randomize" onClick={getRandomNumber}><img src="https://img.icons8.com/ios-glyphs/30/000000/refresh--v1.png"/></button>
        <button onClick={setup}>Start</button>
    </div>
}
export default Randomizer