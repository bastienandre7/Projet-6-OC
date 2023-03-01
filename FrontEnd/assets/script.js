const btnTousEl = document.getElementById("btnTous");
const btnObjEl = document.getElementById("btnObj");
const btnAppartEl = document.getElementById("btnAppart");
const btnHotelEl = document.getElementById("btnHotel");



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
        
    });

btnTousEl.addEventListener("click", function(){
    
});


btnObjEl.addEventListener("click", function(){
    
});

btnAppartEl.addEventListener("click", function(){

});

btnHotelEl.addEventListener("click", function(){

});

