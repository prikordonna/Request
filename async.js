async function getData() {
    try {
      const asyncRequest = await fetch("https://test-users-api.herokuapp.com/users/");
      const data = await asyncRequest.json();
      return data;
    } 
    catch(error) {
      console.log(error);
    }
}
//call the getData function
getData()
  .then(({ data }) => {
    const divAsync = document.getElementById('async-sample');
    divAsync.innerHTML = data.reduce((acc, { age, id, name }) =>
        acc + `<br> id: ${id} ; name: ${name}; age: ${age};`,
    '')
  }); // log the data