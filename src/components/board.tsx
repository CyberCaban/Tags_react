import { useState } from "react";

function Board(props:any) {
  const [cellsXY, setcellsXY] = useState([
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

  const [emptyCellXY, setemptyCellXY] = useState({
    x: 3,
    y: 3,
  });

  const [isSolving, setIsSolving] = useState(false)

  const [colorScheme, setColorScheme] = useState({
    m:getRandomInt(40),
    g:getRandomInt(255),
    b:getRandomInt(255)
  })

  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  function sortOut() {
    let temp = [
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
    ]
    let emptyCellXY = {
      x:3,
      y:3
    }
    setcellsXY(temp)
    setemptyCellXY(emptyCellXY)
    setIsSolving(false)
  }

  function shuffleCells() {
    let tempTable = cellsXY.slice()
    let pool = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    
    tempTable.forEach((item, index)=>{
      let tempEmpty = emptyCellXY
      let temp
      if (item.x == 3 && item.y == 3) {
        let timeX = tempTable[index].x;
        let timeY = tempTable[index].y;
        tempTable[index].x = tempEmpty.x;
        tempTable[index].y = tempEmpty.y;
        tempEmpty.x = timeX;
        tempEmpty.y = timeY;
        setcellsXY(tempTable);
        setemptyCellXY(tempEmpty);
      }
        temp = getRandomInt(pool.length)
        item.value = pool[temp]
        pool.splice(temp, 1)
    })
    
    setcellsXY(tempTable)
    setIsSolving(true)
  }

  function didIWin() {
    let count = 0
    let cells = cellsXY.slice()
    cells.forEach((item, index) => {
      if (item.value == (item.x + 1) + (item.y * 4)) {
        count += 1
        console.log(item.value);
        
      }
    })
    if (count == 15) {
      alert("YOU WON!")
      setIsSolving(false)
    }
  }

  function shuffleColors() {
    let temp = colorScheme
    temp.g = getRandomInt(255)
    temp.b = getRandomInt(255)
    console.log(colorScheme);
    setColorScheme(temp)
  }

  function test(prop:any) {
    console.log(prop);
  }

  const cells = cellsXY.map((items, index) => (
    <div
      className="cell"
      key={index}
      data-x={items.x + 1}
      data-y={items.y + 1}
      data-n={items.value}
      style={{ transform: `translate(${items.x * 128}px, ${items.y * 128}px)`, border: `10px rgb(${(items.x+items.y) * 58}, ${colorScheme.g}, ${colorScheme.b}) outset` }}
      onClick={(e) => move(e)}
    >
      {items.value}
    </div>
  ));


  function move(e: any) {
    let temp = emptyCellXY;
    let tempTable = cellsXY.slice();

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

    if (isSolving) {
      didIWin()
    }

    setcellsXY(tempTable);
    setemptyCellXY(temp);
  }

  return <div className="setup">
    <div className="board">{cells}</div>
    <div className="control_panel">
      <button className="button-30 __shuffle"  onClick={shuffleCells}>
        <img src="https://img.icons8.com/ios-glyphs/30/000000/refresh--v1.png"/>
      </button>
      <button className="button-30" onClick={sortOut}>Sort</button>
      <button className="button-30 __shuffle_colors" onClick={shuffleColors}><img src="https://img.icons8.com/color/48/000000/rgb-circle-2--v1.png"/></button>
    </div>
  </div>
}

export default Board