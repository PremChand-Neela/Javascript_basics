const score = 400
// console.log(score);

const balance = new Number(100)
console.log(balance);
const num1 = new Number(5005)
console.log(num1)
let stringg = new String("premchand")
console.log(stringg);



// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

 //console.log(Math);
 //console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

//console.log(Math.random());
console.log((Math.random()*10) + 1);
//console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

//console.log(Math.floor(Math.random() * (max - min + 1)) + min)

function abc(){
    console.log(abc.xyz);
    
}

abc();
abc.xyz=100;
abc.xyz=200;
abc();

let arr = [...'prem']

console.log(arr);
console.log(parseFloat('10+2'));
console.log(parseInt('F7M'));
console.log([1,2].map(num=>{
    if (num>0) return;
    return n*2;
}));
// 