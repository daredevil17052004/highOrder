const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
const numberArray = [12,324,213,4,2,3,45,4234];
const myArray = [11, 34, 20, 5, 53, 16];

// Progression 1:
function slice(number1,number2) {
    let modifiedFood = [];
    for(let i = number1; i<number2-1;i++ ){
        modifiedFood.push(foods[i]);``
    }
    return modifiedFood;
}

// Progression 2:
function spliced(){
    foods.splice(2,0,'noodles','icecream');
    return foods;
}   

// Progression 3:

function isEven(num){
    if(num%2==0){
        return true;
    }
}

function isPrime(num){
    for(let i=2; i<=Math.sqrt(num); i++){
        if(num%i === 0) return false;
    }
    return num>1;
}

function checkNumber(numberArray,operation){
    modifiedNumberArray = numberArray.filter(operation);
    return modifiedNumberArray;
}


// Progression 4:

function reject(numberArray){
    let alagNon = [];
    numberArray.forEach(num => {
        isPrime(num) ? null: alagNon.push(num); 
    });

    return alagNon;
}

function nonPrime(numberArray){
    arr = reject(numberArray);
    return arr;
}



// Progression 5:

const isEvenUsingLambda = number => number%2 ==0; 


// Progression 6:

function sq(num){
    return num*num;
}

function findSquareOfNumbers(myArray){
    let y =myArray.map(sq);
    return y;
}

// Progression 7:

function multiply(myArray){
    return myArray.reduce((m, num)=>{
        return m*num;
    })
}

function sumOfSquares(myArray){
    return myArray.map(sq).reduce((sum,number) => {
        return sum+number;
    })
}
