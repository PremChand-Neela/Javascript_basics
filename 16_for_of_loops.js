
const arr = [1,2,3,4,5,6,7];
for(num of arr){
    //console.log(num);
    
}

const greet = "hellow premchand";
for(i of greet){
    //console.log(`every cher of greet ${i}`);
    
}

// Maps

const map = new Map();
map.set('In',"India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for(const[key,value] of map){
    console.log(key,":-",value);
    
}
// myObject is not iterable for (for of) loop possible for (for in) loop
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for(const [key1,value1] of myObject){
    console.log(key1,":-",value1);

}
