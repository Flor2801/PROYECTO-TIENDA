const filtroCategoria = document.getElementsByClassName("tipo");
const filtroRating = document.getElementsByClassName("review");
const filtroNombre = document.getElementById("search");
const tarjetas = document.getElementsByClassName("tarjeta");
const limpiar = document.getElementById("limpieza");



//////////////////////////////  vistas  GRILLA Y LISTA  //////////////////////////


const vistaGrilla = document.getElementById("vista-grilla")
const vistaLista = document.getElementById("vista-lista")
const grilla = document.getElementById("catalogo-grilla")
const descripciones = document.getElementsByClassName("texto-descriptivo")
const detalle = document.getElementById("desc-producto")



vistaGrilla.onclick = () => {
  grilla.classList.remove("catalogo-lista");
  detalle.classList.remove("detalles-lista");

  for (textos of descripciones) {
    textos.classList.add("hidden");
  }
}

vistaLista.onclick = () => {
  grilla.classList.add("catalogo-lista");
  detalle.classList.add("detalles-lista");

  for (textos of descripciones) {
    textos.classList.remove("hidden");
  }
}


/*************************************  FUNCIONES DE FILTRO  ***************************************/

/* FUNCIONES SEGUN TIPO DE BUSQUEDA  */


filtroNombre.oninput = () => {
  filtrarTarjetas ()
}


for (let tipo of filtroCategoria) { 
  tipo.oninput = () => {
    filtrarTarjetas ()
  }
}


for (let punto of filtroRating) {
  punto.oninput = () => {
    filtrarTarjetas ()
  }
}

/////////////////////////////////////////////////////////////////////


const filtrarTarjetas = () => {
  for (let tarjeta of tarjetas) {
    if (pasaFiltros(tarjeta)) {
      mostrarTarjetas(tarjeta)
    }
    else {
      ocultarTarjetas(tarjeta)
    }
  }
}



const mostrarTarjetas = (tarjeta) => {
  return tarjeta.classList.remove("hidden")
}

const ocultarTarjetas = (tarjeta) => {
  return tarjeta.classList.add("hidden")
}




const pasaFiltros = (tarjeta) => {

  if (filtroInputEscrito(tarjeta)== true && filtroProductos(tarjeta) == true && filtroEstrellas(tarjeta)== true) {
    return true
}
else {
    return false
}

}



////////////////// FILTRO INPUT /////////////////

const filtroInputEscrito = (tarjeta) => {
  if (hayAlgoEscritoEnInput()) {
    return coincideBusquedaInputConTarjeta(tarjeta)
}
else {
    return true
}
}

const hayAlgoEscritoEnInput = () => {
  return Boolean(filtroNombre.value)
}

const coincideBusquedaInputConTarjeta = (tarjeta) => {
  const nombreTarjeta = tarjeta.dataset.nombre
  const busquedaUsuario = filtroNombre.value.toLowerCase()
  
  if (nombreTarjeta.includes(busquedaUsuario)) {
      return true
  }
  else {
      return false
  }
}


////////////////// FILTRO CATEGORIA /////////////////

const filtroProductos = (tarjeta) => {
  
  if (hayAlgunTipoChequeado()) {
    return coincideTipoConTarjeta(tarjeta)
}
else {
    return true
}
}

const hayAlgunTipoChequeado = () => {
  for (let tipo of filtroCategoria) {
      if (tipo.checked) {
          return true
      }
  }
  return false
}

const coincideTipoConTarjeta = (tarjeta) => {
  for (let tipo of filtroCategoria) {
      if (tipo.value === tarjeta.dataset.categoria && tipo.checked) {
          return true
      }
      if (tipo.value === "todos" && tipo.checked) {
          return true
      }
  }
  return false
}



////////////////// FILTRO PUNTAJE /////////////////


const filtroEstrellas = (tarjeta) => {
  
  if (hayAlgunPuntoSeleccionado()) {
    return coincidePuntoConTarjeta(tarjeta)
}
else {
    return true
}
}

const hayAlgunPuntoSeleccionado = () => {
  for (let punto of filtroRating) {
      if (punto.checked) {
          return true
      }
  }
  return false
}

const coincidePuntoConTarjeta = (tarjeta) => {
  for (let punto of filtroRating) {
      if (punto.value === tarjeta.dataset.rating && punto.checked) {
          return true
      }
     
  }
  return false
}



/////////////////////////////////   LIMPIAR   /////////////////////////////////


limpiar.onclick = () => {

  for (cards of tarjetas) {
  cards.classList.remove('hidden')
  }

for (punto of filtroRating) {
     punto.checked = false;
     if (punto.checked = false) {
        tarjeta.classList.remove('hidden');
        } 
    }

for (tipo of filtroCategoria) {
     tipo.checked = false;
     if (tipo.checked = false) {
        tarjeta.classList.remove('hidden');
        } 
}

filtroNombre.value = "";

}


