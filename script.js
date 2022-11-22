// Variables
let carritoCliente =[]
let baseDeDatos = [
    {
        id: 1,
        nombre: 'Collar Surfer',
        precio: 650,
        imagen: ''
    },
    {
        id: 2,
        nombre: 'Collar Simona',
        precio: 650,
        imagen: ''
    },
    {
        id: 3,
        nombre: 'Collar Rainbow',
        precio: 650,
        imagen: ''
    },
    {
        id: 4,
        nombre: 'Collar Soft Pink',
        precio: 650,
        imagen: ''
    },
    {
        id: 5,
        nombre: 'Collar Liana',
        precio: 650,
        imagen: ''
    },
    {
        id: 6,
        nombre: 'Collar Perlas',
        precio: 650,
        imagen: ''
    },
    {
        id: 7,
        nombre: 'Collar Lilo',
        precio: 650,
        imagen: ''
    },
    {
        id: 8,
        nombre: 'Aritos Soft Pink',
        precio: 300,
        imagen: ''
    },
    {
        id: 9,
        nombre: 'Aritos Green ',
        precio: 300,
        imagen: ''
    },
    ];

    function sumaProductos(item,carritoCliente){
        carritoCliente.push(item)
        console.log(carritoCliente)
    }

let boton = document.getElementById("agregarPera")

boton.addEventListener("click",agregarItem("pera",carritoCliente),true)

const element = document.getElementById("myBtn");




const btnCart = document.querySelector('.container-icon')
const containerCartProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart')
})

let arrayProducto =[]
let Total = 0
function sumaProductos(Valoritem, Producto) {
    arrayProducto.push(Producto)
  Total = Total + Valoritem
  document.getElementById("elTotal").innerHTML = "TOTAL: " + "$" + Total; 
  console.log(arrayProducto);
  document.getElementById("valorProducto").value = Total
  document.getElementById("listaProductos").value=arrayProducto
  return Total}

function Limpiar() {
  Total=0
  document.getElementById("elTotal").innerHTML = "TOTAL: " + "$" + 0; }