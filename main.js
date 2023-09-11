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
    tipoProductos: [],
    password: "1234"
  },
  {
    nombre: "Pedro",
    edad: 24,
    tipoProductos: [],
    password: "5678"
  }
];

//Definiedo variables para los radio buttons
const si = document.getElementById("si");
const no = document.getElementById("no");

//Defienedo varible para el contenedor de los radio buttons
const opciones = document.getElementById("contenedor-opcion");

//definiendo valor inicial en el atributo diplay al form
const form = document.getElementById("form");
form.style.display = "none";

//definiendo varibles para el formulario
const iniciar = document.getElementById("iniciar");
const cerrar = document.getElementById("cerrar");

let usuarioLog = null;
const warning = document.getElementById("warning");
warning.style.display = "none";

//definiedo variables para la mostrar los datos del vendedor
const datosVendedor = document.getElementById("datos-vendedor");
datosVendedor.style.display = "none";
const msBienvenido = document.getElementById("user-log");

//datos a asignar en la tabla
const cantidadAqua = document.getElementById("cantidad-aqua");
const totalAqua = document.getElementById("total-aqua");

const cantidadEmocion = document.getElementById("cantidad-emocion");
const totalEmocion = document.getElementById("total-emocion");

const cantidadAlegria = document.getElementById("cantidad-alegria");
const totalAlegria = document.getElementById("total-alegria");

const cantidadFrescura = document.getElementById("cantidad-frecura");
const totalFrecura = document.getElementById("total-frecura");

//Titulo de colaborador
const colaborador = document.getElementById("colaborador-title");

//total de ventas
const totalVentas = document.getElementById("total-ventas");

//boton enviar
const enviar = document.getElementById("enviar");

//seccion cantidad prodcutos
const productosCantidad = document.getElementById("seccion-productos");
productosCantidad.style.display = "none";

//definiendo variables para los campos de cantidad por producto
const numberAqua = document.getElementById("aqua");
const numberEmocion = document.getElementById("emocion");
const numberAlegria = document.getElementById("alegria");
const numberFrescura = document.getElementById("frescura");

const costoAqua = 200;
const costoEmocion = 180;
const costoAlegria = 160;
const costoFrescura = 150;

let contadorAqua = 0;
let contadorEmocion = 0;
let contadorAlegria = 0;
let contadorFrescura = 0;

let AquaTotales = 0;
let EmocionTotales = 0;
let AlegriaTotales = 0;
let FrescuraTotales = 0;

let sumaTotal = 0;


//Agregando función  para validar la opción que eligio el  usuario
function siEsTrabajador() {
  opciones.style.display = "none";
  colaborador.style.display = "none";
  form.style.display = "block";
}
function noEstrabajador() {
  opciones.style.display = "none";
}

//Agregando función de validación, para las credenciales
//digitadas por el usuario
function logIn(e) {
  e.preventDefault()
  const user = document.getElementById("usuario").value;
  const pwd = document.getElementById("password").value;
  const usuario = vendedores.find(
    (usuario) => usuario.nombre === user && usuario.password === pwd
  );

  if (usuario) {
    usuarioLog = usuario;
    opciones.style.display = "none";
    form.style.display = "none";
    msBienvenido.textContent = `${usuarioLog.nombre}`;
    productosCantidad.style.display = "block";
    warning.style.display = "none";
  } else {
    warning.style.display = "block";
    warning.style.fontFamily = "Lobster, cursive";
    warning.style.color = "#9a031e";
    warning.textContent = "Usuario y/o contraseña incorrectos";
  }
  
}

//obteniedo totales por producto
function cantidadProducto(e) {
  e.preventDefault()
  contadorAqua = parseInt(numberAqua.value);
  contadorEmocion = parseInt(numberEmocion.value);
  contadorAlegria = parseInt(numberAlegria.value);
  contadorFrescura = parseInt(numberFrescura.value);

  AquaTotales = contadorAqua * costoAqua;
  sumaTotal += AquaTotales;
  EmocionTotales = contadorEmocion * costoEmocion;
  sumaTotal += EmocionTotales;
  AlegriaTotales = contadorAlegria * costoAlegria;
  sumaTotal += AlegriaTotales;
  FrescuraTotales = contadorFrescura * costoFrescura;
  sumaTotal += FrescuraTotales;

  //estableciendo valores
  cantidadAqua.textContent = contadorAqua;
  totalAqua.textContent = AquaTotales;
  cantidadEmocion.textContent = contadorEmocion;
  totalEmocion.textContent = EmocionTotales;
  cantidadAlegria.textContent = contadorAlegria;
  totalAlegria.textContent = AlegriaTotales;
  cantidadFrescura.textContent = contadorFrescura;
  totalFrecura.textContent = FrescuraTotales;

  //total de ventas
  totalVentas.textContent = sumaTotal;
  productosCantidad.style.display = "none";
  datosVendedor.style.display = "block";
}




function logOut(e) {
  e.preventDefault()
  form.style.display = "none";
  msBienvenido.textContent = "";
  productosCantidad.style.display = "none";
  datosVendedor.style.display = "none";
}



/*
let productosVendidos = [
  {
    producto: "Aqua",
    cantidadProductovendido: 0
  },
  {
    producto: "Emoción",
    cantidadProductovendido: 0
  },
  {
    producto: "Alegría",
    cantidadProductovendido: 0
  },
  {
    producto: "Frescura",
    cantidadProductovendido: 0
  }
];
*/

/*
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
          productosVendidos[tipoProductos - 1].producto
        } vendidos`
      )
    );
  }

  switch (tipoProductos) {
    case 1:
      contadorAqua += cantidadProducto;
      sumaTotal += contadorAqua * costoAqua;
      AquaTotales += contadorAqua * costoAqua;
      productosVendidos[tipoProductos - 1].cantidadProductovendido =
        contadorAqua;
      break;
    case 2:
      contadorEmocion += cantidadProducto;
      sumaTotal += contadorEmocion * costoEmocion;
      EmocionTotales += contadorEmocion * costoEmocion;
      productosVendidos[tipoProductos - 1].cantidadProductovendido =
        contadorEmocion;
      break;
    case 3:
      contadorAlegria += cantidadProducto;
      sumaTotal += contadorAlegria * costoAlegria;
      AlegriaTotales += contadorAlegria * costoAlegria;
      productosVendidos[tipoProductos - 1].cantidadProductovendido =
        contadorAlegria;
      break;
    case 4:
      contadorFrescura += contadorFrescura;
      sumaTotal += contadorFrescura * costoFrescura;
      FrescuraTotales += contadorFrescura * costoFrescura;
      productosVendidos[tipoProductos - 1].cantidadProductovendido =
        contadorFrescura;
      break;

    default:
      usuarioLog.tipoProductos = productosVendidos;
      alert(`¡Vuelva Pronto!`);
      break;
  }
} while (tipoProductos !== 5 || tipoProductos <= 0);

let pd = "";

productosVendidos.forEach((producto) => {
  pd += `${producto.producto} `;
  pd += `${producto.cantidadProductovendido}\n`;
});
*/


si.addEventListener("click", siEsTrabajador);
no.addEventListener("click", noEstrabajador);

iniciar.addEventListener("click", logIn);
enviar.addEventListener("click", cantidadProducto);
cerrar.addEventListener("click", logOut);

/*
alert(
  `
Resumen de ventas del vendedor ${vendedores[0].nombre}` +
    `\n Los productos vendidos fueron: \n${pd}` +
    `\n La suma total de las ventas fue de: ${sumaTotal}`
);*/
