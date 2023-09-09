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
    ids: { dni: "123456", passport: "9876543" },
    activate: function () {
      this.activo = true;
    }
  },
  {
    nombre: "Pedro",
    edad: 24,
    numeroProductosVendidos: 0,
    tipoProductos: [],
    ids: { dni: "78910", passport: "6789805" },
    activate: function () {
      this.activo = true;
    }
  }
];

const costoAqua = 200;
const costoEmocion = 180;
const costoAlegria = 160;
const costoFrescura = 150;

let contadorAqua = 0;
let contadorEmocion = 0;
let contadorAlegria = 0;
let contadorFrescura = 0;

let sumaTotal = 0;

let productosVendidos = [
  {
    nombre: "Aqua",
    cantidadProductovendido: 0
  },
  {
    nombre: "Emoción",
    cantidadProductovendido: 0
  },
  {
    nombre: "Alegría",
    cantidadProductovendido: 0
  },
  {
    nombre: "Frescura",
    cantidadProductovendido: 0
  }
];

let tipoProductos = null;
let cantidadProducto = 0;
let prod = null;



do {

  tipoProductos = parseInt(
    prompt(
      "Seleccione el tipo de producto vendido: " +
        "\n 1. Aqua" +
        "\n 2. Emoción" +
        "\n 3. Alegría" +
        "\n 4. Frescura" +
        "\n 5. Salir"
    )
  );

  if (tipoProductos !== 5) {
    cantidadProducto = parseInt(
      prompt(
        `Digite la cantidad de productos ${
          productos[tipoProductos - 1].nombre
        } vendidos`
      )
    );
  }

  switch (tipoProductos) {
    case 1:
      contadorAqua += cantidadProducto;
      sumaTotal += contadorAqua * costoAqua;
      productosVendidos[tipoProductos - 1].cantidadProductovendido = contadorAqua;
      break;
    case 2:
      contadorEmocion += cantidadProducto;
      sumaTotal += contadorEmocion * costoEmocion;
      productosVendidos[tipoProductos - 1].cantidadProductovendido = contadorEmocion;
      break;
    case 3:
      contadorAlegria += cantidadProducto;
      sumaTotal += contadorAlegria * costoAlegria;
      productosVendidos[tipoProductos - 1].cantidadProductovendido = contadorAlegria;
      break;
    case 4:
      contadorFrescura += contadorFrescura;
      sumaTotal += contadorFrescura * costoFrescura;
      productosVendidos[tipoProductos - 1].cantidadProductovendido = contadorFrescura;
      break;

    default:
      vendedores[0].tipoProductos = productosVendidos;
      alert(`¡Vuelva Pronto!`);
      break;
  }
  console.log(tipoProductos);
} while (tipoProductos !== 5 || tipoProductos <= 0);

let pd = "";

productosVendidos.forEach(
  (producto) => {
    pd += `${producto.nombre} `;
    pd += `${producto.cantidadProductovendido}\n`;
  }
);
alert(`
Resumen de ventas del vendedor ${vendedores[0].nombre}` +
    `\n Los productos vendidos fueron: \n${pd}` +
    `\n La suma total de las ventas fue de: ${sumaTotal}`
);
