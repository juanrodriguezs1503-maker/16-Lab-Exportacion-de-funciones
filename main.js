import { PI, IVA , DIAS_SEMANA} from "./constantes.js";
import { sumar, restar, multiplicar, areaCirculo, calcularTotal, aplicarImpuestos, aplicarDescuento} from "./operaciones-matematicas.js";
import { crearUsuario } from "./usuarios.js"
import { ROLES } from "./usuariosConstantes.js";

// ***** INTEGRANTES *****
// Juan Felipe González
// Juan Camilo Rodríguez
// Santiago Ramírez 

// ***** PRIMER EJERCICIO *****

console.log("\nEJERCICIO 1")

// Área de círculo con radio 5 (PI * radio²)
const radio = 5;
const area = PI * radio ** 2;
console.log(`El área del círculo con radio ${radio} es: ${area}`);

// Precio con IVA de producto que cuesta 100
const precio = 100;
const precioConIVA = precio + (precio * IVA);
console.log(`El precio total del producto es: ${precioConIVA}`);

console.log("El tercer día es: " + DIAS_SEMANA[2])

// ***** SEGUNDO EJERCICIO *****

console.log("\nEJERCICIO 2")
console.log("Operaciones matemáticas:");
console.log(`Suma: 10 + 5 = ${sumar(10, 5)}`);
console.log(`Resta: 10 - 5 = ${restar(10, 5)}`);
console.log(`Multiplicación: 10 * 5 = ${multiplicar(10, 5)}`);
console.log(`Área de círculo con radio 7: ${areaCirculo(7)}`);

// ***** TERCER EJERCICIO *****

console.log("\nEJERCICIO 3")

console.log("\nSolo el total (Precio * cantidad)")
console.log("Producto 1: Precio sin impuesto 200, cantidad 3, total: " + calcularTotal(200, 3));
console.log("Producto 2: Precio sin impuesto 150, cantidad 2, total: " + calcularTotal(150, 2));
console.log("Producto 3: Precio sin impuesto 380, cantidad 5, total: " + calcularTotal(380, 5));

console.log("\nTotal + impuestos (Total + IVA)")
console.log("Producto 1 con impuestos: " + aplicarImpuestos(calcularTotal(200,3)));
console.log("Producto 2 con impuestos: " + aplicarImpuestos(calcularTotal(150, 2)));
console.log("Producto 3 con impuestos: " + aplicarImpuestos(calcularTotal(380, 5)));

console.log("\nValor final ((total + IVA) - Descuento)")
console.log("Producto 1 con el 10%: " + aplicarDescuento(aplicarImpuestos(calcularTotal(200,3))));
console.log("Producto 2 con el 10%: " + aplicarDescuento(aplicarImpuestos(calcularTotal(150, 2))));
console.log("Producto 3 con el 10%: " + aplicarDescuento(aplicarImpuestos(calcularTotal(380, 5))));

// ***** CUARTO EJERCICIO *****

console.log("\nEJERCICO 4")

const usuario01 = crearUsuario("Pedro", ROLES.ADMIN)
const usuario02 = crearUsuario("Carlos", ROLES.CLIENTE)

console.log(usuario01)
console.log(usuario02)