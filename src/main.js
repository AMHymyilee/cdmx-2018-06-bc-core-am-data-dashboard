const drawStudents = students => {
  // console.log(students);
};

const drawSearch = students => {
  document.getElementById('search').addEventListener('click', (event) => {
    event.preventDefault();
    const name = document.getElementById('name-to-search').value;
    if (name !== '' && name !== ' ') {
      const searchResult = filterStudents(students, name);
      // console.log(searchResult);
      let result = '';
      if (searchResult.length === 0) {
        document.getElementById('no-result').innerHTML = '<p> El termino que esta buscando no existe </p>';
      } else {
        searchResult.forEach((element, i) => {
          result += `<tr>
                    <th scope="row">${i++}</th>
                    <td>${element.name}</td>
                    <td>${element.campus}</td>
                    <td>${element.generation}</td>
                    <td>${element.email}</td>
                    <td>${element.stats.completedPercentage}
                    %</td>
                    </tr>`;
        });
        document.getElementById('no-result').innerHTML = '';
        document.getElementById('table-body').innerHTML = result;
      }
    }
  });
};

const printSearchCampus = students => {
  document.getElementById('campus-Lima').addEventListener('click', (event) => {
    event.preventDefault();
    const searchResult = filterCampus(students, 'lima');
    // Para imprimir en el DOM
    let result = '';
    if (searchResult.length === 0) {
      document.getElementById('no-result').innerHTML = '<p>No existen resultados</p>';
    } else {
      searchResult.forEach((element, i) => {
        result += `<tr>
                   <th scope="row">${i + 1}</th>
                   <td>${element.name}</td>
                    <td>${element.campus}</td>
                    <td>${element.generation}</td>
                    <td>${element.email}</td>
                    <td>${element.stats.completedPercentage}
                    %</td>
                 </tr>`;
      });
      document.getElementById('no-result').innerHTML = '';
      document.getElementById('table-body').innerHTML = result;
    }
  });

  document.getElementById('campus-Mexico').addEventListener('click', (event) => {
    event.preventDefault();
    const searchResult = filterCampus(students, 'mexico');
    // Para imprimir en el DOM
    let result = '';
    if (searchResult.length === 0) {
      document.getElementById('no-result').innerHTML = '<p>No existen resultados</p>';
    } else {
      searchResult.forEach((element, i) => {
        result += `<tr>
                   <th scope="row">${i + 1}</th>
                   <td>${element.name}</td>
                    <td>${element.campus}</td>
                    <td>${element.generation}</td>
                    <td>${element.email}</td>
                    <td>${element.stats.completedPercentage}
                    %</td>
                 </tr>`;
      });
      document.getElementById('no-result').innerHTML = '';
      document.getElementById('table-body').innerHTML = result;
    }
  });

  document.getElementById('campus-Santiago').addEventListener('click', (event) => {
    event.preventDefault();
    const searchResult = filterCampus(students, 'santiago');
    // Para imprimir en el DOM
    let result = '';
    if (searchResult.length === 0) {
      document.getElementById('no-result').innerHTML = '<p>No existen resultados</p>';
    } else {
      searchResult.forEach((element, i) => {
        result += `<tr>
                   <th scope="row">${i + 1}</th>
                   <td>${element.name}</td>
                    <td>${element.campus}</td>
                    <td>${element.generation}</td>
                    <td>${element.email}</td>
                    <td>${element.stats.completedPercentage}
                    %</td>
                 </tr>`;
      });
      document.getElementById('no-result').innerHTML = '';
      document.getElementById('table-body').innerHTML = result;
    }
  });
};

const printSearchStats = students => {
  document.getElementById('stats-bottom').addEventListener('click', (event) => {
    event.preventDefault();
    const searchResult = filterStats(students, 'bottom');
    let result = '';
    searchResult.forEach((element, i) => {
      result += `<tr>
                   <th scope="row">${i + 1}</th>
                   <td>${element.name}</td>
                    <td>${element.campus}</td>
                    <td>${element.generation}</td>
                    <td>${element.email}</td>
                    <td>${element.stats.completedPercentage}
                    %</td>
                 </tr>`;
    });
    document.getElementById('no-result').innerHTML = '';
    document.getElementById('table-body').innerHTML = result;
  });

  document.getElementById('stats-medium').addEventListener('click', (event) => {
    event.preventDefault();
    const searchResult = filterStats(students, 'medium');
    let result = '';
    searchResult.forEach((element, i) => {
      result += `<tr>
                   <th scope="row">${i + 1}</th>
                   <td>${element.name}</td>
                    <td>${element.campus}</td>
                    <td>${element.generation}</td>
                    <td>${element.email}</td>
                    <td>${element.stats.completedPercentage}
                    %</td>
                 </tr>`;
    });
    document.getElementById('no-result').innerHTML = '';
    document.getElementById('table-body').innerHTML = result;
  });

  document.getElementById('stats-high').addEventListener('click', (event) => {
    event.preventDefault();
    const searchResult = filterStats(students, 'high');
    let result = '';
    searchResult.forEach((element, i) => {
      result += `<tr>
                   <th scope="row">${i + 1}</th>
                   <td>${element.name}</td>
                    <td>${element.campus}</td>
                    <td>${element.generation}</td>
                    <td>${element.email}</td>
                    <td>${element.stats.completedPercentage}
                    %</td>
                 </tr>`;
    });
    document.getElementById('no-result').innerHTML = '';
    document.getElementById('table-body').innerHTML = result;
  });
};
