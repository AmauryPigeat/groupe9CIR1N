function projets(){

    // Récupération du bouton pour revenir en haut de la page
    let button = document.querySelector(".button__footer");
    button.addEventListener("click", () => {
        // Transition pour revenir en haut de la page
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
    
        })
    });

    // Récupération des images...
    // L'ajout des classes 'xxxxx1' et 'xxxxx2' permettent de savoir quelle image est affichée sur la page.
    let castelImg = document.querySelector('.castel__img');
    castelImg.classList.add('castel1');
    let visemarImg = document.querySelector('.visemar__img');
    visemarImg.classList.add('visemar1');
    let seasImg = document.querySelector('.seas__img');
    seasImg.classList.add('seas1');
    let hpecImg = document.querySelector('.hpec__img');
    hpecImg.classList.add('hpec1');

    // Ajout des événements
    castelImg.addEventListener("click", () => {
        if(castelImg.classList.contains('castel1')){
            castelImg.classList.remove('castel1'); // On enlève la classe de l'ancienne photo
            castelImg.classList.add('castel2'); // On ajoute la classe de la nouvelle photo
            castelImg.src = "img/projets/castel_projet.jpg"; // On modifie la source
            
        }
        else if(castelImg.classList.contains('castel2')){
            castelImg.classList.remove('castel2');
            castelImg.classList.add('castel1');
            castelImg.src = "img/projets/Castel.png";
            
        }
    });

    visemarImg.addEventListener("click", () => {
        if(visemarImg.classList.contains('visemar1')){
            visemarImg.classList.remove('visemar1');
            visemarImg.classList.add('visemar2');
            visemarImg.src = "img/projets/visemar2.jpg";
            
        }
        else if(visemarImg.classList.contains('visemar2')){
            visemarImg.classList.remove('visemar2');
            visemarImg.classList.add('visemar1');
            visemarImg.src = "img/projets/Visemar.png";
        }
    });

    seasImg.addEventListener("click", () => {
        if(seasImg.classList.contains('seas1')){
            seasImg.classList.remove('seas1');
            seasImg.classList.add('seas2');
            seasImg.src = "img/projets/seas2.jpg";
            
        }
        else if(seasImg.classList.contains('seas2')){
            seasImg.classList.remove('seas2');
            seasImg.classList.add('seas1');
            seasImg.src = "img/projets/SEAS.png";
        }
    });

    hpecImg.addEventListener("click", () => {
        if(hpecImg.classList.contains('hpec1')){
            hpecImg.classList.remove('hpec1');
            hpecImg.classList.add('hpec2');
            hpecImg.src = "img/projets/logo-lab-sticc.png";
            
        }
        else if(hpecImg.classList.contains('hpec2')){
            hpecImg.classList.remove('hpec2');
            hpecImg.classList.add('hpec1');
            hpecImg.src = "img/projets/HPeC.png";
        }
    });


}




projets();