//////////////////////////  ABRIR CARRITO   ////////////////////////////////

const carrito = document.getElementById("abrir-carrito");
const menu = document.getElementById("menu-compra");
const cerrar = document.getElementById("cerrar");
const overlay = document.getElementById("overlay");
const body = document.getElementsByTagName("body");


carrito.onclick = () => {
  overlay.classList.remove('hidden');
  overlay.classList.add('no_scroll');
};


cerrar.onclick = () => {
  overlay.classList.add('hidden');
};


//////////////////////////  ABRIR FILTRO RESPONSIVE  ////////////////////////////////


const embudo = document.getElementById("ico-filtros-responsive");
const filtroResponsive = document.getElementById("fil-responsive");

console.log(embudo)
console.log(filtroResponsive)

embudo.onclick = () => { 
  filtroResponsive.classList.remove('hidden');
};


//////////////////////////////// MODAL CHECKOUT ///////////////////////////


const botonSeguir = document.getElementsByClassName("seguir")
const botonFinalizar = document.getElementsByClassName("finalizar")
const modalCheckout = document.getElementsByClassName("modal-compra")

console.log(botonSeguir)
console.log(botonFinalizar)
console.log(modalCheckout)

botonSeguir.onclick = () => {
  modalCheckout.classList.add('hidden');
}

botonFinalizar.onclick = () => {
  modalCheckout.classList.add('hidden');
}


////////////////////////////////   AGRAGR PRODUCTOS AL CARRITO  //////////////////////////////////

/* TEST ALTERNATIVO
comprar.onclick = () => {

for (let item of Items) {
  if (comprar.datanombre.nombre === item.dataset.nombre) {
    item.classList.remove("hidden")
  }
}
}
*/

const carro = document.getElementById("menu-compra")
const aviso = document.getElementById("descripcion-carrito")

const agregaSamsung1 = document.getElementById("compra-samsung-1")
const itemSamsung1 = document.getElementById("ver-samsung-1")
const quitar = document.getElementById("ico-samsung1")


agregaSamsung1.onclick = () => {
  itemSamsung1.classList.remove("hidden")
  itemSamsung1.classList.add("selected") 
  aviso.classList.add("hidden")
  carro.appendChild(itemSamsung1)
}



const itemPlay = document.getElementById("ver-item-play")
const agregaPlay = document.getElementById("compra-play")


agregaPlay.onclick = () => {
  itemPlay.classList.remove("hidden")
  itemPlay.classList.add("selected") 
  aviso.classList.add("hidden")
  carro.appendChild(itemPlay)
}



const itemNokia = document.getElementById("ver-item-nokia")
const agregaNokia = document.getElementById("compra-nokia")


agregaNokia.onclick = () => {
  itemNokia.classList.remove("hidden")
  itemNokia.classList.add("selected") 
  aviso.classList.add("hidden")
  carro.appendChild(itemNokia)
}



const itemSamsung2 = document.getElementById("ver-samsung2")
const agregaSamsung2 = document.getElementById("compra-samsung2")






///////////////////////  MODAL VACIAR CARRTIO  ////////////////////////////////


const vaciarCarrito = document.getElementById("carrito-vaciar")
const overlayVaciar = document.getElementById("overlay-vaciar")
const botonCancelarModal = document.getElementById("boton-modal-vaciar")
const botonVaciarModal = document.getElementById("boton-modal-cancelar")

botonCancelarModal.onclick = () => {
  overlayVaciar.classList.add("hidden")
}

botonVaciarModal.onclick = () => {
  overlayVaciar.classList.add("hidden")
}




/*

//////////////////////   SUBTOTAL CARRITO   /////////////////////////

actualizarSubtotal = () => {
  subtotal.textContent = selectorCel.value*5000 + selectorPcs.value*30000
   
}



//////////////////////   SELECCION CANTIDAD DE PRODUCTOS  /////////////////////////

selectorCel.onclick = () => {
  const precioCel = document.getElementById("precio-cel")
  const subtotal = document.getElementById("subtotal")
celularesTotales.textContent = selectorCel.value*5000
subtotal.textContent = celularesTotales.textContent

actualizarSubtotal()

}



//////////////////////   BOTON ELIMINAR DE LA TARJETA  /////////////////////////


quitar.onclick = () => {
  itemSamsung2.classList.add("hidden")
  itemSamsung2.classList.remove("selected") 
  celularesTotales.textContent = 0
  selectorCel.value = 0
}


*/

