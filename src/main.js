const drawStudents = students => {
   // console.log(students);
}

const drawSearch = students => {
    document.getElementById("search").addEventListener("click",(event) => {
     event.preventDefault()
     const name = document.getElementById("name-to-search").value;
     const searchResult = filterStudents (students, name);    
     console.log(searchResult);
    }
 )}