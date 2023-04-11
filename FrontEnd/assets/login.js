const form = document.getElementById('form');



form.addEventListener('submit', async function(e){
    e.preventDefault();

    const data = new FormData(form);
    const response = await login(data);
    const user = await response.json();
    
    if(response.status === 404 || response.status === 401){
        const erreur = document.getElementById("erreur");
        erreur.innerHTML = `<p>Adresse E-mail ou Mot de passe incorrect</p>`;
        erreur.classList.add("classe_erreur");
        setTimeout(() => {
        },5000)
        return;
    }

    if(response.status === 200){
        sessionStorage.setItem("user", user.token);
        window.location.assign("index.html")
    }


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

