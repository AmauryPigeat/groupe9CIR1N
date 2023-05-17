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
    console.log(event.toLocaleTimeString('fr-FR'))
    clock.innerText = event.toLocaleTimeString('fr-FR');
}

setInterval(date, 1000);

function main(){
    augmenterTemps();
    date();
}

main();