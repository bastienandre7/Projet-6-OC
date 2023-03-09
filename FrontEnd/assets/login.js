const form = document.getElementById('form');



form.addEventListener('submit', async function(e){
    e.preventDefault();

    const data = new FormData(form);
    const response = await login(data);
    const user = await response.json();
    console.log(user);


});

const login = async (data) =>{

    const user = {
        email: data.get('email'),
        password: data.get('password')
    };

    return await fetch('http://localhost:5678/api/users/login', {
        method: "POST",
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    })
};