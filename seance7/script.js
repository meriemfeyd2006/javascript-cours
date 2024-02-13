 //code akram
 /*let x=+document.querySelector(".nombre1").value// bache nl9a dic class cadiro (querySelector)
 let y=+document.querySelector(".nombre2").value
 console.log(x+y)*/


 //methode de amine
 let a = Number(document.querySelector(".nombre1").value);

 let b = Number(document.querySelector(".nombre2").value);

 let resultat = a+b

 document.querySelector(".resultat").value = resultat

 if(resultat>20){
    document.querySelector(".resultat").style.backgroundColor = "red"
 }else{
    document.querySelector(".resultat").style.backgroundColor = "aqua"
 }

 

