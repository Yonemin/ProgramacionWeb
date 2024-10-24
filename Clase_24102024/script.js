//arreglos
/*
let arreglo = ["dato_1", 1, Boolean];
console.log("Tamaño del arreglo: "+arreglo.length);
arreglo.push("Inserto nuevo valor");
console.log(arreglo[3]);
console.log("Tamaño del arreglo: "+arreglo.length);

//tabla del 5, hasta que el array tenga 6 espacios en memoria, después q diga "fin de arreglo", valor de la posición = 30
let tabla_5 = [];
for(let i=0; i<12; i++){
    if((i%2)===0){
        tabla_5.push(((i/2)+1)*5)
        console.log(tabla_5[i/2]);
        console.log("i: "+i)
    }
}
console.log("Fin del arreglo. Valor de la posición: "+tabla_5[5])
*/

let tabla_5 = [];
for(let i=0; i<10; i++){
    if(tabla_5.length<6){
        tabla_5.push((i+1)*5)
        console.log(tabla_5[i]);
        console.log("i: "+i)
    }
}
console.log("Fin del arreglo. Valor de la posición: "+tabla_5[5])