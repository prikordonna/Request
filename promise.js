const Url = 'https://test-users-api.herokuapp.com/users/';

fetch(Url)
	.then(res => res.json())
    .then(({ data }) => {
        const divPromise = document.getElementById('promise-sample');
        divPromise.innerHTML = data.reduce((acc, { age, id, name }) =>
            acc + `<br> id: ${id} ; name: ${name}; age: ${age};`,
        '')
    })
