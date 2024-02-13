//types primitifs
console.log(typeof(5))

console.log(typeof("that is very dificalte"))

console.log(typeof(underfined))

console.log(typeof(true))

//passage par valeur
let a;
let b;
a=5;
b=a;
b=6;

console.log(a)
console.log(b)

//le types objet de base
let liste=[1,2,3]

let cliste=liste

cliste.push(5)

console.log(liste)
console.log(cliste)

let stagaire={
    id:1,
    prenom:"meriem"
}
cstg=stagaire
Cstg.age=14

console.log(stagaire)
console.log(Cstg)

//copie
let liste2=[].concat(liste)

//spread operator (operateur de propagation)

let liste3=[...liste]

let stagaire3={...stagaire}
stagaire3.brache="DD"                              

stagaire3.annee="2024"

liste2.push(9)
console.log(liste)
console.log(liste2)
console.log(stagaire3)
console.log(stagaire)

console.log(liste3)

console.log(typeof(liste))