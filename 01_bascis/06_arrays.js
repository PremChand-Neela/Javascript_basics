const myarray = [1,2,3,4,5,6];
 let myheros = ["spiderman","superman","premchnad"];

 const newarr = new Array(1,2,3,4,5,6,7,8,9,0);
 console.log(newarr);
 
 console.log(myarray);
 console.log(myheros);

 console.log(myarray.push(7));
 console.log(myarray.pop(6));

 myarray.shift(1);
 console.log(myarray);
 myarray.unshift(9);myarray.unshift(5);myarray.unshift(4);myarray.unshift(2);myarray.unshift(55);
 console.log(myarray);

 console.log(myarray.includes(9));
 console.log(myarray.indexOf(3));

 let newarr1= newarr.join();
 console.log(newarr1);
 console.log(newarr);

 console.log(typeof(newarr1));

 console.log("A ", myarray);

 console.log("b",myarray.slice(1,3));


 const myn2 = myarray.splice(1, 3)
console.log("C ", myarray);
console.log(myn2);
 
 
 
 



 
 


 
 
 
 