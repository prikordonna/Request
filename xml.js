const request = new XMLHttpRequest();
request.open('GET', "https://test-users-api.herokuapp.com/users/");
request.onload = function() {
    const requestText = request.responseText; // get the string from the response
    const parsedText = JSON.parse(requestText); // convert it to an object
    processMembers(parsedText);
}

request.send();

function processMembers(members) {
    const member = members['data'];
        
    for (let i = 0; i < member.length; i++) {
        const divXml = document.getElementById('xml-sample');
        divXml.innerHTML += "<br> id: " + member[i].id + "; name: " + member[i].name + "; age: " + member[i].age;;
    }
  }