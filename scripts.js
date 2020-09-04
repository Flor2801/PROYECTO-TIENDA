const tarjetas = document.getElementsByClassName('tarjeta')
const filtroRating = document.getElementsByClassName('puntaje-review')
const filtroNombre = document.getElementsByName('search')


///////////////// BUSQUEDA CON FILTRO DE TEXTO //////////////////////////////////



// Cuando se enscriba algo en el input //
filtroNombre.oninput = () => {
    // recorro una a una las tarjetas //
    for (let tarjeta of tarjetas) {
    // me fijo el nombre de la tarjeta y que bisco el usuario
    const titulo =  tarjeta.dataset.nombre
    const busqueda = filtroNombre.value;

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

checkbox.onclic = () => {
    //recorro una a una las tarjetas
for (let tarjeta of tarjetas) {

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

