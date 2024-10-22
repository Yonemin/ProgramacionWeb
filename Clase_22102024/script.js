//función ordinaria
function hola(a,b){
    return(a+b);
}

console.log(hola(3,5));

//convertir a función flecha
const suma = (a,b) => {
    return(a+b);
}

console.log(suma(8,0));

//simplificar
const suma_2 = (a,b) => a+b;

console.log(suma_2(33,55));

//solo un parámetro
const cuadrado = x => x*x;
console.log(cuadrado(3));