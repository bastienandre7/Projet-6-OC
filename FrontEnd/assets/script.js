const btnTousEl = document.getElementById("btnTous");
const btnObjEl = document.getElementById("btnObj");
const btnAppartEl = document.getElementById("btnAppart");
const btnHotelEl = document.getElementById("btnHotel");


let worksData = [];

const fetchWorks = async () => {
    await fetch("http://localhost:5678/api/works")
    .then(reponse => reponse.json())
    .then(data => worksData = data);
};

const displayTous = async () => {
    await fetchWorks();

    const galerieEL = document.getElementById("galerie");

    index = 0;

    for (let imageUrl of worksData){
        let NewFigure = document.createElement("figure");
        NewFigure.innerHTML = `
        <img src = "${worksData[index].imageUrl}">
        <figcaption>${worksData[index].title}</figcaption>
        `;
        index++;

        galerieEL.appendChild(NewFigure);
    }
}

displayTous();




btnTousEl.addEventListener("click", function(){
    displayTous();
});


btnObjEl.addEventListener("click", function(){
    
});

btnAppartEl.addEventListener("click", function(){

});

btnHotelEl.addEventListener("click", function(){

});

