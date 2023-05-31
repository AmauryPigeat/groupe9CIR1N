function publications(){

    // Récupération du bouton 'Filtrer' et ajout de l'événement click
    let button = document.querySelector('.filterButton');
    button.addEventListener("click", () => {

        filter();

    });
}


function filter(){
    // Récupération des valeurs entrées dans le filtre
    let name = document.querySelector('.autorName');
    let nameSplit = name.value.split(' '); // On sépare la chaîne de caractères pour avoir une liste de mots
    
    
    let title = document.querySelector('.titleName');
    let titleSplit = title.value.split(" ");

    let select = document.querySelector('.yearDate');
    let date = select.options[select.selectedIndex].textContent; // Permet de connaître la valeur de l'option choisie du select
    

    let radioBox;
    let value = document.getElementsByName('type');
    for (let radio of value){
        if (radio.checked) {    
            radioBox = radio.value; // Récupération du type de publication que l'on veut
        }
    }
    /////////////////////////
    // Permet de faire disparaître toutes les publications pour les réafficher plus tard
    let classes = ["heterogeneity", "semantic", "clouds", "car", "iot"]; // Liste de mots-clé des différentes publications
    document.querySelector('.no-result').style.display = 'none';
    classes.forEach(element => {
        document.querySelector('.'+element).style.display = 'none'; // On les fait disparaître
    });
    /////////////////////////
    // Liste des revues et communications
    let revues = ["heterogeneity", "car", "iot"];
    let communications = ["semantic", "clouds"];

    let counter = 0;
    /////////////////////////
    // forEach qui permet de voir si un élément correspond au filtre
    classes.forEach(element => {
        // Récupération des auteurs, du titre et de la date des publications (grâce à des classes définies dans le HTML)
        let elementAutor = document.querySelector('.'+element+'Names').textContent;
        let elementTitle = document.querySelector('.'+element+'Title').textContent;
        let elementYear = document.querySelector('.'+element+'Date').textContent;
        
        let elementAutorSplit = elementAutor.replaceAll(',', '').split(' ');
        let elementTitleSplit = elementTitle.toLowerCase().replaceAll(',', '').split(' ');


        /////////////////////////
        // Détermination du type de la publication
        let elementType = "all";
        revues.forEach(publication => {
            if(publication == element){
                elementType = "revue";
            }
        });
        communications.forEach(publication => {
            if(publication == element){
                elementType = "communication";
            }
        });
        /////////////////////////
        // On vérifie si l'input du filtre auteur est vide
        let iBool = false;
        if(!name.value){
            iBool = true;
        }
        ////////////////////////
        // On vérifie si un mot de l'input filtre auteur fait partie des auteurs de la publication (dans le HTML)
        let i = 0;
        elementAutorSplit.forEach(autor => {
            if(nameSplit.includes(autor)){
                i++;
            }
        });
        ////////////////////////
        // On fait de même pour le titre
        let jBool = false;
        let j = 0;
        if(!title.value){
            jBool = true;
        }
        elementTitleSplit.forEach(title => {
            if(titleSplit.includes(title)){
                j++;
            }
        });
        ////////////////////////
        // On fait de même pour la date
        let kBool = false;
        let k = 0;
        if(date == "----"){
            kBool = true;
        }
        if(elementYear == date){
            k++;
        }
        ////////////////////////
        // Si le filtre est entièrement vide, on affiche toutes les publications
        if(i==0 && k==0 && j==0){
            document.querySelector('.'+element).style.display = 'block';
        }
        ////////////////////////
        // On affiche tous les élements
        document.querySelector('.'+element).style.display = 'block';
        
        ////////////////////////
        // Si le filtre auteur contient un mot qui ne fait pas partie des auteurs de la publication, on fait disparaître la publication
        if(i==0 && !iBool){
            document.querySelector('.'+element).style.display = 'none';
        }
        ////////////////////////
        // Si le filtre titre contient un mot qui ne fait pas partie du titre de la publication, on fait disparaître la publication
        if(j==0 && !jBool){
            document.querySelector('.'+element).style.display = 'none';
        }
        ////////////////////////
        // Si la date du filtre ne correspond pas à la date de la publication, on fait disparaitre la publication
        if(k==0 && !kBool){
            document.querySelector('.'+element).style.display = 'none';
        }
        ////////////////////////
        // Si le type du filtre (Article, Communication, Toutes) ne correspond pas au type de la publication, on fait disparaitre la publication
        if(elementType!=radioBox && radioBox != "all"){
            document.querySelector('.'+element).style.display = 'none';
        }

        // Counter publication display

        if(document.querySelector('.'+element).style.display == 'block'){
            counter++;
        }

    });
    // On fait apparaitre le titre "Aucun résultat" si aucune publication n'est affichée
    if(counter==0){
        document.querySelector('.no-result').style.display = 'block';
    }


}






publications();