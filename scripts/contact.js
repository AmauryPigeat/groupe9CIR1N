function contact(){

    // Récupération informations du formulaire
    let name = document.getElementById("formName");
    let email = document.getElementById("formEmail");
    let message = document.getElementById("formMessage");

    // Récupération des boutons
    let button = document.getElementById("formButton");
    let gameButton = document.querySelector('.modal__footer__button');
    let button1 = document.querySelector('.modal-trigger');
    
    // Ajout des événements
    name.addEventListener("input", () => verifyButton(button));
    
    email.addEventListener("input", () => verifyButton(button));

    message.addEventListener("input", () => verifyButton(button));

    button.addEventListener("click", () => clickButton(button));
    button.style.backgroundColor = "grey";

    
    button1.classList.add('button-grey');

    gameButton.addEventListener("click", () => clickGameButton());


    
}

// Fonction vérifiant si le format du nom prénom est correct
function verifyName(name){
    // Checking name...
    let nameSplit = name.value.split(' ');
    let nbWords = nameSplit.length;
    if(nbWords >= 2 && nameSplit[1]!=""){
        return true;
    }
    else {
        return false;
    }
}

// Fonction vérifiant si le format de l'adresse mail est correct
function verifyEmail(email){
    // Checking email...
    if(email.value.includes("@") && email.value.includes(".")){
        return true;
    }
    else {
        return false;
    }
}

// Fonction vérifiant si le format du message est correct
function verifyMessage(message){
    // Checking message...
    if(message.value.length < 20 || message.value.length >1000){
        return false;
    }
    else {
        return true;
    }
}

// Fonction qui actualise la couleur du bouton si les formats des informations du formulaire sont corrects
function verifyButton(button){
    let name = document.getElementById("formName");
    let email = document.getElementById("formEmail");
    let message = document.getElementById("formMessage");
    let button1 = document.querySelector('.modal-trigger');

    let isNameGood = verifyName(name);
    let isEmailGood = verifyEmail(email);
    let isMessageGood = verifyMessage(message);

    if(isNameGood && isEmailGood && isMessageGood){
        button.style.backgroundColor = "#428EFF";
        if(!button1.classList.contains('button-blue')){
            button1.classList.remove('button-grey');
            button1.classList.add('button-blue');
        }
    }
    else {
        button.style.backgroundColor = "grey";
        if(!button1.classList.contains('button-grey')){
            button1.classList.add('button-grey');
            button1.classList.remove('button-blue');
        }
        
    }
}

// Fonction qui s'exécute à l'appui du bouton
function clickButton(button){
    let buttonColor = button.style.backgroundColor;
    
    if(buttonColor == "grey"){
        alert("Veuillez compléter correctement le formulaire !");
        return;
    }
    else {
        // Affichage fenêtre modal
        document.querySelector('.overlay').style.display = "block";
        document.querySelector('.modal').classList.add('modal--open');

    }
}

// Fonction qui s'exécute à l'appui du bouton Lancer du jeu
function clickGameButton(){
    // Récupération du cercle ? de la fenêtre modal
    let cercle = document.querySelector('.modal__body__img');
    
    // Lancement animation disparition du cercle ? de la modal
    cercle.classList.add('img__disappear');
    setTimeout(()=>{
        cercle.style.opacity = '0';
        cercle.classList.remove('img__disappear');
        cercle.style.display = "none";
        pieceAppear();
    },1500);
}

// Fonction qui fait apparaître la pièce à l'écran et qui traite le résultat
function pieceAppear(){
    // Nombre random choisi entre 0 et 1 pour le hasard
    let number = Math.round(Math.random());

    if(number == 0){ // Si PILE
        // Changement de l'image de la pièce et récupération de la pièce
        document.querySelector('.modal__body').innerHTML = '<img src="img/contact/pile.png" alt="Pile" class="modal__body__img">';
        let piece = document.querySelector('.modal__body__img');

        // Animation apparition pièce
        piece.classList.add('img__appear');
        piece.classList.add('center');
        setTimeout( () => {

            piece.style.opacity = '1';
            
            alert("C'est Pile ! Vous avez gagné, le formulaire va être envoyé !");

            // Réinitialisation du formulaire
            document.querySelector('.overlay').style.display = "none";
            document.querySelector('.modal').classList.remove('modal--open');
            document.querySelector('.modal').classList.add('modal--close');
            let name = document.getElementById("formName");
            let email = document.getElementById("formEmail");
            let message = document.getElementById("formMessage");

            name.value = "";
            email.value = "";
            message.value = "";
            document.querySelector('.modal').classList.remove('modal--close');
            document.querySelector('.modal__body').innerHTML = '<img src="img/contact/cercle_gris.png" alt="?" class="modal__body__img">';
            verifyButton(document.getElementById("formButton"));
        },1000); 
    }
    else{ // Si FACE
        document.querySelector('.modal__body').innerHTML = '<img src="img/contact/face.png" alt="Face" class="modal__body__img">';
        let piece = document.querySelector('.modal__body__img');

        // Animation apparition pièce
        piece.classList.add('img__appear');
        piece.classList.add('center');
        setTimeout( () => {

            // Fin animation apparition pièce
            piece.style.opacity = '1';
            
            alert("C'est Face ! Vous avez perdu, le formulaire va être réinitialisé !");

            // Réinitialisation du formulaire
            document.querySelector('.overlay').style.display = "none";
            document.querySelector('.modal').classList.remove('modal--open');
            document.querySelector('.modal').classList.add('modal--close');
            let name = document.getElementById("formName");
            let email = document.getElementById("formEmail");
            let message = document.getElementById("formMessage");

            name.value = "";
            email.value = "";
            message.value = "";
            document.querySelector('.modal').classList.remove('modal--close');
            document.querySelector('.modal__body').innerHTML = '<img src="img/contact/cercle_gris.png" alt="?" class="modal__body__img">';
            verifyButton(document.getElementById("formButton"));
        },1000); 
    }
}




contact();