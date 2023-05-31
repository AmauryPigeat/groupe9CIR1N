function mainLogoLink(){ 
    //permet de rediriger vers accueil sans passer par une balise <a> à cause du style qui fait qu'on doit tout modifier (gain de temps)
    window.open("accueil.html","_blank");
    let accueilBlock = document.getElementById("self");
    accueilBlock.style.backgroundColor = "blue";
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

setTimeout(loaderEnd,2000);


function membresAlert(){
    let button = document.getElementById("membresClick");

    button.addEventListener('click',function confirmation(){
        let choice = confirm("Voulez vous vraiment aller sur la page membres ?");
        if(choice){
            window.open("membres.html",'_self');
        }
    });
}

function backgroundColorChange(){
    if(document.title == "L@BISEN - Membres"){
        let pageButton = document.getElementById("membresClick");
        pageButton.style.backgroundColor = "#2018C4";
        pageButton.style.color = "white";
        console.log("old color : #D4D4D4 \nnew color : #2018C4")
        return ;
    }
    let pageButton = document.getElementById("self");
    pageButton.style.backgroundColor = "#2018C4";
    pageButton.style.color = "white";
    console.log("old color : #D4D4D4 \nnew color : #2018C4")
}

function call(){
    let numeros = document.querySelectorAll('.numeros__footer');

    numeros.forEach(num => {
        num.addEventListener("copy", () => {
            let numCheck = prompt("Si vous voulez appeler ce numéro : " + num.textContent + ", entrez le de nouveau dans le champ ci-dessous puis validez ");
            if(numCheck == num.textContent){
                console.log("Vous appelez ce numéro : " + num.textContent);
                let audio = new Audio('audios/AUDIO.mp3');
                audio.play();
            }
            else {
                console.log("Mauvais numéro !");
            }
        });
    });
}

function plagiat(){
    document.body.addEventListener('copy', ()=>{
        console.log("Attention au plagiat !");
    })
}

function main(){
    augmenterTemps();
    date();
    loaderStart();
    membresAlert();
    backgroundColorChange();
    call();
    plagiat();
}

main();
