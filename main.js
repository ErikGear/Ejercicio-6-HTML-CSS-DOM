"use strict";
let comision = 0;

let productos = [
  {
    nombre: "Aqua",
    precio: 200
  },
  {
    nombre: "Emoción",
    precio: 180
  },
  {
    nombre: "Alegría",
    precio: 160
  },
  {
    nombre: "Frescura",
    precio: 150
  }
];

let vendedores = [
  {
    nombre: "Juan",
    edad: 26,
    numeroProductosVendidos: 0,
    tipoProductos: [],
    ids: { dni: "123456", passport: "9876543"},
    activate: function () {
      this.activo = true;
    }
  },
  {
    nombre: "Pedro",
    edad: 26,
    numeroProductosVendidos: 0,
    tipoProductos: [],
    ids: { dni: "78910", passport: "6789805"},
    activate: function () {
      this.activo = true;
    }
  }
];
