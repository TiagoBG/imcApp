import React from "react";
import "./styles.css";
import CalculatorApp from "./components/section-1/CalculatorApp";

export default function App() {
  return (
    <div className="App">
      <CalculatorApp altura="1.78" enfermo={false} />
    </div>
  );
}
