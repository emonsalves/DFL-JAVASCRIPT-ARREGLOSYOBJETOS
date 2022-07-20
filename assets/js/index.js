"use strict";
let cantidadCuartos = document.querySelector("#idCuartos");
// console.log(cantidadCuartos);

let desdeMetrosCuadrados = document.querySelector("#idMetrosCuadradosDesde");
// console.log(desdeMetrosCuadrados);

let hastaMetrosCuadrados = document.querySelector("#idMetrosCuadradosHasta")
// console.log(hastaMetrosCuadrados)

let html = "";

let cantidad = 0;

let corte = 0;

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

cargaInicial();

let eleBtn = document.querySelector("#idBtnBuscar");
eleBtn.addEventListener("click", () => {
  validar(Number(cantidadCuartos.value), Number(desdeMetrosCuadrados.value), Number(hastaMetrosCuadrados.value));

  // console.log(corte);

  if (corte === 0) {
    limpiar();

    seleccionArreglo(Number(cantidadCuartos.value), Number(desdeMetrosCuadrados.value), Number(hastaMetrosCuadrados.value));
  }
})

function validar(cuartos, desde, hasta) {
  // console.log(cuartos);
  // console.log(desde);
  // console.log(hasta);
  corte = 0;
  if (cuartos === 0 || desde === 0 || hasta === 0) {
    alert("Faltan campos por llenar")
    corte = 1;
    return;
  };
  // console.log("Paso el if de validacion")
};

function seleccionArreglo(cuartos, desde, hasta) {
  // console.log(cuartos);
  // console.log(desde);
  // console.log(hasta);

  let cajaCantidad = document.querySelector("#cantidadPropiedades");
  let cajaPropiedad = document.querySelector(".propiedades")
  for (const conteoPropiedad of propiedadesJSON) {
    if (Number(conteoPropiedad.rooms) >= Number(cuartos) && Number(conteoPropiedad.m) >= Number(desde) && Number(conteoPropiedad.m) <= Number(hasta)) {
      // console.log(conteoPropiedad.name);
      cantidad++;
      html +=
        `<div class="propiedad">
            <div class="img" style="background-image: url(${conteoPropiedad.src})">
            </div>
            <section>
                <h5>${conteoPropiedad.name}</h5>
                <div class="d-flex justify-content-between">
                    <p>Cuartos: ${conteoPropiedad.rooms}</p>
                    <p>Metros: ${conteoPropiedad.m}</p>
                </div>
                <p class="my-3">${conteoPropiedad.description}</p>
                <button class="btn btn-info">Ver más</button>
            </section>
        </div>`

    }
  }
  cajaPropiedad.innerHTML = html;
  cajaCantidad.innerHTML = cantidad;
};

function cargaInicial() {
  let cajaCantidad = document.querySelector("#cantidadPropiedades");
  let cajaPropiedad = document.querySelector(".propiedades")
  for (const conteoPropiedad of propiedadesJSON) {
    cantidad++;
    html +=
      `<div class="propiedad">
    <div class="img" style="background-image: url(${conteoPropiedad.src})">
    </div>
    <section>
        <h5>${conteoPropiedad.name}</h5>
        <div class="d-flex justify-content-between">
            <p>Cuartos: ${conteoPropiedad.rooms}</p>
            <p>Metros: ${conteoPropiedad.m}</p>
        </div>
        <p class="my-3">${conteoPropiedad.description}</p>
        <button class="btn btn-info">Ver más</button>
    </section>
</div>`
  }
  cajaPropiedad.innerHTML = html;
  cajaCantidad.innerHTML = cantidad;
}

function limpiar (){
  html = "";
  cantidad = 0;

  let cajaCantidad = document.querySelector("#cantidadPropiedades");
  let cajaPropiedad = document.querySelector(".propiedades")

  cajaPropiedad.innerHTML = html;
  cajaCantidad.innerHTML = cantidad;
}