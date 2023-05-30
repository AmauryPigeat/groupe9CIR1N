let i = 0;
let string = ["Qui"," sommes","-nous"," ?"];
let printPlace = document.getElementById("quiSommeNous");

function printBySecondQSN(){
    if(i == 6){
        printPlace.style.textAlign = "right";
        i++;
        return ;
    }
    if(i == 7){
        printPlace.style.textAlign = "left";
        i++;
        return ;
    }
    if(i == 8){
        printPlace.style.textAlign = "center";
        i++;
        return ;
    }
    if(i == 9){
        printPlace.innerText = "";
        i = 2;
        return ;
    }
    if(i >= 2){
        printPlace.innerText += string[i-2];
        i++;
        return ;
    }
    i++;
}

setInterval(printBySecondQSN,1000);

function main(){
    
    
    
}

main();