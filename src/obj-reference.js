//valores primitivos
//string, number, boolean, bigint, undefined, symbol.

let number = 4;

function edit(num, value){
    num= value;
    console.log ("El valor interno es" + num);
}

edit(number, 10)

console.log("El valor externo es" + number);

//valores por referencia
// no se manda una copia, se manda el objeto como tal 

class A{
    constructor(number){
        this.number=number;
    }
}

let a = new A(4);

function editObject(obj, value){
    obj.number=value;
    console.log ("El valor interno es" + obj.number);
}

editObject(a, 10);
console.log ("El valor externo es" + a.number);