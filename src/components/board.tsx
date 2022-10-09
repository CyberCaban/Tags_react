import { useState } from "react";
import { transform } from "typescript";

function Board() {
  const [cellTable, setCellTable] = useState([
    {
      value: 1,
      x: 0,
      y: 0,
      move: false,
    },
    {
      value: 2,
      x: 1,
      y: 0,
      move: false,
    },
    {
      value: 3,
      x: 2,
      y: 0,
      move: false,
    },
    {
      value: 4,
      x: 3,
      y: 0,
      move: false,
    },
    {
      value: 5,
      x: 0,
      y: 1,
      move: false,
    },
    {
      value: 6,
      x: 1,
      y: 1,
      move: false,
    },
    {
      value: 7,
      x: 2,
      y: 1,
      move: false,
    },
    {
      value: 8,
      x: 3,
      y: 1,
      move: false,
    },
    {
      value: 9,
      x: 0,
      y: 2,
      move: false,
    },
    {
      value: 10,
      x: 1,
      y: 2,
      move: false,
    },
    {
      value: 11,
      x: 2,
      y: 2,
      move: false,
    },
    {
      value: 12,
      x: 3,
      y: 2,
      move: false,
    },
    {
      value: 13,
      x: 0,
      y: 3,
      move: false,
    },
    {
      value: 14,
      x: 1,
      y: 3,
      move: false,
    },
    {
      value: 15,
      x: 2,
      y: 3,
      move: false,
    },
  ]);

  const [emptyCell, setEmptyCell] = useState({
    x: 3,
    y: 3,
  });
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

    tempTable.forEach((item, index) => {
      if (item.value == e.target.dataset.n) {
        // временные перменные для хранения
        let timeX = tempTable[index].x;
        let timeY = tempTable[index].y;

        // перезаписываем нажатую клетку
        tempTable[index].x = temp.x;
        tempTable[index].y = temp.y;

        // устанавливаем новые значения для пустой клетки
        temp.x = timeX;
        temp.y = timeY;
      }
    });

    setCellTable(tempTable);
    setEmptyCell(temp);
  }

  return <div className="board">{cells}</div>;
}

export default Board;
