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
    await deleteAll();

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
};

displayTous();




const displayObj = async () => {
    await fetchWorks();
    await deleteAll();

    const galerieEL = document.getElementById("galerie");

    const ObjetFiltre = worksData.filter(objet => objet.categoryId === 1)

    index = 0;

    for (let imageUrl of ObjetFiltre){
        let NewFigure = document.createElement("figure");
        NewFigure.innerHTML = `
        <img src = "${ObjetFiltre[index].imageUrl}">
        <figcaption>${ObjetFiltre[index].title}</figcaption>
        `;
        index++;

        galerieEL.appendChild(NewFigure);
    }
};

const displayApps = async () => {
    await fetchWorks();
    await deleteAll();

    const galerieEL = document.getElementById("galerie");

    const ObjetFiltre = worksData.filter(objet => objet.categoryId === 2)

    index = 0;

    for (let imageUrl of ObjetFiltre){
        let NewFigure = document.createElement("figure");
        NewFigure.innerHTML = `
        <img src = "${ObjetFiltre[index].imageUrl}">
        <figcaption>${ObjetFiltre[index].title}</figcaption>
        `;
        index++;

        galerieEL.appendChild(NewFigure);
    }
};

const displayHotel = async () => {
    await fetchWorks();
    await deleteAll();

    const galerieEL = document.getElementById("galerie");

    const ObjetFiltre = worksData.filter(objet => objet.categoryId === 3)

    index = 0;

    for (let imageUrl of ObjetFiltre){
        let NewFigure = document.createElement("figure");
        NewFigure.innerHTML = `
        <img src = "${ObjetFiltre[index].imageUrl}">
        <figcaption>${ObjetFiltre[index].title}</figcaption>
        `;
        index++;

        galerieEL.appendChild(NewFigure);
    }
};






function deleteAll(){
    btnTousEl.onclick = () => {
        const galerieEL = document.getElementById("galerie");
        while (galerieEL.firstChild) {
            galerieEL.removeChild(galerieEL.firstChild);
        }
    };

    btnObjEl.onclick = () => {
        const galerieEL = document.getElementById("galerie");
        while (galerieEL.firstChild) {
            galerieEL.removeChild(galerieEL.firstChild);
        }
    };

    btnAppartEl.onclick = () => {
        const galerieEL = document.getElementById("galerie");
        while (galerieEL.firstChild) {
            galerieEL.removeChild(galerieEL.firstChild);
        }
    };

    btnHotelEl.onclick = () => {
        const galerieEL = document.getElementById("galerie");
        while (galerieEL.firstChild) {
            galerieEL.removeChild(galerieEL.firstChild);
        }
    };

};





const buttonEl = document.querySelectorAll('.boutons');

function changementVert(){
    buttonEl.forEach(item => {
        item.classList.remove('btn_vert');
    })
}

function btnTousVert(){
    btnTousEl.classList.add('btn_vert')
};
function btnObjVert(){
    btnObjEl.classList.add('btn_vert')
};
function btnAppsVert(){
    btnAppartEl.classList.add('btn_vert')
};
function btnHotelVert(){
    btnHotelEl.classList.add('btn_vert')
};






btnTousEl.addEventListener("click", function(){
    deleteAll();
    displayTous();
    changementVert();
    btnTousVert();
});


btnObjEl.addEventListener("click", function(){
    deleteAll();
    displayObj();
    changementVert();
    btnObjVert();
});

btnAppartEl.addEventListener("click", function(){
    deleteAll();
    displayApps();
    changementVert();
    btnAppsVert();
});

btnHotelEl.addEventListener("click", function(){
    deleteAll();
    displayHotel();
    changementVert();
    btnHotelVert();
});

// MODALE

const modaleEl = async () => {
    await fetchWorks();

    const modaleEL = document.getElementById("img-modale");

    index = 0;

    for (let imageUrl of worksData){
        let NewFigure = document.createElement("figure");
        NewFigure.innerHTML = `
        <img src = "${worksData[index].imageUrl}" class="image-modale">
        <p>éditer</p>
        `;
        index++;

        modaleEL.appendChild(NewFigure);
    }
};

modaleEl();