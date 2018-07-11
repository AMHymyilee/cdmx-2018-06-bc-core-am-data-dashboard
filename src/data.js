const url = 'https://raw.githubusercontent.com/AMHymyilee/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json';
//
window.getData = () => {
  fetch(url)
    .then(result => result.json())
    .then(result => {
      const students = computeStudentsStats(result);
      drawSearch(students);
      printSearchCampus(students);
      // printSearchStats(students);
      /*
      printGenerationbyCampus(students, campus, generation);*/
      const generationStats = computeGenerationsStats(result);
    });
};

window.addStats = progress => {
  let stats = {};
  let topicsArray = progress.temas;
  console.log(topicsArray);

  stats.completedPercentage = progress.porcentajeCompletado;

  if (progress.porcentajeCompletado <= 60) { // parametros del progreso de las alumnas
    stats.status = 'bottom';
  }
  if (progress.porcentajeCompletado > 60 && progress.porcentajeCompletado < 90) {
    stats.status = 'medium';
  }
  if (progress.porcentajeCompletado >= 90) {
    stats.status = 'high';
  }
  stats.topics = topicsArray;

  let properties = Object.values(topicsArray);
  properties.forEach(content => {
    content.completedPercentage = content.duracionDeTema;
    content.percentageDuration = Math.round((content.duracionTemaCompletado * 100) / content.duracionTema);
    // formula para el promedio de duracion

    let subTopicsArray = content.subtemas; // sacando subtemas
    let subProperties = Object.values(subTopicsArray); // propiedades de los subtemas
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
};

window.computeStudentsStats = laboratoria => { // Pasamos argumento result a parámetro laboratoria
  // console.log(laboratoria);
  let campus = '';
  let generationArray = '';
  let allGenerations = '';
  let allGenerationsContent = '';
  let students = '';
  let studentArray = [];
  let i = 0;

  campus = Object.keys(laboratoria); // traer el nombre de las propiedades
  generationArray = Object.values(laboratoria);

  generationArray.forEach(element => {
    allGenerations = Object.keys(element.generacion);
    allGenerationsContent = Object.values(element.generacion);
    j = 0;
    allGenerationsContent.forEach(student => {
      students = student.estudiantes;
      students.forEach(infoStudent => {
        let stats = addStats(infoStudent.progreso);
        studentArray.push({
          'campus': campus[i],
          'generation': allGenerations[j],
          'name': infoStudent.nombre,
          'email': infoStudent.correo,
          'turn': infoStudent.turno,
          'stats': stats
        });
      });
      j++;
    });
    i++;
  });
  // console.log(studentArray)
  return studentArray;
};

window.filterCampus = (student, search) => {
  let searchResult = [];
  student.forEach(clues => {
    if (clues.campus === search) {
      searchResult.push(clues);
    }
  });
  return searchResult;
};

window.filterStats = (student, search) => {
  let searchResult = [];
  student.forEach(clues => {
    if (clues.stats.status === search) { // if result exist then push to array
      searchResult.push(clues);
    }
  });
  return searchResult;
};


window.filterGenerations = (student, search) => {
  let searchResult = [];
  student.forEach(clues => {
    if (clues.generation === search) { // if result exist then push to array
      searchResult.push(clues);
    }
  });
  return searchResult;
};


window.filterStudents = (student, search) => {
  let searchResult = [];
  student.forEach(clues => {
    if (clues.name.indexOf(search) !== -1) { // if result exist then push to array
      searchResult.push(clues);
    }
  });
  return searchResult;
};


window.computeGenerationsStats = laboratoria => {
  generationArr = [];
  let i = 0;
  let j = 0;
  let sum = 0;
  let campus = Object.keys(laboratoria);
  let generation = Object.values(laboratoria);
  generation.forEach(element => {
    let years = Object.values(element.generacion);
    let generations = Object.keys(element.generacion);
    j = 0;
    years.forEach(students => {
      let estudiantes = students.estudiantes;
      sum = 0;
      estudiantes.forEach(studentInfo => {
        sum += studentInfo.progreso.porcentajeCompletado;
      });
      let average = Math.round(sum / students.estudiantes.length);
      generationArr.push({
        'campus': campus[i],
        'generation': generations[j],
        'average': average,
        'count': estudiantes.length,
      });
      j++;
    });
    i++;
  });
  return generationArr;
};


window.sortStudents = (students, orderBy, orderDirection) => {
  let sortResult = [];
  
};
