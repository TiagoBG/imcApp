import React from "react";

export default function CalculationHeader(props) {
  return (
    <section style={{ backgroundColor: props.bgColor, padding: "10px" }}>
      <h1>{props.title}</h1>
    </section>
  );
}
