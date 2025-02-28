const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for(const key in myObject){
    //console.log(key,'is',myObject[key]);
    
}

const programming = ["js", "rb", "py", "java", "cpp"]
for(const it in programming){
    //console.log(it,"number is:",programming[it]);
    
}
for (const key in programming) {
    console.log(programming[key]);
}
const map = new Map();
map.set('In',"India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for(const key in map){
    console.log(map[key]);
    
}