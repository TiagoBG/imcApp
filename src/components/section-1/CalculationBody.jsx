import React, { Component } from "react";

export default class CalculationBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peso: 75,
      altura: 1.74
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    let txtAltura = document.querySelector("#txtAltura").value;
    let txtPeso = document.querySelector("#txtPeso").value;
    this.setState({ altura: txtAltura, peso: txtPeso }, function () {
      console.log(this.state.altura, this.state.peso);
    });
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    console.log(props, state);
    state.peso = 75;
    state.altura = 1.74;
    return state;
  }
  //ComponentDidMount es el metodo mas usado con APIs y servicios BackEnd
  ComponentDidMount() {
    console.log("ComponentDidMount");
  }

  render() {
    return (
      <section>
        <input type="text" placeholder="Altura" id="txtAltura" />
        <br />

        <input type="text" placeholder="Peso" id="txtPeso" />
        <br />

        <button onClick={this.handleClick}>Enviar</button>
        <p>Altura ingresada (m): {this.state.altura}</p>
        <p>Peso ingresado (kg): {this.state.peso}</p>
        <p>Tu imc es: {this.state.peso / this.state.altura ** 2}</p>
      </section>
    );
  }
  /* shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
  }
  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  } 
*/
}
