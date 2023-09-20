// const readline = require('node:readline');

let listaDeTareas = [{
    id: "1",
    descripcion: "Sacar al perro",
    estado: 'Pendiente'
},
{
    id: "2",
    descripcion: "Pagar la luz",
    estado: 'Pendiente' 
}];

function mostrarTareas (){
    console.log(listaDeTareas);
}

function agregarTarea(id, descripcion, estado) {
    return new Promise((resolve, reject) => {
        const nuevaTarea = {
            id:id,
            descripcion: descripcion,
            estado: estado
        };
        listaDeTareas.push(nuevaTarea);
        console.log('Tarea agregada:', nuevaTarea);
        resolve(nuevaTarea);
    });
   
};


function eliminarTarea (id) {
    return new Promise((resolve, reject)=> {
        listaDeTareas = listaDeTareas.filter(tarea => tarea.id !== id);
        resolve()
    })
};


function completarTarea ( id ) {
    return new Promise((resolve, reject)=> {
        let tarea = listaDeTareas.find(tarea => tarea.id === id);
        if(tarea) {
            tarea.estado = "Hecho";
            resolve(tarea);
        } else {
            console.log('No se encontro la tarea');
            reject('tarea no encontrada')
        };
        
    });
    
};

completarTarea("1")
  .then(resultado => {
    console.log('Tarea completada:', resultado);
  })
  .catch(error => {
    console.error(error);
  });

async function comandos() {
    await agregarTarea("3", "Sacar al perro", 'Pendiente');
    await agregarTarea("4", "Pagar la luz", 'Pendiente');
    await agregarTarea("5", "bailar mucho", "pendiente")
    mostrarTareas();
  
    try {
    //   await completarTarea("1");
      await eliminarTarea("2");
      mostrarTareas();
    } catch (error) {
      console.error(error);
    }
  }


  
  comandos();



