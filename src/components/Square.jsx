import React from "react";

const Square = (props) => {
  return (
    <div
      onClick={props.onClick}
      style={{
        border: "1px solid",
        display: "flex",
        height: "100px",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h5>{props.value}</h5>
    </div>
  );
};

export default Square;
