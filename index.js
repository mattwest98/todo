const fecha = document.querySelector('#fecha')
const lista = document.querySelector('#lista')
const input = document.querySelector('#input')
const botonEnter = document.querySelector('#enter')


//Conseguir fecha de hoy
let fechaActual = new Date()
let nombreMeses = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Octubre', 'Noviembre', 'Diciebre'
]

let nombreDelMes = nombreMeses[fechaActual.getMonth()]
let diaDelMes = fechaActual.getDate()

fecha.textContent = `${diaDelMes} de ${nombreDelMes}.`




//agregar tarea
function agregarTarea(tarea){
    const elemento = `<li id='elemento'>
                      <i class="far fa-circle" data="realizado" id="realizado"></i>
        	          <p class="text">${tarea}</p>
                      <i class="fas fa-trash de" data="eliminado" id="eliminado"></i>
                      </li>`
    lista.insertAdjacentHTML("beforeend", elemento)
}

let agregar = () =>{
    const tarea = input.value
    if(tarea){
        agregarTarea(tarea)
    }
    input.value = ''
}

botonEnter.addEventListener('click', agregar)

input.addEventListener('keydown',(event) =>{
    if(event.key === 'Enter'){
        agregar()
    }
})


//eliminar y verificar tarea
lista.addEventListener('click', (event) => {
    const elementoClicado = event.target;

    console.log('Elemento clicado:', elementoClicado);
    if (elementoClicado.classList.contains('fa-trash')) {
        const tareaEliminar = elementoClicado.parentElement;
        tareaEliminar.remove();
    }if (elementoClicado.classList.contains('fa-circle') || elementoClicado.classList.contains('fa-check-circle')) {
        const tarea = elementoClicado.parentElement;
        toggleRealizado(tarea);
    }
});


function toggleRealizado(tarea) {
    const iconoRealizado = tarea.querySelector('.fa-circle');
    const textoTarea = tarea.querySelector('.text');
    iconoRealizado.classList.toggle('fa-circle');
    iconoRealizado.classList.toggle('fa-check-circle');
    textoTarea.classList.toggle('line-through');
}


document.addEventListener('DOMContentLoaded', () =>{
    input.focus()
})