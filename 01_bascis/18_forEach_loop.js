const num=[1,2,3,4,5,6,7]

num.forEach(function(val){
    //console.log(val);
    
})

num.forEach((item)=>{
    //console.log(item);
    

})

function printme(item1){
    console.log(item1);
    
}
num.forEach(printme);


const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach((item,index,arr) =>{
    //console.log(item,index);
    
})

const mycoding = [
    {
        languageName: "javascript",
        languageFileName: "js" 
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

mycoding.forEach((item2) =>{
    console.log(item2.languageName);
    
})