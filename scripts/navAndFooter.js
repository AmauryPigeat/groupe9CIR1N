function mainLogoLink(){ 
    //permet de rediriger vers accueil sans passer par une balise <a> à cause du style qui fait qu'on doit tout modifier (gain de temps)
    window.open("../accueil.html","_blank");
}

//Timer a gauche de l'heure et à droite du menu de nav

let temps = 0
let timerElement = document.getElementById("timer");

function augmenterTemps() {
    let minutes = parseInt(temps / 60, 10)
    let secondes = parseInt(temps % 60, 10)

    if(secondes < 10){
        timerElement.innerText = minutes + ":0" + secondes
    }
    else{
        timerElement.innerText = minutes + ":" + secondes;
    }
    
    temps++;
}

setInterval(augmenterTemps, 1000);

function date(){
    let clock = document.getElementById("clock");

    const event = new Date();
    clock.innerText = event.toLocaleTimeString('fr-FR');
}

setInterval(date, 1000);

function loaderEnd(){
    let nav = document.getElementsByTagName("nav")[0];
    let body = document.getElementById("layout");
    let footer = document.getElementsByTagName("footer")[0];
    let loader = document.getElementById("imgLoader");

    temps = 0;
    nav.style.removeProperty("display");
    body.style.removeProperty("display");
    footer.style.removeProperty("display");
    loader.style.display = "none";
    loader.style.marginBottom = "0%";
    loader.style.scale = "0";
}

function loaderStart(){
    let nav = document.getElementsByTagName("nav")[0];
    let body = document.getElementById("layout");
    let footer = document.getElementsByTagName("footer")[0];
    let loader = document.getElementById("imgLoader");

    nav.style.display = "none";
    body.style.display = "none";
    footer.style.display = "none";
    loader.style.display = "block";
}


setTimeout(loaderEnd,2000);

function main(){
    augmenterTemps();
    date();
    loaderStart();
}

main();