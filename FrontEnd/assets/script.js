fetch("http://localhost:5678/api/works")
    .then(reponse => reponse.json())
    .then(data => {
        
        
        const galerieEL = document.getElementById("galerie");

        index = 0;

        for (let imageUrl of data){
            let NewFigure = document.createElement("figure");
            NewFigure.innerHTML = `
            <img src = "${data[index].imageUrl}">
            <figcaption>${data[index].title}</figcaption>
            `;
            index++;

            galerieEL.appendChild(NewFigure);
        }
        
    })



