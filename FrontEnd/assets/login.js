const form = document.getElementById('form');


form.addEventListener('submit', function(e){
    e.preventDefault();

    const user = new FormData(form);
    const res = Object.fromEntries(user);

    console.log([...user]);

    fetch('http://localhost:5678/api/users/login', {
        method: "POST",
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(res)
    })
        .then(reponse => reponse.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
});