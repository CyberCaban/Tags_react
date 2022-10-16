import { useState } from "react";

function Board(props:any) {
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

  const [emptyCell, setEmptyCell] = useState({
    x: 3,
    y: 3,
  });

  function shuffle() {
    let temp = emptyCell;
    let tempTable = cellTable.slice();

    tempTable.forEach((item, index) => {
      if (item.x == 3 && item.y == 3) {
        let timeX = tempTable[index].x;
        let timeY = tempTable[index].y;
        tempTable[index].x = temp.x;
        tempTable[index].y = temp.y;
        temp.x = timeX;
        temp.y = timeY;
        setCellTable(tempTable);
        setEmptyCell(temp);
      }
    })
    setCellTable(props.randomizedCells);
  }

  const cells = cellTable.map((items, index) => (
    <div
      className="cell"
      key={index}
      data-x={items.x + 1}
      data-y={items.y + 1}
      data-n={items.value}
      style={{ transform: `translate(${items.x * 128}px, ${items.y * 128}px)` }}
      onClick={(e) => move(e)}
    >
        {items.value}
    </div>
  ));


  function move(e: any) {
    let temp = emptyCell;
    let tempTable = cellTable.slice();
    // console.log(props.randomizedCells);

    tempTable.forEach((item, index) => {
      if (item.value == e.target.dataset.n) {
        if ((tempTable[index].x - temp.x == Math.abs(1) || temp.x - tempTable[index].x == Math.abs(1)) && !(tempTable[index].y - temp.y >= Math.abs(1) || temp.y - tempTable[index].y >= Math.abs(1))) {
          let timeX = tempTable[index].x;
          tempTable[index].x = temp.x;
          temp.x = timeX;
        }
        if ((tempTable[index].y - temp.y == Math.abs(1) || temp.y - tempTable[index].y == Math.abs(1)) && !(tempTable[index].x - temp.x >= Math.abs(1) || temp.x - tempTable[index].x >= Math.abs(1))) {
          let timeY = tempTable[index].y;
          tempTable[index].y = temp.y;
          temp.y = timeY;
        }
      }
    });

    setCellTable(tempTable);
    setEmptyCell(temp);
  }

  return <div className="setup">
      <div className="board">{cells}</div>
      <button onClick={shuffle}>Shuffle</button>
    </div>
}

export default Board