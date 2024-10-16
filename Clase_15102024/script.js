//definición de una función
/*
function hello(){
    console.log('Hola clase');
    console.log(' 5IV7');
}

//Llamada a la función
hello();
hello();
hello();
hello();
hello();


//Retorno de una función
function hello(){
    return('Hola Clase');
}

const result = hello();

console.log(result)


//función que retorna otra función
function hello(){
    return function(){
        return('Hola, soy la función 2');
    };
}

console.log(hello()())


//función con parámetros
function add(x){
    console.log(x);
}

add(5);

//multiparámetros
function add(x,y){

    console.log(x+y)
}

add(5,3);


//control de error en múltiples parámetros 
function add(x,y){      //o y=0

    if(y===undefined){
        y=0
    }
    console.log(x+y)
}

add(8,);


//parámetro de tipo cadena
function add(name){
    console.log('Hola '+name)
}

add("Clase JS")
*/

//Objetos
const user = {
    nombre:'Denji',
    apellidoP:'Hayawaka',
    apellidoM:'Fujimoto',
    edad:26,
    direccion:{
        calle:'Yokohama',
        numero:696,
        colonia:'Shoujo',
        delegacion:'Katakana'
    },
    amigos:['PowerPoint','Aki47'],
    activo:true
}

//En consola: nombre, apellidos, edad, amigos
//En un alert: si está activo, calle, número, colonia, delegación

console.log(user.nombre, user.apellidoP, user.apellidoM, user.edad, user.amigos[0], user.amigos[1])
if(activo=true){
    alert('Está activo')
}else{
    alert('No está activo')
}
alert(user.direccion.calle+' '+user.direccion.numero+' '+user.direccion.colonia+' '+user.direccion.delegacion)