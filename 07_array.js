const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros)

//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);

let heros = marvel_heros.concat(dc_heros);
//console.log(heros);

const new_heros = [...marvel_heros,...dc_heros];
console.log(new_heros);

const arr = [1,2,3,4,[5,7,8],10,[11,12,[13,14]]];
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
//console.log(another_array);
//console.log(arr);

const new_arr = arr.flat(Infinity);
//console.log(new_arr);
const new_another_array = another_array.flat(Infinity)
console.log(new_another_array);

console.log(Array.isArray("PREMCHAND"))
console.log(Array.from("premchandnella"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 =100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));







