function plateformes_tech(){

    // Récupération des images 
    let livingImg = document.getElementById("livingImg");
    let hybridImg = document.getElementById("hybridImg");

    // Ajout de l'événement 
    livingImg.addEventListener("click", () => {
        openModal(0);
    });
    hybridImg.addEventListener("click", () => {
        openModal(1);
    });


}

// Fonction permettant d'ouvrir la modal
function openModal(number){
    if(number == 0){ // Condition pour savoir quelle image est quelle image
        document.querySelector('.overlay').style.display = "block";
        document.querySelector('.modal__living').style.display = "block";
    }
    else {
        document.querySelector('.overlay').style.display = "block";
        document.querySelector('.modal__hybrid').style.display = "block";
    }
}

// Fonction permettant de fermer la modal
function closeModal(number){
    if(number == 0){
        document.querySelector('.overlay').style.display = "none";
        document.querySelector('.modal__living').style.display = "none";
    }
    else {
        document.querySelector('.overlay').style.display = "none";
        document.querySelector('.modal__hybrid').style.display = "none";
    }
}



























plateformes_tech();