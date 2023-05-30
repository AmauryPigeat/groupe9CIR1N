function plateformes_tech(){

    let livingImg = document.getElementById("livingImg");
    let hybridImg = document.getElementById("hybridImg");

    livingImg.addEventListener("click", () => {
        openModal(0);
    });
    hybridImg.addEventListener("click", () => {
        openModal(1);
    });


}

function openModal(number){
    if(number == 0){
        document.querySelector('.overlay').style.display = "block";
        document.querySelector('.modal__living').style.display = "block";
    }
    else {
        document.querySelector('.overlay').style.display = "block";
        document.querySelector('.modal__hybrid').style.display = "block";
    }
}

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