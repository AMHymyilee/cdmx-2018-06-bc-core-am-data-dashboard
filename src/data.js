const url = "https://raw.githubusercontent.com/AMHymyilee/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json";
//
window.getData = () => {
  fetch(url)
    .then(result => result.json())
    .then(result => {
      const students = computeStudentStats(result);
      drawStudents(students);
      drawSearch(students);
    })
}

window.addStats = progress => {
  let stats = {};
  let topicsArray = progress.temas;

  stats.completedPercentage = progress.porcentajeCompletado;

  if (progress.porcentajeCompletado < 60) { //parametros del progreso de las alumnas
    stats.status = "bottom";
  }
  if (progress.porcentajeCompletado > 60 && progress.porcentajeCompletado < 90) {
    stats.status = "medium";
  } else {
    stats.status = "high";
  }
  stats.topics = topicsArray

  let properties = Object.values(topicsArray); 
  properties.forEach(content => {
    content.completedPercentage = content.duracionDeTema;
    content.percentageDuration = Math.round((content.duracionTemaCompletado * 100) / content.duracionTema)
     //formula para el promedio de duracion

    let subTopicsArray = content.subtemas; //sacando subtemas
    let subProperties = Object.values(subTopicsArray); //propiedades de los subtemas
    subProperties.forEach(subContent => { 
      subContent.type = subContent.tipo;
      subContent.duration = subContent.duracionSubtema;
      if (subContent.completado === 1) {
        subContent.completedPercentage = 100;
      } else {
        subContent.completedPercentage = 0;
      }
    });
  });

  return stats;
}

window.computeStudentStats = laboratoria => { //Pasamos argumento result a parámetro laboratoria
  //console.log(laboratoria);
  let campus = "";
  let generationArray = "";
  let allGenerations = "";
  let allGenerationsContent = "";
  let students = "";
  let studentArray = [];
  let i = 0;

  campus = Object.keys(laboratoria); //traer el nombre de las propiedades
  generationArray = Object.values(laboratoria);

  generationArray.forEach(element => {
    allGenerations = Object.keys(element.generacion);
    allGenerationsContent = Object.values(element.generacion)
    allGenerationsContent.forEach(student => {
        j = 0;
      students = student.estudiantes;
      students.forEach(infoStudent => {
        let stats = addStats(infoStudent.progreso);
        studentArray.push({
            "campus":campus[i], 
            "generation":allGenerations[j],
            "name": infoStudent.nombre,
            "email": infoStudent.correo,
            "turn":infoStudent.turno,
            "stats": stats
        })
      });
      j++
    })
    i++;
  });
//console.log(studentArray)
return studentArray;
}

 window.filterStudents = (student, search) => {
     let searchResult = [];
     student.forEach(clues => {
        if (clues.name.indexOf(search) !== -1){ //if result exist then push to array
            searchResult.push(clues);
        }
     });
     return searchResult;
 }