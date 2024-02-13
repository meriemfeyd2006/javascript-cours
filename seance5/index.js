
//exemple la boucle for
let jours=["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"]

for(let i=0;i<=6;i++){
    console.log(jours[i])
};
console.log(jours.length)//length le nombre des valeur 

//length hya nombre les elements li3adna f tableau
for(let i=0;i<=(jours.length -1);i++){
    console.log(jours[i])
}

//in kital3o les indices
for(let j in jours){
    console.log(j)
}

//of kandiroha bachedirectement bache itla3lina element
for(let jour of jours){
    console.log(jour)
}

//while loop tantque
let x;
x=10
while(x>=0){
    console.log(x)
    x-=1
}

//while do 
let y=1;
do{
    console.log(y)
    y=1
}
while(y<=0)

//for each
let jrs=" "
jours.forEach(MyFunction)

function MyFunction(value,index,array){
    jrs +=" "+value;
    console.log(jrs)
}
// continue makat execitiche dacchi limaktobe wraha
for(let i=0;i<=jours.length -1;i++){
    if(i===3){
     console.log("stop")
    continue;
    }
    console.log(jours[i])
}
// break 
for(let i=0;i<=jours.length -1;i++){
    if(i===3){
     console.log("stop")
    break;
    }
    console.log(jours[i])
}

//les expressions lambdas 
let days=["lundi","mardi","mercredi","vendredi","samedi",]
days.map((item) => {
       return console.log(item)
})

