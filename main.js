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
    nombre: "José María",
    edad: 26,
    productosVendidos: 5, 
    ids: { dni: 123456, passport: 9876543 },
    activate: function () {
      this.activo = true;
    }
  }
];
