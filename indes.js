let nomedoheroi = "bernardo"
let xpdoheroi = 6000

let niveldoheroi 

if(xpdoheroi < 1000){
    niveldoheroi="bronze"
}else if(xpdoheroi >= 1001 && xpdoheroi <= 2000){
    niveldoheroi = "ferro"
}else if(xpdoheroi >= 2001 && xpdoheroi <= 5000){
    niveldoheroi = "prata"
}else if(xpdoheroi >= 6001 && xpdoheroi <= 7000){
    niveldoheroi = "ouro"
}else if (xpdoheroi >= 7001 && xpdoheroi <= 8000){
    niveldoheroi = "platina"
}else if (xpdoheroi >= 8001 && xpdoheroi <= 9000){
    niveldoheroi = "ascendente"
}else if (xpdoheroi >= 9001 && xpdoheroi <= 10000){
    niveldoheroi = "imortal"
}else{
    niveldoheroi = "radiante"
}

console.log("o heroi de nome " + nomedoheroi + "esta no nivel " + niveldoheroi )