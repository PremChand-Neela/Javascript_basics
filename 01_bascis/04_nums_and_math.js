const num=500;
console.log(num);


const balance = new Number(100);
console.log(balance.toString().length);
console.log(balance.type);
console.log(balance.toFixed(2));


const num1 = 10000000000;
console.log(num1.toLocaleString('en-IN'));

const num2 = 12.4342542667;
console.log(num2.toFixed(4));
console.log(num2.toPrecision(2));

// +++++++++++++++++++++++++++++++++++MATH+++++++++++++++++++++++++++++++++++++//
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(6.7));
console.log(Math.ceil(9.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));


console.log(Math.random());
console.log(Math.random()*10);
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10));


const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min+1)+min));






