// -------------------------
// 1. CREAR ARRAY DE ESTUDIANTES
// -------------------------
let estudiantes = [
  { nombre: "Antonio", calificaciones: [68, 74, 80, 77] },
  { nombre: "Horacio", calificaciones: [95, 90, 98, 92] },
  { nombre: "Lorena", calificaciones: [85, 88, 79, 84] },
  { nombre: "Ana", calificaciones: [90, 92, 88, 86] }
];

// -------------------------
// 2. FUNCIONES REQUERIDAS
// -------------------------

// 2.1 Mostrar estudiantes
function mostrarEstudiantes() {
  estudiantes.forEach(function(estudiante) {
    console.log("Estudiante:", estudiante.nombre);
    let lineaNotas = "";
    estudiante.calificaciones.forEach(function(nota) {
      lineaNotas += nota + " ";
    });
    console.log("Calificaciones:", lineaNotas);
  });
}

// 2.2 Calcular promedio
const calcularPromedio = calificaciones => {
  let suma = calificaciones.reduce((total, nota) => total + nota, 0);
  return Math.round(suma / calificaciones.length);
};

// 2.3 Obtener mejor calificación
const obtenerMejorCalificacion = calificaciones => Math.max(...calificaciones);

// 2.4 Obtener peor calificación
const obtenerPeorCalificacion = calificaciones => Math.min(...calificaciones);

// 2.5 Agregar calificación a estudiante
function agregarCalificacion(nombreEstudiante, nuevaCalificacion) {
  const estudiante = estudiantes.find(est => est.nombre === nombreEstudiante);
  if (estudiante) {
    estudiante.calificaciones.push(nuevaCalificacion);
    console.log(`Se agregó la calificación ${nuevaCalificacion} a ${nombreEstudiante}`);
  } else {
    console.log(`No se encontró al estudiante con nombre ${nombreEstudiante}`);
  }
}

// 2.6 Eliminar última calificación
function eliminarUltimaCalificacion(nombreEstudiante) {
  const estudiante = estudiantes.find(est => est.nombre === nombreEstudiante);
  if (estudiante) {
    if (estudiante.calificaciones.length > 0) {
      const notaEliminada = estudiante.calificaciones.pop();
      console.log(`Se eliminó la calificación ${notaEliminada} de ${nombreEstudiante}`);
    } else {
      console.log(`${nombreEstudiante} no tiene calificaciones para eliminar`);
    }
  } else {
    console.log(`No se encontró al estudiante con nombre ${nombreEstudiante}`);
  }
}

// 2.7 Filtrar estudiantes aprobados
function filtrarEstudiantesAprobados(promedioMinimo) {
  return estudiantes.filter(estudiante => {
    const promedio = calcularPromedio(estudiante.calificaciones);
    return promedio >= promedioMinimo;
  });
}

// 2.8 Ordenar estudiantes por nombre
function ordenarEstudiantesPorNombre() {
  estudiantes.sort((a, b) => a.nombre.localeCompare(b.nombre));
  console.log("Estudiantes ordenados alfabéticamente por nombre.");
}

// 2.9 Generar reporte individual
function generarReporteIndividual(nombreEstudiante) {
  const estudiante = estudiantes.find(est => est.nombre === nombreEstudiante);
  if (estudiante) {
    const promedio = calcularPromedio(estudiante.calificaciones);
    const mejor = obtenerMejorCalificacion(estudiante.calificaciones);
    const peor = obtenerPeorCalificacion(estudiante.calificaciones);

    console.log("Reporte de", estudiante.nombre);
    console.log("Calificaciones:", estudiante.calificaciones.join(" "));
    console.log("Promedio:", promedio);
    console.log("Mejor calificación:", mejor);
    console.log("Peor calificación:", peor);
  } else {
    console.log("No se encontró al estudiante con nombre", nombreEstudiante);
  }
}

// 3. Menú Interactivo
function menuInteractivo() {
  let opcion;
  do {
    opcion = prompt(`MENÚ:
1. Mostrar estudiantes
2. Agregar calificación
3. Eliminar calificación
4. Generar reporte individual
5. Filtrar aprobados
6. Ordenar por nombre
7. Salir`);

    switch (opcion) {
      case "1":
        mostrarEstudiantes();
        break;
      case "2":
        let nombre = prompt("Nombre del estudiante:");
        let nota = parseInt(prompt("Nota a agregar:"));
        agregarCalificacion(nombre, nota);
        break;
      case "3":
        let nombreDel = prompt("Nombre del estudiante:");
        eliminarUltimaCalificacion(nombreDel);
        break;
      case "4":
        let nombreRep = prompt("Nombre del estudiante:");
        generarReporteIndividual(nombreRep);
        break;
      case "5":
        let minimo = parseInt(prompt("Promedio mínimo:"));
        let aprobados = filtrarEstudiantesAprobados(minimo);
        aprobados.forEach(est => {
          console.log(`${est.nombre} - Promedio: ${calcularPromedio(est.calificaciones)}`);
        });
        break;
      case "6":
        ordenarEstudiantesPorNombre();
        mostrarEstudiantes();
        break;
      case "7":
        alert("Fin del programa.");
        break;
      default:
        alert("Opción inválida");
    }
  } while (opcion !== "7");
}




// -------------------------
// 4. PRUEBAS (si no usas menú con prompt)
// -------------------------
function iniciarGestionCalificaciones() {
  console.log("1. Mostrar estudiantes actuales:");
  mostrarEstudiantes();

  console.log("\n2. Agregar nueva calificación a Horacio:");
  agregarCalificacion("Horacio", 100);

  console.log("\n3. Eliminar última calificación de Lorena:");
  eliminarUltimaCalificacion("Lorena");

  console.log("\n4. Generar reporte individual de Horacio:");
  generarReporteIndividual("Horacio");

  console.log("\n5. Filtrar estudiantes con promedio mayor o igual a 80:");
  const aprobados = filtrarEstudiantesAprobados(80);
  aprobados.forEach(est => {
    console.log(`${est.nombre} - Promedio: ${calcularPromedio(est.calificaciones)}`);
  });

  console.log("\n6. Ordenar estudiantes por nombre:");
  ordenarEstudiantesPorNombre();
  mostrarEstudiantes();
}

// Ejecutar menú interactivo (Punto 3)
menuInteractivo();

// iniciarGestionCalificaciones(); // Comentado porque ya usamos menú real
