function enterEditMode(){
    let editButton = document.getElementById("editButton");

    editButton.addEventListener("click", confirmEnterEdit);
}

function confirmEnterEdit(){
    let user = prompt("Entrez le nom du profil administrateur");
    if(user == "admin"){
        let mdp = prompt("MDP : ");
        if(mdp == "admin_pwd"){
            let editButton = document.getElementById("editButton");
            editButton.style.color = "red";
            let modifierDiv = document.getElementById("addDelQuitEditButton");
            modifierDiv.style.opacity = 100;
        }
        else{
            alert("Mauvais mot de passe (touche pas à ça garçon)");
        }
    }
}

function editMode(){
    /*adding a cell*/

    let addButton = document.getElementById("plus");
    addButton.addEventListener('click', function(){
        let topDiv = document.getElementById("top");
        newMemberCount++;
        topDiv.innerHTML += '<div id="cardNewMember' + newMemberCount + '"> <br><br> <img src="img/membres/marex.jpg" title="Dr.RANDOM" alt="Image not found !" width="50%"> <h2> <input type="text" id="nameMember' + newMemberCount + '" placeholder="Prénom Nom"> </h2> <br><br><hr><br> <p class="ref"> Enseignant chercheur<br>ISEN Yncréa Ouest - Nantes<br> </p> <br> <p class="links"> </p> <br><br> <div class="tags"></div> <br> </div>';
    
        let newDiv = document.getElementById("cardNewMember" + newMemberCount);
    
        newDiv.style.border = "2px solid #5E5E5E";
        newDiv.style.borderRadius = "11px";
        newDiv.style.textAlign = "center";
        newDiv.style.padding = "30px";
        let nameInput = document.getElementById("nameMember" + newMemberCount);
        nameInput.addEventListener('keydown', function(event) {
            if (event.key === 'Enter'){
                /* ajout du prenom nom*/
                ""
                let name = nameInput.value;
                let h2 = newDiv.getElementsByTagName("h2");
                h2[0].innerHTML = name;
                
                /*recup du prenom nom pour créer adresse email*/
                let slicedName = name.split(' ');
                let emailPLace = newDiv.getElementsByClassName("ref");
                emailPLace[0].innerHTML += '<a href="mailto:' + slicedName[0].toLowerCase() + '.' + slicedName[1].toLowerCase() + '@isen-ouest.yncrea.fr">' + slicedName[0].toLowerCase() + '.' + slicedName[1].toLowerCase() + '@isen-ouest.yncrea.fr </a> <br><br><hr>';
    
                /*création des liens*/
                let linksPlace = newDiv.getElementsByClassName("links");
                
                linksPlace[0].innerHTML += '<input type="text" id="LinkedInLink" placeholder="linkedIn link"> <br>';
                linksPlace[0].innerHTML += '<input type="text" id="googleLink" placeholder="Google Scholar link"> <br>';
    
                let linkInput = document.getElementById("googleLink");
    
                linkInput.addEventListener('keydown', function(event){
                    if (event.key === 'Enter'){
                        /*remplacement des liens*/
                        let LinkedInLink = document.getElementById("LinkedInLink").value;
                        let googleSchoLink = document.getElementById("googleLink").value;
    
                        linksPlace[0].innerHTML = '<a href="https://' + slicedName[0].toLowerCase() + slicedName[1].toLowerCase() + '.github.io/" target="_blank"><i class="fa-solid fa-globe"></i>     </a>';
                        linksPlace[0].innerHTML += '<a href="' + LinkedInLink + '" target="_blank"><i class="fa-brands fa-linkedin"></i>     </a>'
                        linksPlace[0].innerHTML += '<a href="' + googleSchoLink + '" target="_blank"><i class="fa-solid fa-graduation-cap"></i>     </a>'
                        linksPlace[0].innerHTML += '<a href="https://www.researchgate.net/profile/' + slicedName[0] + '-' + slicedName[1] + '" target="_blank"><i class="fa-brands fa-researchgate"></i></a>'
                    
                        /*crétion des tags*/
                        let list = newDiv.getElementsByClassName("tags");
                        list[0].innerHTML = '<input type="text" id="firstTag" placeholder="add  max 6 tags"> <input type="text" id="second"> <br>'
                        list[0].innerHTML += '<input type="text" id="third" > <input type="text" id="fourth"> <br>'
                        list[0].innerHTML += '<input type="text"  id="fifth" placeholder="press enter" > <input type="text" id="sixth" placeholder="when finished"> <br>'
    
                        let tagFinish = document.getElementById("sixth");
                        tagFinish.addEventListener('keydown', function(event){
                            if (event.key === 'Enter'){
                                /* remplacement des input par des réels tag */
                                let firstTag = document.getElementById("firstTag");
                                console.log(firstTag);
                                let secondTag = document.getElementById("second");
                                let thirdTag = document.getElementById("third");
                                let fourthTag = document.getElementById("fourth");
                                let fifthTag = document.getElementById("fifth");
                                let sixthTag = document.getElementById("sixth");
                                list[0].innerHTML = '<a href="">' + firstTag.value + '</a> <a href="">' + secondTag.value + '</a><br><br> <a href="">' + thirdTag.value + '</a> <a href="">' + fourthTag.value + '</a><br><br> <a href="">' + fifthTag.value + '</a> <a href="">' + sixthTag.value + '</a>';
                            }
                        });
                    }
                });
            }
        });
        
    });

    /*deleting a cell*/
    let delButton = document.getElementById("minus");
    delButton.addEventListener("click",function(){
        let div = document.getElementById("cardNewMember" + newMemberCount);
        div.remove();
        newMemberCount--;
    });
    /*quit edit mode*/
    let quitButton = document.getElementById("cross");
    quitButton.addEventListener("click",function(){
        let editButton = document.getElementById("editButton");
        let modifierDiv = document.getElementById("addDelQuitEditButton");
        editButton.style.color = "black";
        modifierDiv.style.opacity = 0;
    });
}



let newMemberCount = 0;
function main(){
    enterEditMode();
    editMode();
}

main();