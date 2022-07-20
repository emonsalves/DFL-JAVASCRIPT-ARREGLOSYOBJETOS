"use strict";

// const data = ['Javiera', 'Camila', 'Francisco', 'Jorge',
//     'Daniela']
// const d = document.querySelector("#dynamic-content")
// for (let item of data) {
//     d.innerHTML += `<li> ${item} </li>`
// }

// const escalaMayorDeDo = ["Do","Re","Mi","Fa","Sol", "La","Si","Do"];

// const b = document.querySelector("#dynamic-content");
// for ( let escala of escalaMayorDeDo) {
//     b.innerHTML += `<li> ${escala} </li>`;
// }

// let data = ['Javiera', 'Camila', 'Francisco', 'Jorge', 'Daniela']
// let html = "";
// let d = document.querySelector("#dynamic-content");

// for (let item of data){
// html += `<li> ${item} </li>`;
// }

// d.innerHTML = html;

// const persona = {
//     nombre: "Pedro",
//     apellido: "Perez",
//     profesion: "Frontend Developer",
//     hobby: "Trekking"
//    }
// console.log(persona.hobby);

// const articulo = {
//     id: 31,
//     titulo: "Autos nuevos en Chile",
//     subtitulo: "El mercado de autos se normaliza",
//     descripcion: "No es novedad que los precios    de los autos usados se han disparado debido    a la falta en stock de autos nuevos, sin embargo puede que esto esté llegando a su fin…"
// };

// const articulosSection =
//     document.querySelector(".articulos")
// articulosSection.innerHTML = `
// <article class="articulo">
// <h4>${articulo.titulo}</h4>
// <h6>${articulo.subtitulo}</h6>
// <p>${articulo.descripcion}</p>
// <a
// href="/articulo/${articulo.id}"><butto
// n>Ver más</button></a>
// </article>
// `;

// const producto = {
//     id: 43,
//     titulo: "Cafetera magnética",
//     precio: 23990,
//     color: "rojo",
//     src: "...", // ingresa aquí la URL de la imagen,
//     descripcion: `Calienta tu café matutino con la nueva tecnología magnética`
// };

// const productoSection =
//     document.querySelector(".productos")
// productoSection.innerHTML = 
// `<article class="productos">
// <h4>${producto.titulo}</h4>
// <h6>${producto.precio}</h6>
// <p>${producto.descripcion}</p>
// <a href="/producto/${producto.id}"><button>Ver más</button></a>
// </article>`

const iconos = [
    { icono: "🚗", descripcion: "Auto" },
    { icono: "🤖", descripcion: "Robot" },
    { icono: "👻", descripcion: "Fantasma" },
    { icono: "👽", descripcion: "Alien" },
    { icono: "🦷", descripcion: "Diente" },
    { icono: "🕹", descripcion: "Joystick" }
];

const iconoElement = document.querySelector(".iconos")

let html ="";
for(const conteoIcono of iconos){
    html += 
    `<article class="iconos">
    <h4>${conteoIcono.icono}</h4>
    <h6>${conteoIcono.descripcion}</h6>
    </article>`
};

iconoElement.innerHTML = html;