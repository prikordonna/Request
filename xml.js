// const xmlRequest = (url, method, callback) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(method, url);
//     xhr.addEventListener("load", callback.bind(this, xhr));
//     xhr.send();
// };

// xmlRequest("https://test-users-api.herokuapp.com/users/", "GET", (xhr) => {
//     document.querySelector('#xml-sample').innerHTML = xhr.responseText;
// })

const xml = document.getElementById('xml-sample');
const request = new XMLHttpRequest();
request.open('GET', "https://test-users-api.herokuapp.com/users/");
request.send();

request.onload = function() {
    const requestText = request.response; // get the string from the response
    const parsedText = JSON.parse(requestText); // convert it to an object
    objects(parsedText);
}

function objects(jsonObj) {
    const member = jsonObj['data'];
        
    for (const i = 0; i < member.length; i++) {
        const line = document.createElement('p');
    
        line.textContent = member[i].id + "<br>" + member[i].name + "<br>" + member[i].age;
    
        xml.innerHTML = line.textContent;
    }
  }