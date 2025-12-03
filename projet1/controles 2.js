function verif(){
    eml=document.getElementById("eml").value 
    mdp=document.getElementById("mdp").value
    p=eml.indexOf('@')
    p1=eml.indexOf('.')
    if (p==-1 || p1==-1){
        document.getElementById("place1").innerHTML="email incorrect"
        return false
    }
    l=mdp.length
    let okMaj = false;
    let okMin = false;
    let okNum = false;
    let okSym = false;
    for(i=0;i<l;i++){
        if(mdp[i]>="A" && mdp[i]<="Z"){
            okMaj=true
        }
        else if(mdp[i]>="a" && mdp[i]<="z"){
            okMin=true
        }
        else if(mdp[i]>="0" && mdp[i]<="9"){
            okNum=true
        }
        else{
            okSym=true
        }
    }
    if(l<8){
        document.getElementById("place2").innerHTML="Minimum 8 carractére"
        return false
    }
    if(okMaj==false){
        document.getElementById("place2").innerHTML="Minimum un lettre majuscule"
        return false
    }
    if(okMin==false){
        document.getElementById("place2").innerHTML="Minimum un lettre miniscule"
        return false
    }
    if(okNum==false){
        document.getElementById("place2").innerHTML="Minimum un chiffre "
        return false
    }
    if(okSym==false){
        document.getElementById("place2").innerHTML="Minimum un symbole"
        return false
    }
}
function verif2(){
    eml=document.getElementById("eml1").value 
    p=eml.indexOf('@')
    p1=eml.indexOf('.')
    if (p==-1 || p1==-1){
        document.getElementById("place3").innerHTML="email incorrect"
        return false
    }

}