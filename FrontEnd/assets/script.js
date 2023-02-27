const img = document.getElementById("galerie");



fetch("http://localhost:5678/api/works")
    .then(reponse => reponse.json())
    .then(reponse2 => console.log(reponse2[0].title))