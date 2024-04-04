import React, { useState } from "react";
import Square from "./components/sqare";
import "./App.css";

function App() {
  const [boardArr, setBoardArr] = useState(Array(9).fill(null));
  let [count, setCount] = useState(0);
  let [winner, setWinner] = useState("");
  const [flags, setFlag] = useState(0);

  function check(id, temp) {
    let flag = 1;

    let x, y;
    if (id < 3) x = 0;
    else if (id < 6) x = 1;
    else x = 2;
    y = id % 3;
    let coordinates = [
      [
        [
          [
            [0, 0],
            [0, 1],
            [0, 2],
          ],
          [
            [0, 0],
            [1, 0],
            [2, 0],
          ],
          [
            [0, 0],
            [1, 1],
            [2, 2],
          ],
        ],
        [
          [
            [0, 0],
            [0, 1],
            [0, 2],
          ],
          [
            [0, 1],
            [1, 1],
            [2, 1],
          ],
        ],
        [
          [
            [0, 0],
            [0, 1],
            [0, 2],
          ],
          [
            [0, 2],
            [1, 2],
            [2, 2],
          ],
          [
            [0, 2],
            [1, 1],
            [2, 0],
          ],
        ],
      ],
      [
        [
          [
            [0, 0],
            [1, 0],
            [2, 0],
          ],
          [
            [1, 0],
            [1, 1],
            [1, 2],
          ],
        ],
        [
          [
            [0, 0],
            [1, 1],
            [2, 2],
          ],
          [
            [0, 1],
            [1, 1],
            [2, 1],
          ],
          [
            [0, 2],
            [1, 1],
            [2, 0],
          ],
          [
            [1, 0],
            [1, 1],
            [1, 2],
          ],
        ],
        [
          [
            [0, 2],
            [1, 2],
            [2, 2],
          ],
          [
            [1, 0],
            [1, 1],
            [1, 2],
          ],
        ],
      ],
      [
        [
          [
            [0, 0],
            [1, 0],
            [2, 0],
          ],
          [
            [2, 0],
            [2, 1],
            [2, 2],
          ],
          [
            [2, 0],
            [1, 1],
            [0, 2],
          ],
        ],
        [
          [
            [0, 1],
            [1, 1],
            [2, 1],
          ],
          [
            [2, 0],
            [2, 1],
            [2, 2],
          ],
        ],
        [
          [
            [2, 0],
            [2, 1],
            [2, 2],
          ],
          [
            [0, 2],
            [1, 2],
            [2, 2],
          ],
          [
            [0, 0],
            [1, 1],
            [2, 2],
          ],
        ],
      ],
    ];

    let ck = coordinates[x][y];
    for (let arr of ck) {
      for (let coor of arr) {
        if (temp[coor[0] * 3 + coor[1]] !== temp[id]) flag = 0;
        else flag = 1;
        if (flag === 0) break;
      }
      if (flag === 1) {
        break;
      }
    }
    return flag;
  }

  function boxClicked(id) {
    const temp = [...boardArr];
    if (winner === "") {
      if (temp[id] === null) {
        if (count % 2 === 0) {
          temp[id] = "X";
        } else {
          temp[id] = "O";
        }
        setBoardArr(temp);
        let flag = check(id, temp);
        if (flag === 1) {
          setWinner(temp[id]);
        }
        setFlag(flag);
        setCount(++count);
      }
    } else {
      alert(`Player ${winner === "X" ? 1 : 2} is the Winner`);
    }
  }

  return (
    <div
      className="container"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div className="box1">
        <Square value={boardArr[0]} boxClicked={() => boxClicked(0)} />
        <Square value={boardArr[1]} boxClicked={() => boxClicked(1)} />
        <Square value={boardArr[2]} boxClicked={() => boxClicked(2)} />
      </div>
      <div className="box2">
        <Square value={boardArr[3]} boxClicked={() => boxClicked(3)} />
        <Square value={boardArr[4]} boxClicked={() => boxClicked(4)} />
        <Square value={boardArr[5]} boxClicked={() => boxClicked(5)} />
      </div>
      <div className="box3">
        <Square value={boardArr[6]} boxClicked={() => boxClicked(6)} />
        <Square value={boardArr[7]} boxClicked={() => boxClicked(7)} />
        <Square value={boardArr[8]} boxClicked={() => boxClicked(8)} />
      </div>
      <h1 style={{ color: "red" }}>
        {flags === 1 ? `Player ${winner === "X" ? 1 : 2} is the Winner` : null}
        {count === 9 ? `Draw mooditu marubadium velayadu` : null}
      </h1>
      {/* {flags == 1 && winner == "X" ? (
        <h1 style={{ color: "red" }}>Your Gift</h1>
      ) : null}
      {flags == 1 && winner == "X" ? (
        <img
          src=""
          // style={{ width: "100px", height: "100px" }}
        />
      ) : null} */}
    </div>
  );
}

export default App;
