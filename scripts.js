const filtroRating = document.getElementsByClassName("review");
const filtroNombre = document.getElementById("search");
const tarjetas = document.getElementsByClassName("tarjeta");
const filtroCategoria = document.getElementsByClassName("tipo");
const campoTexto = document.getElementById("search");
const limpiar = document.getElementById("limpieza")


///////////////// BUSQUEDA CON FILTRO DE TEXTO /////////////////////////////

filtroNombre.oninput = () => {
  for (let card of tarjetas) {
    const input = filtroNombre.value;
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

///////////////// BUSQUEDA POR PUNTAJE  ///////////////////////////////

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



//////////////////////////   LIMPIAR   /////////////////////////////////

limpiar.onclick = () => {

for (let punto of filtroRating) {
     punto.checked = false;
     if (punto.checked = false) {
        tarjeta.classList.remove('hidden');
        } 
    }

for (let tipo of filtroCategoria) {
     tipo.checked = false;
     if (tipo.checked = false) {
        tarjeta.classList.remove('hidden');
        } 
}

campoTexto.value = "";

}


//////////////////////////  ABRIR CARRITO   ////////////////////////////////

const carrito = document.getElementById("abrir-carrito");
const menu = document.getElementById("menu-compra");
const cerrar = document.getElementById("cerrar");
const overlay = document.getElementById("overlay");
const body = document.getElementsByTagName('body');

carrito.onclick = () => {
  overlay.classList.remove("hidden");
  body.classList.add("no-scroll");
  
};

cerrar.onclick = () => {
  overlay.classList.add("hidden");
};
