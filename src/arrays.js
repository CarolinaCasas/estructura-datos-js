//array: colección de valores o variables
// un arreglo es un objeto, se maneja por referencia
let array = [1,2,"pato",true];

// esta funcion recorre un arreglo
function showArray (array){
    console.log("-----")
    for(i=0; i<array.length; i++){
        console.log(array[i]);
    }
}

// esta funcion hace lo mismo que la anterior sólo que usando for of
function showArray1 (array){
    console.log("-----")
    for(let item of array){
        console.log(item);
    }
}

showArray(array);
showArray1(array);