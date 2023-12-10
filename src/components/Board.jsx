import React from "react";
import Square from "./Square";
const Board = () => {
  return (
    <div className="board-contanier" style={{ margin: "20px" }}>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
};
export default Board;
