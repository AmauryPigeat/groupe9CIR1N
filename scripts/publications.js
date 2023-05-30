function publications(){


    
    
    let button = document.querySelector('.filterButton');
    button.addEventListener("click", () => {

        filter();

    });


}


function filter(){
    let name = document.querySelector('.autorName');
    let nameSplit = name.value.split(' ');
    
    
    let title = document.querySelector('.titleName');
    let titleSplit = title.value.split(" ");

    let select = document.querySelector('.yearDate');
    let date = select.options[select.selectedIndex].textContent;
    

    let radioBox;
    let value = document.getElementsByName('type');
    for (let radio of value){
        if (radio.checked) {    
            radioBox = radio.value; 
        }
    }
    let classes = ["heterogeneity", "semantic", "clouds", "car", "iot"];
    document.querySelector('.no-result').style.display = 'none';
    classes.forEach(element => {
        document.querySelector('.'+element).style.display = 'none';
    });


    let revues = ["heterogeneity", "car", "iot"];
    let communications = ["semantic", "clouds"];

    let counter = 0;

    classes.forEach(element => {
        let elementAutor = document.querySelector('.'+element+'Names').textContent;
        let elementTitle = document.querySelector('.'+element+'Title').textContent;
        let elementYear = document.querySelector('.'+element+'Date').textContent;
        
        let elementAutorSplit = elementAutor.replaceAll(',', '').split(' ');
        let elementTitleSplit = elementTitle.toLowerCase().replaceAll(',', '').split(' ');


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
        

        let iBool = false;
        let i = 0;
        if(!name.value){
            iBool = true;
        }
        elementAutorSplit.forEach(autor => {
            if(nameSplit.includes(autor)){
                i++;
            }
        });
        

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

        let kBool = false;
        let k = 0;
        if(date == "----"){
            kBool = true;
        }
        if(elementYear == date){
            k++;
        }

        if(i==0 && k==0 && j==0){
            document.querySelector('.'+element).style.display = 'block';
        }

        document.querySelector('.'+element).style.display = 'block';
        
        if(i==0 && !iBool){
            document.querySelector('.'+element).style.display = 'none';
        }
        if(j==0 && !jBool){
            document.querySelector('.'+element).style.display = 'none';
        }
        if(k==0 && !kBool){
            document.querySelector('.'+element).style.display = 'none';
        }
        if(elementType!=radioBox && radioBox != "all"){
            document.querySelector('.'+element).style.display = 'none';
        }

        // Counter publication display

        if(document.querySelector('.'+element).style.display == 'block'){
            counter++;
        }

    });
    
    if(counter==0){
        document.querySelector('.no-result').style.display = 'block';
    }


}






publications();