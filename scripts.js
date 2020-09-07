const cards = document.getElementsByClassName('tarjeta')
const filtroRating = document.getElementsByClassName('puntaje-review')
const filtroNombre = document.querySelector("#search")
const titulos = document.querySelectorAll(".title")



///////////////// BUSQUEDA CON FILTRO DE TEXTO //////////////////////////////////


filtroNombre.oninput = () => {
    const titulo = titulos.textContent
    const input = filtroNombre.value

if (titulo.includes(input)) {
    console.log ("si")
}
else {
    console.log ("no")
}


}

/*
// Cuando se enscriba algo en el input //
filtroNombre.oninput = () => {
    // recorro una a una las tarjetas //
    for (let tarjeta of cards) {
    // me fijo el nombre de la tarjeta que busco el usuario
    const titulo =  tarjeta.dataset.nombre
    const busqueda = filtroNombre.value
       // si el titulo incluye lo que busco el usuario
    if (titulo.includes(busqueda)) {
        //le quito la clase hidden a la tarjeta
        tarjeta.classList.remove('hidden');
    }  else {
        tarjeta.classList.add('hidden');
    }

    
}

};



///////////////// BUSQUEDA CON CHECKBOX  ///////////////////////////////

for (let checkbox of filtroRating) {

// si hacen clic en algun checkbox 

checkbox.onclick = () => {
    //recorro una a una las tarjetas
for (let tarjeta of cards) {

    // si el chackbox esta seleccionado
    if (checkbox.checked) {
        const rating = tarjeta.dataset.rating;

        // veo si el rating es igual al checkbox
        if (checkbox.value === rating) {
            tarjeta.classList.remove('hidden');
            } 
            else { 
                tarjeta.classList.add('hidden');
            }


            //si el checkbox no esta seleccionado 
        }
        else {
            tarjeta.classList.remove('hidden');
        }
    }


// se cierra for (let tarjeta of tarjetas) 
}
// se cierra checkbox.onclic
};


/////////////////

const campoTexto = document.getElementById('search')
const puntaje = document.getElementsByClassName('puntaje-review')
const limpiar = document.getElementById('limpieza')


console.log (puntaje)


limpiar.onclick = () => {

for (let punto of puntaje) {
     punto.checked = false;
}

campoTexto.value = "  ";


}

*/

