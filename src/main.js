// /////////////////////////////////////////// Imprimir busqueda de alumnas /////////////////
const drawSearch = students => {
  document.getElementById('search').addEventListener('click', (event) => {
    event.preventDefault();
    const name = document.getElementById('name-to-search').value;
    if (name !== '' && name !== ' ') {
      const searchResult = filterStudents(students, name);
      let result = '';
      if (searchResult.length === 0) {
        document.getElementById('no-result').innerHTML = '<p> El termino que esta buscando no existe </p>';
      } else {
        const headerTable = `<thead >
                      <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Sede</th>
                        <th>Generación</th>
                        <th>Correo</th>
                        <th>Progreso</th>
                      </tr>
                     </thead>`;
        searchResult.forEach((element, i) => {
          result += ` <tbody>
                      <tr class="tr-shadow">
                        <th scope="row">${i + 1}</th>
                        <td>${element.name}</td>
                        <td class="desc">${element.campus}</td>
                        <td>${element.generation}</td>
                        <td>
                           <span class="block-email">${element.email}</span>
                        </td>
                       <td>
                          <span class="status--process">${element.stats.completedPercentage} %</span>
                        </td>
                     </tr>
                        <tr class="spacer"></tr>
                      </tbody>`;
        });
        document.getElementById('no-result').innerHTML = '';
        document.getElementById('t-Head').innerHTML = headerTable;
        document.getElementById('table-body').innerHTML = result;
      }
    }
  });
};
// /////////////////////////////////////////// End Imprimir busqueda de alumnas  /////////////////////////////////


