//inmutabilidad_ no se modifica lo que se recibe, se regresa una copia
//mutable_ se modifica lo que se recibe

const numbers =[1,2,3,4,5];
const numbers2 =[1,2,3,4,5];

function mulMutable(collection, num) {
    for(i=0; i<collection.length; i++){
        collection[i] *= num;
    };

    return collection;
}

//no modifica el array original

function mulInmutable(collection, num) {
    const newNumbers =[];

    for(let item of collection){
        newNumbers.push(item * num);
    }

    return newNumbers;
}

const newArray = mulMutable(numbers, 2);

console.log(newArray);
console.log(numbers);

const newArray2 = mulMutable(numbers2, 2);
console.log(newArray2);
console.log(numbers2);

// inmutabilidad en los objetos
class Beer{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
}

// modifica el objeto original
function toUpperMutable(beer){
    beer.name = beer.name.toUpperCase();
    return beer;
}

//no modifica el objeto original

function toUpperInmutable(beer){
    const newBeer = {...beer}; //spread operator

    newBeer.name = beer.name.toUpperCase();
    return newBeer;
}


const beer = new Beer("delirium", 6);

//const newBeer =toUpperMutable(beer);

const newBeer = toUpperInmutable(beer);
console.log(newBeer);
console.log(beer);