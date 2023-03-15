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
        <i class="fa-solid fa-trash-can"></i>
        <p>éditer</p>
        `;
        index++;

        modaleEL.appendChild(NewFigure);
    }
};

modaleEl();



let modal = null



const openModal = function (e) {
    e.preventDefault()
    const target = document.querySelector(e.target.getAttribute('href'))
    target.style.display = null
    target.removeAttribute('aria-hidden')
    target.setAttribute('aria-modal', 'true')
    const body = document.querySelector("body");
    const galeryEl = document.querySelector(".gallery")
    const imgSophieEl = document.getElementById("imgSophie")
    const formProjetEL = document.getElementById("form-projet")
    body.classList.add("shadow-body");
    galeryEl.classList.add("opacityIMG");
    imgSophieEl.classList.add("opacityIMG");
    formProjetEL.classList.add("opacityIMG");
    const croixEl = document.getElementById('croix-close');
    croixEl.addEventListener('click', closeModal)
}

const closeModal = function(e) {
    e.preventDefault()
    const modalEl = document.getElementById('modal1')
    modalEl.style.display = "none"
    modalEl.setAttribute('aria-hidden', 'true')
    modalEl.removeAttribute('aria-modal')
    const body = document.querySelector("body");
    const galeryEl = document.querySelector(".gallery")
    const imgSophieEl = document.getElementById("imgSophie")
    const formProjetEL = document.getElementById("form-projet")
    imgSophieEl.classList.remove("opacityIMG");
    body.classList.remove("shadow-body");
    galeryEl.classList.remove("opacityIMG");
    formProjetEL.classList.remove("opacityIMG");
}

const stopPropagation = function (e) {
    e.stopPropagation()
}



document.querySelectorAll('#btn-modif').forEach(a => {
    a.addEventListener('click', openModal)
})


window.addEventListener('keydown', function(e) {
    if(e.key === "Escape" || e.key === "Esc") {
        closeModal(e)
    }
})


// Modale 2


const openModal2 = function(e) {
    e.preventDefault()
    const modal1 = document.getElementById('modale1')
    const modal2 = document.getElementById('modal2')
    modal1.style.display = "none"
    modal2.style.display = "flex"
};


document.querySelectorAll('.btn-ajouter').forEach(button => {
    button.addEventListener('click', openModal2)
})

const closeModal2 = function(e) {
    e.preventDefault()
    const modal1 = document.getElementById('modale1')
    const modal2 = document.getElementById('modal2')
    modal1.style.display = "flex"
    modal2.style.display = "none"
};


document.querySelectorAll('#arrowLeft').forEach(i => {
    i.addEventListener('click', closeModal2)
})

// image input File

const input = document.querySelector('input[type="file"]')

input.addEventListener('change', function(e){
    console.log(input.files)
    const reader = new FileReader()
    reader.onload = function(){
        const img = document.getElementById('imgInput')
        img.src = reader.result
    }
    reader.readAsDataURL(input.files[0])

    const faImage = document.getElementById('faImage')
    const inputLabel = document.getElementById('labelInputImg')
    const indicationEl = document.getElementById('indication')
    const img = document.getElementById('imgInput')

    img.style.display = "flex"
    faImage.classList.add("none")
    inputLabel.classList.add("none")
    indicationEl.classList.add("none")

}, false)



// POST Ajout Photo

const formAjoutIMGEl = document.getElementById('formAjoutIMG');


formAjoutIMGEl.addEventListener('submit', async function(e){
    const data = new FormData(form);
    const response = await login(data);
    const user = await response.json();
    console.log(user);
});

const envoie = async (data) => {

    const ajout = {
        image: data.get('file'),
        title: data.get('text'),
        category: data.get('number')
    };


    return await fetch('http://localhost:5678/api/works', {
        method: "POST",
        headers: {
            'accept': 'application/json',
            'Content-Type': 'multipart/form-data',
        },
        body: JSON.stringify()
    })
}