//funcion primera clase

function hi (){
    console.log("hola");
}

// funcion guardada en variable
const h= hi;

// ejecucuión de función
h();

//funcion primera clase con parámetros

function sum(a, b){
    return a+b;
}

const s = sum;

// Se pueden poner funciones dentro de funciones
// las funciones que pueden llamar a otras funciones son llamadas funciones de orden superior
console.log(s(2,3))

// Funciones de orden superior
function some(fn){
    console.log("hace algo antes");
    fn();
    console.log("hace algo después");
}

some(h);

function some2 (fn, num1, num2){
    console.log("hace algo antes");
    const res= fn(num1, num2);
    console.log("hace algo después", res);
}
some2(s, 2,3);

