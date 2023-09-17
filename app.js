const readline = require('node:readline');

let listaDeTareas = [{
    id: "1",
    descripcion: "sacar al perro",
    estaCompletada: false
},
{
    id: "2",
    descripcion: "pagar la luz",
    estaCompletada: false 
}];

function mostrarTareas (){
    console.log(listaDeTareas);
}


function agregarTarea(id, descripcion){

    let nuevaTarea = {
        id:id,
        descripcion: descripcion,
        estaCompletada: false
    };

    listaDeTareas.push(nuevaTarea);
   
};

agregarTarea("3", "bañarme");
agregarTarea("4", "desayunar");
agregarTarea("5", "hacer ejercicio");


function eliminarTarea (id) {
    listaDeTareas = listaDeTareas.filter(tarea => tarea.id !== id )
};

eliminarTarea("4");
    
function completarTarea ( id ) {

    let tareaCompletada = listaDeTareas.find(tarea => tarea.id === id);

    if(tareaCompletada) {
        tareaCompletada.estaCompletada = true;
    } else {
        console.log('no se encontro la tarea');
    }
};

completarTarea("1");
completarTarea("2");


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Elige un comando: (1)mostrar tareas , (2)añadir tarea, (3)completar tarea, (4)Eliminar tarea', (respuesta) => {
     
     console.log(`Haz elegido ${respuesta}`)

     switch (respuesta) {
        case '1':
            console.log(mostrarTareas())
            break;
            case '2':
                rl.question('Ingrese el ID de la nueva tarea: ', (id) => {
                    rl.question('Ingrese la descripción de la nueva tarea: ', (descripcion) => {
                        rl.question('¿La tarea está completada? (true/false): ', (estaCompletada) => {
                            agregarTarea(id, descripcion, estaCompletada === 'false');
                            console.log('Tarea agregada con éxito.');
                            rl.close();
                        });
                    });
                });
            break;
        case '3':
            rl.question('ingrese el id de la tarea que desea completar: ', (id)=> {
                completarTarea( id );
                console.log('Tarea completada con éxito.');
                rl.close();
            });
            break;
        case '4':
            rl.question('ingrese el id de la tarea que desea eliminar: ', (id)=> {
                eliminarTarea( id );
                console.log('Tarea elimanada con éxito.');
                rl.close();            
           });
           break;
           default:
            console.log('Comando no reconocido.');
            rl.close();
            break;
      
    }});