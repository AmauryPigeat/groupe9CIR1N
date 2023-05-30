function contact(){

    let name = document.getElementById("formName");
    let email = document.getElementById("formEmail");
    let message = document.getElementById("formMessage");
    let button = document.getElementById("formButton");
    let gameButton = document.querySelector('.modal__footer__button');
    
    name.addEventListener("input", () => verifyButton(button));
    
    email.addEventListener("input", () => verifyButton(button));

    message.addEventListener("input", () => verifyButton(button));

    button.addEventListener("click", () => clickButton(button));
    button.style.backgroundColor = "grey";

    gameButton.addEventListener("click", () => clickGameButton());


    
}


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

function verifyEmail(email){
    // Checking email...
    if(email.value.includes("@") && email.value.includes(".")){
        return true;
    }
    else {
        return false;
    }
}

function verifyMessage(message){
    // Checking message...
    if(message.value.length < 20 || message.value.length >1000){
        return false;
    }
    else {
        return true;
    }
}


function verifyButton(button){
    let name = document.getElementById("formName");
    let email = document.getElementById("formEmail");
    let message = document.getElementById("formMessage");

    let isNameGood = verifyName(name);
    let isEmailGood = verifyEmail(email);
    let isMessageGood = verifyMessage(message);

    if(isNameGood && isEmailGood && isMessageGood){
        button.style.backgroundColor = "#428EFF";
    }
    else {
        button.style.backgroundColor = "grey";
    }
}

function clickButton(button){
    let buttonColor = button.style.backgroundColor;
    
    if(buttonColor == "grey"){
        alert("Veuillez compléter correctement le formulaire !");
        return;
    }
    else {
        document.querySelector('.overlay').style.display = "block";
        document.querySelector('.modal').classList.add('modal--open');

    }
}


function clickGameButton(){
    let cercle = document.querySelector('.modal__body__img');
    cercle.classList.add('img__disappear');
    setTimeout(()=>{
        cercle.style.opacity = '0';
        cercle.classList.remove('img__disappear');
        cercle.style.display = "none";
        pieceAppear();
    },1500);
}

function pieceAppear(){
    let number = Math.round(Math.random());
    if(number == 0){
        document.querySelector('.modal__body').innerHTML = '<img src="img/contact/pile.png" alt="Pile" class="modal__body__img">';
        let piece = document.querySelector('.modal__body__img');
        piece.classList.add('img__appear');
        piece.classList.add('center');
        setTimeout( () => {

            piece.style.opacity = '1';
            
            alert("C'est Pile ! Vous avez gagné, le formulaire va être envoyé !");
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
    else{
        document.querySelector('.modal__body').innerHTML = '<img src="img/contact/face.png" alt="Face" class="modal__body__img">';
        let piece = document.querySelector('.modal__body__img');
        piece.classList.add('img__appear');
        piece.classList.add('center');
        setTimeout( () => {

            piece.style.opacity = '1';
            
            alert("C'est Face ! Vous avez perdu, le formulaire va être réinitialisé !");
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