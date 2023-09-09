// const { saludar, saludo2 } = require('./saludos.js')

// console.log(saludar("Darwin"));
// console.log(saludo2());

let listaDeTareas = [{
    id: "tarea1",
    descripcion: "sacar al perro",
    estaCompletada: false
},
{
    id: "tarea2",
    descripcion: "pagar la luz",
    estaCompletada: false 
}];

function mostrarTareas (){
    console.log(listaDeTareas);
}



function añadirTarea(id, descripcion){

    let nuevaTarea = {
        id:id,
        descripcion: descripcion,
        estaCompletada: false
    };

    listaDeTareas.push(nuevaTarea);
   
};

añadirTarea("tarea3", "bañarme");
añadirTarea("tarea4", "desayunar");
añadirTarea("tarea5", "hacer ejercicio");



function eliminarTarea (id) {
    listaDeTareas = listaDeTareas.filter(tarea => tarea.id !== id )
};

eliminarTarea("tarea4");

mostrarTareas();

