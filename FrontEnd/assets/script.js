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

    for (let i of worksData){
        let NewFigure = document.createElement("figure");
        NewFigure.classList.add('figure', i.categoryId);
        NewFigure.innerHTML = `
        <img src = "${worksData[index].imageUrl}" alt ="${worksData[index].title}" id="${worksData[index].id}">
        <figcaption>${worksData[index].title}</figcaption>
        `;
        index++;

        galerieEL.appendChild(NewFigure);
    }
};



displayTous();


function filtreMenu(value){
    let buttons = document.querySelectorAll(".boutons");
    buttons.forEach((button) => {
        if(value == button.name){
            button.classList.add("btn_vert")
        }
        else{
            button.classList.remove("btn_vert")
        }
    });

    let elements = document.querySelectorAll(".figure")

    elements.forEach((element) => {
        if(value == "Tous"){
            element.classList.remove("none");
        }
        else{
            if(element.classList.contains(value)){
                element.classList.remove("none");
            }
            else{
                element.classList.add("none");
            }
        }
    })
}

window.onload = () => {
    filtreMenu("Tous");
};



// Logged

let logged = sessionStorage.getItem('user');

if( logged != null){
    const cadreImageEl = document.getElementById("cadreImage");
    let btnModifEl = document.createElement("div");
    btnModifEl.classList.add('display-modifier', 'pad_modifier');
    btnModifEl.innerHTML = `
    <a class="btnmodal"><i class="fa-regular fa-pen-to-square"></i> modifier</a>
    `;
    cadreImageEl.appendChild(btnModifEl);
    const modifier = document.getElementById('modifier');
    modifier.classList.add('liens-modifier');
    let boutonModifEl = document.createElement("div");
    boutonModifEl.classList.add('display-modifier');
    boutonModifEl.innerHTML = `
    <a id="btn-modif" href="#modal1" class="btnmodal"><i class="fa-regular fa-pen-to-square"></i> modifier</a>
    `;
    modifier.appendChild(boutonModifEl);
    let modale = document.getElementById("modal1");
    modale.innerHTML = `
        <div id="modale1" class="modal-wrapper" style="display: flex;">
			<i id="croix-close" class="fa-solid fa-xmark fa-2x close"></i>
            <h3 id="titlemodal">Galerie photo</h3>
            <div class="display-img" id="img-modale"></div>
			<div class="border"></div>
            <button class="btn-ajouter">Ajouter une photo</button>
            <a class="suppr" id="supprGalerie">Supprimer la galerie</a>
        </div>

		<div id="modal2"  class="modal-add" style="display: none;">
			<i id="arrowLeft" class="fa-solid fa-arrow-left fa-2x flèche-gauche"></i>
			<h3 id="titlemodal">Ajout photo</h3>

			<form action="#" method="post" id="formAjoutIMG">
				<div class="choisir-photo">
					<i class="fa-regular fa-image fa-4x" id="faImage"></i>
					<img id="imgInput" style="display: none;">
					<label for="inputFile" class="bouton-add-photo" id="labelInputImg">+ Ajouter photo</label>
					<input id="inputFile" name="image" class="none" type="file" accept=".jpg, .png" required>
					<p class="indication" id="indication">jpg,png : 4mo max</p>
				</div>

				<div class="form-modal">
					<label for="title" id="label-titre">Titre</label>
					<input type="text" name="title" id="title-input" required>
					<label for="Catégorie-id" id="catégorie-id">Catégorie</label>
					<select type="number" name="category" id="select-catégorie"  required>
						<option value=""></option>
						<option value="1">Objets</option>
						<option value="2">Appartements</option>
						<option value="3">Hotels & restaurants</option>
					</select>
					<div class="border"></div>
						<button type="submit" class="btn-valider">Valider</button>
				</div>
			</form>
	    </div>
    `;
    const headerEl = document.getElementById("header");
    let editionEl = document.createElement("div");
    editionEl.classList.add("mode-edition");
    editionEl.innerHTML = `
    <div class="display-edition">
		<i class="fa-regular fa-pen-to-square fa-1x stylo"></i>
		<p class="txt-edition">Mode édition</p>
	</div>
	<button class="btn-header">publier les changements</button>
    `;
    headerEl.appendChild(editionEl);


    const btnLoginEl = document.getElementById("btnLogin");
    btnLoginEl.classList.add("none");
    const txtLogout = document.createElement("a");
    txtLogout.classList.add("nav");
    txtLogout.textContent = "Logout";
    loginEtLogout.appendChild(txtLogout);
    txtLogout.addEventListener('click', function(){
        logged = null
    })
};


// MODALE

const deleteWork = async(id) => {
    const token = sessionStorage.getItem('user');
    const headers = new Headers();
    headers.append('Authorization', `Bearer ${token}`)
    fetch (`http://localhost:5678/api/works/${id}`, {
        method: "DELETE",
        headers,
    })
    
    return false;

}



async function modaleEl(e) {
    await fetchWorks();

    const modaleEL = document.getElementById("img-modale");

    let index = 0;

    for (let imageUrl of worksData) {
        let NewFigure = document.createElement("figure");
        NewFigure.classList.add("display-figure");
        NewFigure.innerHTML = `
        <img src = "${worksData[index].imageUrl}" alt ="${worksData[index].title}" class="image-modale" >
        <p>éditer</p>
        `;


        let trashIcone = document.createElement("i");
        trashIcone.classList.add("fa-solid", "fa-trash-can");
        trashIcone.id = worksData[index].id;
        trashIcone.addEventListener("click", async()=>{
            // const response = await deleteWork(trashIcone.id)
            // console.log(response)
            
            // return false;
        })

        
        index++;

        NewFigure.appendChild(trashIcone);
        modaleEL.appendChild(NewFigure);

    };


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
});






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
    e.preventDefault();
    const data = new FormData(formAjoutIMGEl);
    const response = await envoie(data);
    const user = await response.json();
    console.log(user);
    console.log(response);
});

const envoie = async (data) => {
const token = sessionStorage.getItem('user');
    const headers = new Headers();
    headers.append('Authorization', `Bearer ${token}`)



    return await fetch('http://localhost:5678/api/works', {
        method: "POST",
        headers,
        body: data
    })
}
