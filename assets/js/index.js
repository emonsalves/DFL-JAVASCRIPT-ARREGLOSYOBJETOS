"use strict";
// Modo estricto para programar

let cantidadCuartos = document.querySelector("#idCuartos");
// console.log(cantidadCuartos);
// Variable en la cual con el selector se le asigna un elemento de nuestra web en este caso input idCuartos

let desdeMetrosCuadrados = document.querySelector("#idMetrosCuadradosDesde");
// Variable en la cual con el selector se le asigna un elemento de nuestra web en estee caso input idMetrosCuadradosDesde


let hastaMetrosCuadrados = document.querySelector("#idMetrosCuadradosHasta")
// Variable en la cual con el selector se le asigna un elemento de nuestra web en este caso input idMetrosCuadradosHasta

let html = "";
// template para cargar e insertarlo en nuestra web

let cantidad = 0;
// Variable cantidad la cual usaremos para enlazar a Total span cantidadPropiedades
let corte = 0;
//Variable usada para generar el corte en la validacion si es 1 avanza para utilizar la funcion seleccionArreglos 
//----------------ARREGLO----------------------------------------
const propiedadesJSON = [
  {
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src:
      "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    rooms: 2,
    m: 170
  },
  {
    name: "Casa de playa",
    description: "Despierta tus días oyendo el oceano",
    src:
      "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    rooms: 2,
    m: 130
  },
  {
    name: "Casa en el centro",
    description: "Ten cerca de ti todo lo que necesitas",
    src:
      "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    rooms: 1,
    m: 80
  },
  {
    name: "Casa rodante",
    description: "Conviertete en un nómada sin salir de tu casa",
    src:
      "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    rooms: 1,
    m: 6
  },
  {
    name: "Departamento",
    description: "Desde las alturas todo se ve mejor",
    src:
      "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    rooms: 3,
    m: 200
  },
  {
    name: "Mansión",
    description: "Vive una vida lujosa en la mansión de tus sueños",
    src: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/FJYA5LJ4PNEIVNBUDMQ66KV6UQ.jpg",
    rooms: 5,
    m: 500
  }
];
//--------------------------------------------------------------

// FUNCION QUE PERMITE TERMINAR LA CARGA HTML PARA LUEGO ASIGNAR LA DENTRO DE ESTA LA FUNCION CARGAINICIAL
window.onload = function () {
  cargaInicial();
}

// Variable en la cual con el selector se le asigna un elemento de nuestra web en este caso BUTTON idBtnBuscar
let eleBtn = document.querySelector("#idBtnBuscar");

//SE ASIGNA UN EVENTO CLICK A NUESTRO BUTTON SE PASA FUNCION VALIDAR UN IF QUE CONDICIONA EL CORTE FUNCION LIMPIAR Y FUNCION SELECCIONARREGLO
eleBtn.addEventListener("click", () => {
  validar(Number(cantidadCuartos.value), Number(desdeMetrosCuadrados.value), Number(hastaMetrosCuadrados.value));

  if (corte === 0) {
    limpiar();

    seleccionArreglo(Number(cantidadCuartos.value), Number(desdeMetrosCuadrados.value), Number(hastaMetrosCuadrados.value));
  }
})

function validar(cuartos, desde, hasta) {
  corte = 0;
  if (cuartos === 0 || desde === 0 || hasta === 0) {
    alert("Faltan campos por llenar")
    corte = 1;
    return;
  };
};
//SE CREA FUNCION VALIDAR EN LA QUE RECIBE 3 PARAMETROS YA ANTES UNIDOS A UN ELEMENTO 

function seleccionArreglo(cuartos, desde, hasta) {
  let cajaCantidad = document.querySelector("#cantidadPropiedades");
  // Variable en la cual con el selector se le asigna un elemento de nuestra web en este caso span id cantidadPropiedades

  let cajaPropiedad = document.querySelector(".propiedades")
  // Variable en la cual con el selector se le asigna un elemento de nuestra web en este caso la clase .propiedades que vendria a ser nuestro contenedor de cards

  for (const conteoPropiedad of propiedadesJSON) {
    //For para recorrer el arreglo
    if (((Number(conteoPropiedad.rooms) >= Number(cuartos) && Number(conteoPropiedad.m) >= Number(desde))) && Number(conteoPropiedad.m) <= Number(hasta)) {
      //If para generar el filtro requerido
      cantidad++; // Agregamos +1 
      template(conteoPropiedad.src, conteoPropiedad.name, conteoPropiedad.rooms, conteoPropiedad.m, conteoPropiedad.description);
    }
  }

  cajaPropiedad.innerHTML = html; // Inyectamos nuestro template dentro de nuestra variable que tomo el elemento de contenedor de cards
  cajaCantidad.innerHTML = cantidad; // Inyectamos la cantidad de propiedades dentro de nuestra variable que tomo el elemento span #cantidadTotales
};

//SE CREA FUNCION DE CARGA SIMILAR A FUNCION SELECCION ARREGLO
function cargaInicial() {
  let cajaCantidad = document.querySelector("#cantidadPropiedades");
  let cajaPropiedad = document.querySelector(".propiedades")
  for (const conteoPropiedad of propiedadesJSON) {
    template(conteoPropiedad.src, conteoPropiedad.name, conteoPropiedad.rooms, conteoPropiedad.m, conteoPropiedad.description);
  }
  cajaPropiedad.innerHTML = html;
  cajaCantidad.innerHTML = cantidad;
}

//SE CREA FUNCION LIMPIAR SIMILAR A FUNCION CARGA INICIAL CON LA DIFERENCIA QUE BORRA LOS ELEMENTOS DENTRO DE NUESTRO CONTENEDOR DE CARDS
function limpiar() {
  html = "";
  cantidad = 0;

  let cajaCantidad = document.querySelector("#cantidadPropiedades");
  let cajaPropiedad = document.querySelector(".propiedades")

  cajaPropiedad.innerHTML = html;
  cajaCantidad.innerHTML = cantidad;
}

// ----------------------------------------FUNCION TEMPLATE ----------------------------------------------------------------
function template(imagen, nombre, piezas, metros, detalle) {
  html +=
    `<div class="propiedad">
      <div class="img" style="background-image: url(${imagen})"></div>
      <section>
        <h5>${nombre}</h5>
        <div class="d-flex justify-content-between">
            <p>Cuartos: ${piezas}</p>
            <p>Metros: ${metros}</p>
        </div>
        <p class="my-3">${detalle}</p>
        <button class="btn btn-info">Ver más</button>
      </section>
    </div>`
}