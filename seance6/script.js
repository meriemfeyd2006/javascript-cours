//les donctions flechees
   /* let a = function (){
        return console.log("helloo!!javascript")
    };

    let greet=() => console.log("helloo!!python")

    let nomcomplet=(nom,prenom) => {
      let fullnam=nom+""+prenom;
        return fullnam
    
    console.log(nomcomplet("meriem","feyd"))*/

//les expressions lambdas homa likandiro fihome constente
    //let days=["lundi","mardi","mercredi","vendredi","samedi",]
    //days.map((item) => {
       //return console.log(item)
    //})

/*let stagaire=[
    {prenom:"meriem",nom:"feyd",age:18},
    {prenom:"meryem",nom:"elfakiri",age:20},
    {prenom:"najat",nom:"feyd",age:19},
    {prenom:"hanaa",nom:"barad",age:24}
];
let a = {nom:"feyd"}
a["prenom"] = "meriem"
a.age = 24
let b;
b={...a,id : 1}
console.log("hay",b);

/*stagaire.map((complet)=>{
    nomcomplet= nomcomplet+"nom"
    return console.log(nomcomplet);
})
stagaire.map((complet)=>{
    nomcomplet= complet["nom"]+""+complet["age"]
    return console.log(nomcomplet);
})*/


//les fonctions la premiere methode
let sm;
function somme(a,b){
    return a + b
}
sm = somme(5,10)
console.log(sm)

//les fonctions la deuxieme methode fonction anonime mafihache smya
//function expressions homa likadiro fihome const

const somme=function (a,b){// fonction normale et canafectiha l wahade lvariable
    return a + b
}
console.log(somme(10,6))

// arrow function

const somme= (a,b)=>{
    return a + b
}
console.log(somme(10,6))

// arrow function methode 2
const greet= (nom)=>{
    return "bonjour"
}
console.log(greet(feyd)) //nsayfto parametre cankatboha fa ligne lifihe fleche wasste greet 

// forEtch catbokli lina 3la liste
const days = ["lundi", "mardi","mercredi","jeudi","vendredi","samedi"]
days.forEach(function(value,index,array){
    console.log("ok!!!")
})
//map catraja3e
// forEtch catbokli lina 3la liste
//const days = ["lundi", "mardi","mercredi","jeudi","vendredi","samedi"]
//days.forEach((item,index,arrdays) => {
    //console.log(item)
    //console.log(index)
   
//})
// map est une methode qui retourne  les element se forme de une nouvelle liste
    //let jours=days.map((item) => {
        //return item})
    //console.log(jours)
//bache maybdache mane zero kandiro matalane index+1
/*let jours=days.map((item,index) => {
    return item=item+""+index
})
console.log(jours)*/

const stagiaires=[
    {nom:"feyd",prenom:"meriem",age:18},
    {nom:"elfakiri",prenom:"meryem",age:18},
    {nom:"feyd",prenom:"meriem",age:18}
]
//execution haka:["feyd meriem","feyd hajar","elfakiri meryem"] 
//entre map an une fonction
let nomcomplet = stagiaires.map((box)=>{
     return box.prenom+" "+box.nom //bache itla3e nom complet exp:meriemfeyd
})
console.log(nomcomplet)

//[ hada kitssama objet:{nom:feyd , age:16,..........}]
/*let dd= stagiaires.map((item)=>{
  let st;
  st={nom:item.nom, age:item.age}  ;//objet   kifache nad5ale item li9adame dac attribut kandiro smite fonction.attribut likina f map
  return st
})
console.log(dd)*/
let dd= stagiaires.map((item)=>{
    let st;
    st={...item}  ;
    if (item.age<=16){
        st.remarque="moins de 16 ans"
    }else if (item.age>16){
        st.remarque="plus de 16 ans"
    }
    return st
  })
  console.log(dd)
// locale makata3rafche bara fonction
// const bache ta9tare tmodifier
//index+1 bache ibda mane 1