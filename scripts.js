const filtroCategoria = document.getElementsByClassName("tipo");
const filtroRating = document.getElementsByClassName("review");
const filtroNombre = document.getElementById("search");
const tarjetas = document.getElementsByClassName("tarjeta");
const limpiar = document.getElementById("limpieza");

console.log(tarjetas)


//////////////////  FUNCIONES DE FILTRO  ///////////////////////////////

////////////////// FUNCIONES SEGUN TIPO DE BUSQUEDA  ///////////////////


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
  overlay.classList.add('no-scroll');
};


cerrar.onclick = () => {
  overlay.classList.add('hidden');
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


//////////////////////////////  vistas  GRILLA Y LISTA  //////////////////////////

const vistaGrilla = document.getElementById("vista-grilla")
const vistaLista = document.getElementById("vista-lista")
const grilla = document.getElementById("catalogo-grilla")
const lista = document.getElementById("catalogo-lista")

console.log(vistaGrilla)
console.log(vistaLista)
console.log(catalogo)
console.log(catalogoLista)


vistaGrilla.onclick = () => {
  grilla.classList.remove('hidden');
  lista.classList.add('hidden');
}


vistaLista.onclick = () => {
  grilla.classList.add('hidden');
  lista.classList.remove('hidden');
}










////////////////////////  FUNCIONES DE FILTRO  ///////////////////////////////





////////////////// /////////////  /////////////////////  //////////////////
///////////////// BUSQUEDA CON FILTRO DE TEXTO /////////////////////////////
/*

filtroNombre.oninput = () => {

  for (let card of tarjetas) {
    const input = filtroNombre.value.toLowerCase();
    const nombre = card.dataset.nombre;

    if (nombre.includes(input)) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  }
};

///////////////// BUSQUEDA POR CATEGORIAS /////////////////////////////


for (let checkbox of filtroCategoria) {
  checkbox.onclick = () => {
    for (let tarjeta of tarjetas) {
      if (checkbox.checked) {
        const tipo = tarjeta.dataset.categoria;

        if (checkbox.value === tipo) {
          tarjeta.classList.remove("hidden");
        } else {
          tarjeta.classList.add("hidden");
        }
      } else {
        tarjeta.classList.remove("hidden");
      }
    }
  };
}


////////////////////////// BUSQUEDA POR PUNTAJE  ///////////////////////////////



for (let checkbox of filtroRating) {
  // si hacen clic en algun checkbox

checkbox.onclick = () => {
    //recorro una a una las tarjetas
    for (let tarjeta of tarjetas) {
      tarjeta.classList.add("hidden"); 

      if (checkbox.checked) {

      for (let tarj2 of tarjetas) {
        if (tarj2.checked) {
          if (tarj2.value === tarjeta.dataset.rating) {
            tarjeta.classList.remove("hidden");
          } else if (tarj2.value==="") {
            tarjeta.classList.remove("hidden");
          }
    }
 }

}

}

if (checkbox.checked) {
  const rating = tarjeta.dataset.rating;

// veo si el rating es igual al checkbox
  if (checkbox.value === rating) {
    tarjeta.classList.remove("hidden");
  } else {
    tarjeta.classList.add("hidden");
  }

//si el checkbox no esta seleccionado
} else {
  tarjeta.classList.remove("hidden");
}
}

// se cierra for (let tarjeta of tarjetas)
};
// se cierra checkbox.onclic
}



/*

for (let checkbox of filtroRating) {
  // si hacen clic en algun checkbox

checkbox.onclick = () => {
    //recorro una a una las tarjetas
    for (let tarjeta of tarjetas) {
      // si el chackbox esta seleccionado
      if (checkbox.checked) {
        const rating = tarjeta.dataset.rating;

        // veo si el rating es igual al checkbox
        if (checkbox.value === rating) {
          tarjeta.classList.remove("hidden");
        } else {
          tarjeta.classList.add("hidden");
        }

        //si el checkbox no esta seleccionado
      } else {
        tarjeta.classList.remove("hidden");
      }
    }

    // se cierra for (let tarjeta of tarjetas)
  };
  // se cierra checkbox.onclic
}
*/