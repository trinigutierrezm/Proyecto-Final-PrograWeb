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

    function agregarItem(item,array){
        array.push(item)
        console.log(array)
    }

let boton = document.getElementById("agregarPera")

boton.addEventListener("click",agregarItem("pera",carritoCliente),true)

const element = document.getElementById("myBtn");


