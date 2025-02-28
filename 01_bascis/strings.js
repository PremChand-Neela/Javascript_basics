const namee = "hitesh"
const repoCount = 50

console.log(namee + repoCount + " Value");
console.log(`my name is ${namee} and my repo count is ${repoCount} `);

const wordes = new String('iam going to collage every day');
console.log(wordes.charAt(6));
console.log(wordes.length);
console.log(wordes[6]);
console.log(wordes.__proto__);
console.log(wordes.substring(0,6));

const words1 = wordes.slice(2,6)
console.log(words1);

const name1 = "            prem        ";
console.log(name1);
console.log(name1.trim());

const url = "https://lms.cuchd.in/mod/page/view.php?id=2251926";
console.log(url.replace('lms','prem'));
console.log(url.includes('cuchd'));








