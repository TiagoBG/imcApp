import React from "react";
import Header from "./CalculationHeader";
import CalculationBody from "./CalculationBody";

export default function CalculatorApp(props) {
  return (
    <section>
      <Header title="IMC Calculator App" bgColor="#a29bfe" />

      <CalculationBody edad={26} estadoCivil="soltero" />
    </section>
  );
}