// /////////////////////////////////////////// Imprimir  informacion de sedes (generaciones y stats) /////////////////
const printSearchCampus = students => {
  // /////// Boton sedes Lima /////////////////////////////////////////////////////////////7
  document.getElementById('campus-Lima').addEventListener('click', (event) => {
    event.preventDefault();
    const searchResult = filterCampus(students, 'lima');
    // Para imprimir en el DOM
    let result = '';
    
      const headerTable = `<thead >
                      <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Sede</th>
                        <th>Generación</th>
                        <th>Correo</th>
                        <th>Progreso</th>
                      </tr>
                     </thead>`;
      searchResult.forEach((element, i) => {
        result += ` <tbody>
                      <tr class="tr-shadow">
                        <th scope="row">${i + 1}</th>
                        <td>${element.name}</td>
                        <td class="desc">${element.campus}</td>
                        <td>${element.generation}</td>
                        <td>
                           <span class="block-email">${element.email}</span>
                        </td>
                       <td>
                          <span class="status--process">${element.stats.completedPercentage} %</span>
                        </td>
                     </tr>
                        <tr class="spacer"></tr>
                      </tbody>`;
      });
      document.getElementById('no-result').innerHTML = '';
      document.getElementById('t-Head').innerHTML = headerTable;
      document.getElementById('table-body').innerHTML = result;

      const buttonsGeneration = `<button class="au-btn-filter" id="gen3"> 3a Generacion</button>
                                    <button class="au-btn-filter" id="gen4"> 4a Generacion</button>
                                    <button class="au-btn-filter" id="gen5"> 5a Generacion</button>`;

      const buttonsStats = ` <button id="stats-bottom" class="btn btn-outline-danger">(-60)</button>
                                <button id="stats-medium" class="btn btn-outline-warning"> Media </button>
                                <button id="stats-high" class="btn btn-outline-success">(+90)</button>`;

      document.getElementById('stats').innerHTML = buttonsStats;

        // /////////////////////////////////////// filtrando Stats //////////////////////////////////////////////////////////////////////
        document.getElementById('stats-bottom').addEventListener('click', (event) => {
          event.preventDefault();
          let result = '';
          const searchStats = filterStats(searchResult, 'bottom' );
          const headerTable = `<thead >
                      <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Sede</th>
                        <th>Generación</th>
                        <th>Correo</th>
                        <th>Progreso</th>
                      </tr>
                     </thead>`;
          searchStats.forEach((element, i) => {
            result += ` <tbody>
                      <tr class="tr-shadow">
                        <th scope="row">${i + 1}</th>
                        <td>${element.name}</td>
                        <td class="desc">${element.campus}</td>
                        <td>${element.generation}</td>
                        <td>
                           <span class="block-email">${element.email}</span>
                        </td>
                       <td>
                          <span class="status--process">${element.stats.completedPercentage} %</span>
                        </td>
                     </tr>
                        <tr class="spacer"></tr>
                      </tbody>`;
          });
          document.getElementById('no-result').innerHTML = '';
          document.getElementById('t-Head').innerHTML = headerTable;
          document.getElementById('table-body').innerHTML = result;
        });
        document.getElementById('stats-medium').addEventListener('click', (event) => {
          event.preventDefault();
          const searchStats = filterStats(searchResult, 'medium');
          let result = '';
          const headerTable = `<thead >
                      <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Sede</th>
                        <th>Generación</th>
                        <th>Correo</th>
                        <th>Progreso</th>
                      </tr>
                     </thead>`;
          searchStats.forEach((element, i) => {
            result += ` <tbody>
                      <tr class="tr-shadow">
                        <th scope="row">${i + 1}</th>
                        <td>${element.name}</td>
                        <td class="desc">${element.campus}</td>
                        <td>${element.generation}</td>
                        <td>
                           <span class="block-email">${element.email}</span>
                        </td>
                       <td>
                          <span class="status--process">${element.stats.completedPercentage} %</span>
                        </td>
                     </tr>
                        <tr class="spacer"></tr>
                      </tbody>`;
          });
          document.getElementById('no-result').innerHTML = '';
          document.getElementById('t-Head').innerHTML = headerTable;
          document.getElementById('table-body').innerHTML = result;
        });
        document.getElementById('stats-high').addEventListener('click', (event) => {
          event.preventDefault();
          const searchStats = filterStats(searchResult, 'high');
          let result = '';
          const headerTable = `<thead >
                      <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Sede</th>
                        <th>Generación</th>
                        <th>Correo</th>
                        <th>Progreso</th>
                      </tr>
                     </thead>`;
          searchStats.forEach((element, i) => {
            result += ` <tbody>
                      <tr class="tr-shadow">
                        <th scope="row">${i + 1}</th>
                        <td>${element.name}</td>
                        <td class="desc">${element.campus}</td>
                        <td>${element.generation}</td>
                        <td>
                           <span class="block-email">${element.email}</span>
                        </td>
                       <td>
                          <span class="status--process">${element.stats.completedPercentage} %</span>
                        </td>
                     </tr>
                        <tr class="spacer"></tr>
                      </tbody>`;
          });
          document.getElementById('no-result').innerHTML = '';
          document.getElementById('t-Head').innerHTML = headerTable;
          document.getElementById('table-body').innerHTML = result;
        });


        // //////////////////////////////////////////////////////// end filtrando stats /////////////////////////////////////////////////////////////77

      document.getElementById('invisiblebuttons').innerHTML = buttonsGeneration;
      document.getElementById('gen3').addEventListener('click', (event) => {
        event.preventDefault();
        const alreadyFilteredStudents = filterGenerations(searchResult, 'tercera');
        let result = '';
        const headerTable = `<thead >
                      <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Sede</th>
                        <th>Generación</th>
                        <th>Correo</th>
                        <th>Progreso</th>
                      </tr>
                     </thead>`;
        alreadyFilteredStudents.forEach((element, i) => {
          result += ` <tbody>
                      <tr class="tr-shadow">
                        <th scope="row">${i + 1}</th>
                        <td>${element.name}</td>
                        <td class="desc">${element.campus}</td>
                        <td>${element.generation}</td>
                        <td>
                           <span class="block-email">${element.email}</span>
                        </td>
                       <td>
                          <span class="status--process">${element.stats.completedPercentage} %</span>
                        </td>
                     </tr>
                        <tr class="spacer"></tr>
                      </tbody>`;
        });
        document.getElementById('no-result').innerHTML = '';
        document.getElementById('t-Head').innerHTML = headerTable;
        document.getElementById('table-body').innerHTML = result;
      });
      document.getElementById('gen4').addEventListener('click', (event) => {
        event.preventDefault();
        const alreadyFilteredStudents = filterGenerations(searchResult, 'cuarta');
        let result = '';
        const headerTable = `<thead >
                      <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Sede</th>
                        <th>Generación</th>
                        <th>Correo</th>
                        <th>Progreso</th>
                      </tr>
                     </thead>`;
        alreadyFilteredStudents.forEach((element, i) => {
          result += ` <tbody>
                      <tr class="tr-shadow">
                        <th scope="row">${i + 1}</th>
                        <td>${element.name}</td>
                        <td class="desc">${element.campus}</td>
                        <td>${element.generation}</td>
                        <td>
                           <span class="block-email">${element.email}</span>
                        </td>
                       <td>
                          <span class="status--process">${element.stats.completedPercentage} %</span>
                        </td>
                     </tr>
                        <tr class="spacer"></tr>
                      </tbody>`;
        });
        document.getElementById('no-result').innerHTML = '';
        document.getElementById('t-Head').innerHTML = headerTable;
        document.getElementById('table-body').innerHTML = result;
      });
      document.getElementById('gen5').addEventListener('click', (event) => {
        event.preventDefault();
        const alreadyFilteredStudents = filterGenerations(searchResult, 'quinta');
        let result = '';
        const headerTable = `<thead >
                      <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Sede</th>
                        <th>Generación</th>
                        <th>Correo</th>
                        <th>Progreso</th>
                      </tr>
                     </thead>`;
        alreadyFilteredStudents.forEach((element, i) => {
          result += ` <tbody>
                      <tr class="tr-shadow">
                        <th scope="row">${i + 1}</th>
                        <td>${element.name}</td>
                        <td class="desc">${element.campus}</td>
                        <td>${element.generation}</td>
                        <td>
                           <span class="block-email">${element.email}</span>
                        </td>
                       <td>
                          <span class="status--process">${element.stats.completedPercentage} %</span>
                        </td>
                     </tr>
                        <tr class="spacer"></tr>
                      </tbody>`;
        });
        document.getElementById('no-result').innerHTML = '';
        document.getElementById('t-Head').innerHTML = headerTable;
        document.getElementById('table-body').innerHTML = result;
      });
  });
  // /////// Boton sedes Mexico /////////////////////////////////////////////////////////////7
  document.getElementById('campus-Mexico').addEventListener('click', (event) => {
    event.preventDefault();
    const searchResult = filterCampus(students, 'mexico');
    // Para imprimir en el DOM
    let result = '';
    
      const headerTable = `<thead >
                      <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Sede</th>
                        <th>Generación</th>
                        <th>Correo</th>
                        <th>Progreso</th>
                      </tr>
                     </thead>`;
      searchResult.forEach((element, i) => {
        result += ` <tbody>
                      <tr class="tr-shadow">
                        <th scope="row">${i + 1}</th>
                        <td>${element.name}</td>
                        <td class="desc">${element.campus}</td>
                        <td>${element.generation}</td>
                        <td>
                           <span class="block-email">${element.email}</span>
                        </td>
                       <td>
                          <span class="status--process">${element.stats.completedPercentage} %</span>
                        </td>
                     </tr>
                        <tr class="spacer"></tr>
                      </tbody>`;
      });
      document.getElementById('no-result').innerHTML = '';
      document.getElementById('t-Head').innerHTML = headerTable;
      document.getElementById('table-body').innerHTML = result;
    const buttonsGeneration = `<button class="au-btn-filter" id="gen3"> 3a Generacion</button>
                                    <button class="au-btn-filter" id="gen4"> 4a Generacion</button>
                                    <button class="au-btn-filter" id="gen5"> 5a Generacion</button>`;

    const buttonsStats = ` <button id="stats-bottom" class="btn btn-outline-danger">(-60)</button>
                                <button id="stats-medium" class="btn btn-outline-warning"> Media </button>
                                <button id="stats-high" class="btn btn-outline-success">(+90)</button>`;

    document.getElementById('stats').innerHTML = buttonsStats;
     // /////////////////////////////////////// filtrando Stats //////////////////////////////////////////////////////////////////////
     document.getElementById('stats-bottom').addEventListener('click', (event) => {
       event.preventDefault();
       let result = '';
       const searchStats = filterStats(searchResult, 'bottom');
       const headerTable = `<thead >
                      <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Sede</th>
                        <th>Generación</th>
                        <th>Correo</th>
                        <th>Progreso</th>
                      </tr>
                     </thead>`;
       searchStats.forEach((element, i) => {
         result += ` <tbody>
                      <tr class="tr-shadow">
                        <th scope="row">${i + 1}</th>
                        <td>${element.name}</td>
                        <td class="desc">${element.campus}</td>
                        <td>${element.generation}</td>
                        <td>
                           <span class="block-email">${element.email}</span>
                        </td>
                       <td>
                          <span class="status--process">${element.stats.completedPercentage} %</span>
                        </td>
                     </tr>
                        <tr class="spacer"></tr>
                      </tbody>`;
       });
       document.getElementById('no-result').innerHTML = '';
       document.getElementById('t-Head').innerHTML = headerTable;
       document.getElementById('table-body').innerHTML = result;
     });
     document.getElementById('stats-medium').addEventListener('click', (event) => {
       event.preventDefault();
       const searchStats = filterStats(searchResult, 'medium');
       let result = '';
       const headerTable = `<thead >
                      <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Sede</th>
                        <th>Generación</th>
                        <th>Correo</th>
                        <th>Progreso</th>
                      </tr>
                     </thead>`;
       searchStats.forEach((element, i) => {
         result += ` <tbody>
                      <tr class="tr-shadow">
                        <th scope="row">${i + 1}</th>
                        <td>${element.name}</td>
                        <td class="desc">${element.campus}</td>
                        <td>${element.generation}</td>
                        <td>
                           <span class="block-email">${element.email}</span>
                        </td>
                       <td>
                          <span class="status--process">${element.stats.completedPercentage} %</span>
                        </td>
                     </tr>
                        <tr class="spacer"></tr>
                      </tbody>`;
       });
       document.getElementById('no-result').innerHTML = '';
       document.getElementById('t-Head').innerHTML = headerTable;
       document.getElementById('table-body').innerHTML = result;
     });
     document.getElementById('stats-high').addEventListener('click', (event) => {
       event.preventDefault();
       const searchStats = filterStats(searchResult, 'high');
       let result = '';
       const headerTable = `<thead >
                      <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Sede</th>
                        <th>Generación</th>
                        <th>Correo</th>
                        <th>Progreso</th>
                      </tr>
                     </thead>`;
       searchStats.forEach((element, i) => {
         result += ` <tbody>
                      <tr class="tr-shadow">
                        <th scope="row">${i + 1}</th>
                        <td>${element.name}</td>
                        <td class="desc">${element.campus}</td>
                        <td>${element.generation}</td>
                        <td>
                           <span class="block-email">${element.email}</span>
                        </td>
                       <td>
                          <span class="status--process">${element.stats.completedPercentage} %</span>
                        </td>
                     </tr>
                        <tr class="spacer"></tr>
                      </tbody>`;
       });
       document.getElementById('no-result').innerHTML = '';
       document.getElementById('t-Head').innerHTML = headerTable;
       document.getElementById('table-body').innerHTML = result;
     });


     // //////////////////////////////////////////////////////// end filtrando Stats ////////////////////////////////////////////////////7
    document.getElementById('invisiblebuttons').innerHTML = buttonsGeneration;
    document.getElementById('gen3').addEventListener('click', (event) => {
      event.preventDefault();
      const alreadyFilteredStudents = filterGenerations(searchResult, 'tercera');
      let result = '';
      const headerTable = `<thead >
                      <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Sede</th>
                        <th>Generación</th>
                        <th>Correo</th>
                        <th>Progreso</th>
                      </tr>
                     </thead>`;
      alreadyFilteredStudents.forEach((element, i) => {
        result += ` <tbody>
                      <tr class="tr-shadow">
                        <th scope="row">${i + 1}</th>
                        <td>${element.name}</td>
                        <td class="desc">${element.campus}</td>
                        <td>${element.generation}</td>
                        <td>
                           <span class="block-email">${element.email}</span>
                        </td>
                       <td>
                          <span class="status--process">${element.stats.completedPercentage} %</span>
                        </td>
                     </tr>
                        <tr class="spacer"></tr>
                      </tbody>`;
      });
      document.getElementById('no-result').innerHTML = '';
      document.getElementById('t-Head').innerHTML = headerTable;
      document.getElementById('table-body').innerHTML = result;
    });
    document.getElementById('gen4').addEventListener('click', (event) => {
      event.preventDefault();
      const alreadyFilteredStudents = filterGenerations(searchResult, 'cuarta');
      let result = '';
      const headerTable = `<thead >
                      <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Sede</th>
                        <th>Generación</th>
                        <th>Correo</th>
                        <th>Progreso</th>
                      </tr>
                     </thead>`;
      alreadyFilteredStudents.forEach((element, i) => {
        result += ` <tbody>
                      <tr class="tr-shadow">
                        <th scope="row">${i + 1}</th>
                        <td>${element.name}</td>
                        <td class="desc">${element.campus}</td>
                        <td>${element.generation}</td>
                        <td>
                           <span class="block-email">${element.email}</span>
                        </td>
                       <td>
                          <span class="status--process">${element.stats.completedPercentage} %</span>
                        </td>
                     </tr>
                        <tr class="spacer"></tr>
                      </tbody>`;
      });
      document.getElementById('no-result').innerHTML = '';
      document.getElementById('t-Head').innerHTML = headerTable;
      document.getElementById('table-body').innerHTML = result;
    });
    document.getElementById('gen5').addEventListener('click', (event) => {
      event.preventDefault();
      const alreadyFilteredStudents = filterGenerations(searchResult, 'quinta');
      let result = '';
      const headerTable = `<thead >
                      <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Sede</th>
                        <th>Generación</th>
                        <th>Correo</th>
                        <th>Progreso</th>
                      </tr>
                     </thead>`;
      alreadyFilteredStudents.forEach((element, i) => {
        result += ` <tbody>
                      <tr class="tr-shadow">
                        <th scope="row">${i + 1}</th>
                        <td>${element.name}</td>
                        <td class="desc">${element.campus}</td>
                        <td>${element.generation}</td>
                        <td>
                           <span class="block-email">${element.email}</span>
                        </td>
                       <td>
                          <span class="status--process">${element.stats.completedPercentage} %</span>
                        </td>
                     </tr>
                        <tr class="spacer"></tr>
                      </tbody>`;
      });
      document.getElementById('no-result').innerHTML = '';
      document.getElementById('t-Head').innerHTML = headerTable;
      document.getElementById('table-body').innerHTML = result;
    });
  });
  // /////// Boton sedes Santiago /////////////////////////////////////////////////////////////7
  document.getElementById('campus-Santiago').addEventListener('click', (event) => {
    event.preventDefault();
    const searchResult = filterCampus(students, 'santiago');
    // Para imprimir en el DOM
    let result = '';
    
      const headerTable = `<thead >
                      <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Sede</th>
                        <th>Generación</th>
                        <th>Correo</th>
                        <th>Progreso</th>
                      </tr>
                     </thead>`;
      searchResult.forEach((element, i) => {
        result += ` <tbody>
                      <tr class="tr-shadow">
                        <th scope="row">${i + 1}</th>
                        <td>${element.name}</td>
                        <td class="desc">${element.campus}</td>
                        <td>${element.generation}</td>
                        <td>
                           <span class="block-email">${element.email}</span>
                        </td>
                       <td>
                          <span class="status--process">${element.stats.completedPercentage} %</span>
                        </td>
                     </tr>
                        <tr class="spacer"></tr>
                      </tbody>`;
      });
      document.getElementById('no-result').innerHTML = '';
      document.getElementById('t-Head').innerHTML = headerTable;
      document.getElementById('table-body').innerHTML = result;

      const buttonsGeneration = `<button class="au-btn-filter" id="gen3"> 3a Generacion</button>
                                    <button class="au-btn-filter" id="gen4"> 4a Generacion</button>
                                    <button class="au-btn-filter" id="gen5"> 5a Generacion</button>`;

      const buttonsStats = ` <button id="stats-bottom" class="btn btn-outline-danger">(-60)</button>
                                <button id="stats-medium" class="btn btn-outline-warning"> Media </button>
                                <button id="stats-high" class="btn btn-outline-success">(+90)</button>`;

      document.getElementById('stats').innerHTML = buttonsStats;

       // /////////////////////////////////////// filtrando Stats //////////////////////////////////////////////////////////////////////
       document.getElementById('stats-bottom').addEventListener('click', (event) => {
         event.preventDefault();
         let result = '';
         const searchStats = filterStats(searchResult, 'bottom');
         const headerTable = `<thead >
                      <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Sede</th>
                        <th>Generación</th>
                        <th>Correo</th>
                        <th>Progreso</th>
                      </tr>
                     </thead>`;
         searchStats.forEach((element, i) => {
           result += ` <tbody>
                      <tr class="tr-shadow">
                        <th scope="row">${i + 1}</th>
                        <td>${element.name}</td>
                        <td class="desc">${element.campus}</td>
                        <td>${element.generation}</td>
                        <td>
                           <span class="block-email">${element.email}</span>
                        </td>
                       <td>
                          <span class="status--process">${element.stats.completedPercentage} %</span>
                        </td>
                     </tr>
                        <tr class="spacer"></tr>
                      </tbody>`;
         });
         document.getElementById('no-result').innerHTML = '';
         document.getElementById('t-Head').innerHTML = headerTable;
         document.getElementById('table-body').innerHTML = result;
       });
       document.getElementById('stats-medium').addEventListener('click', (event) => {
         event.preventDefault();
         const searchStats = filterStats(searchResult, 'medium');
         let result = '';
         const headerTable = `<thead >
                      <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Sede</th>
                        <th>Generación</th>
                        <th>Correo</th>
                        <th>Progreso</th>
                      </tr>
                     </thead>`;
         searchStats.forEach((element, i) => {
           result += ` <tbody>
                      <tr class="tr-shadow">
                        <th scope="row">${i + 1}</th>
                        <td>${element.name}</td>
                        <td class="desc">${element.campus}</td>
                        <td>${element.generation}</td>
                        <td>
                           <span class="block-email">${element.email}</span>
                        </td>
                       <td>
                          <span class="status--process">${element.stats.completedPercentage} %</span>
                        </td>
                     </tr>
                        <tr class="spacer"></tr>
                      </tbody>`;
         });
         document.getElementById('no-result').innerHTML = '';
         document.getElementById('t-Head').innerHTML = headerTable;
         document.getElementById('table-body').innerHTML = result;
       });
       document.getElementById('stats-high').addEventListener('click', (event) => {
         event.preventDefault();
         const searchStats = filterStats(searchResult, 'high');
         let result = '';
         const headerTable = `<thead >
                      <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Sede</th>
                        <th>Generación</th>
                        <th>Correo</th>
                        <th>Progreso</th>
                      </tr>
                     </thead>`;
         searchStats.forEach((element, i) => {
           result += ` <tbody>
                      <tr class="tr-shadow">
                        <th scope="row">${i + 1}</th>
                        <td>${element.name}</td>
                        <td class="desc">${element.campus}</td>
                        <td>${element.generation}</td>
                        <td>
                           <span class="block-email">${element.email}</span>
                        </td>
                       <td>
                          <span class="status--process">${element.stats.completedPercentage} %</span>
                        </td>
                     </tr>
                        <tr class="spacer"></tr>
                      </tbody>`;
         });
         document.getElementById('no-result').innerHTML = '';
         document.getElementById('t-Head').innerHTML = headerTable;
         document.getElementById('table-body').innerHTML = result;
       });

       // //////////////////////////////////////////////////////// end filtrando Stats ///////////////////////////////////////////////////////////////

      document.getElementById('invisiblebuttons').innerHTML = buttonsGeneration;
      document.getElementById('gen3').addEventListener('click', (event) => {
        event.preventDefault();
        const alreadyFilteredStudents = filterGenerations(searchResult, 'tercera');
        let result = '';
        const headerTable = `<thead >
                      <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Sede</th>
                        <th>Generación</th>
                        <th>Correo</th>
                        <th>Progreso</th>
                      </tr>
                     </thead>`;
        alreadyFilteredStudents.forEach((element, i) => {
          result += ` <tbody>
                      <tr class="tr-shadow">
                        <th scope="row">${i + 1}</th>
                        <td>${element.name}</td>
                        <td class="desc">${element.campus}</td>
                        <td>${element.generation}</td>
                        <td>
                           <span class="block-email">${element.email}</span>
                        </td>
                       <td>
                          <span class="status--process">${element.stats.completedPercentage} %</span>
                        </td>
                     </tr>
                        <tr class="spacer"></tr>
                      </tbody>`;
        });
        document.getElementById('no-result').innerHTML = '';
        document.getElementById('t-Head').innerHTML = headerTable;
        document.getElementById('table-body').innerHTML = result;
      });
      document.getElementById('gen4').addEventListener('click', (event) => {
        event.preventDefault();
        const alreadyFilteredStudents = filterGenerations(searchResult, 'cuarta');
        let result = '';
        const headerTable = `<thead >
                      <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Sede</th>
                        <th>Generación</th>
                        <th>Correo</th>
                        <th>Progreso</th>
                      </tr>
                     </thead>`;
        alreadyFilteredStudents.forEach((element, i) => {
          result += `<tbody>
                      <tr class="tr-shadow">
                        <th scope="row">${i + 1}</th>
                        <td>${element.name}</td>
                        <td class="desc">${element.campus}</td>
                        <td>${element.generation}</td>
                        <td>
                           <span class="block-email">${element.email}</span>
                        </td>
                       <td>
                          <span class="status--process">${element.stats.completedPercentage} %</span>
                        </td>
                     </tr>
                        <tr class="spacer"></tr>
                      </tbody>`;
        });
        document.getElementById('no-result').innerHTML = '';
        document.getElementById('t-Head').innerHTML = headerTable;
        document.getElementById('table-body').innerHTML = result;
      });
      document.getElementById('gen5').addEventListener('click', (event) => {
        event.preventDefault();
        const alreadyFilteredStudents = filterGenerations(searchResult, 'quinta');
        let result = '';
        const headerTable = `<thead >
                      <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Sede</th>
                        <th>Generación</th>
                        <th>Correo</th>
                        <th>Progreso</th>
                      </tr>
                     </thead>`;
        alreadyFilteredStudents.forEach((element, i) => {
          result += ` <tbody>
                      <tr class="tr-shadow">
                        <th scope="row">${i + 1}</th>
                        <td>${element.name}</td>
                        <td class="desc">${element.campus}</td>
                        <td>${element.generation}</td>
                        <td>
                           <span class="block-email">${element.email}</span>
                        </td>
                       <td>
                          <span class="status--process">${element.stats.completedPercentage} %</span>
                        </td>
                     </tr>
                        <tr class="spacer"></tr>
                      </tbody>`;
        });
        document.getElementById('no-result').innerHTML = '';
        document.getElementById('t-Head').innerHTML = headerTable;
        document.getElementById('table-body').innerHTML = result;
      });
  });
};
// /////////////////////////////////////////// End Imprimir informacion de sedes  /////////////////////////////////

