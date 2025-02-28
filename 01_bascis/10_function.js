const user = {
    username:"prem",
    price:900,
    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
        
        
    },
    id:71141
}

user.welcomeMessage();
user.username="sam"
user.welcomeMessage();

console.log(this);

function chai(){
    let name='prem'
    console.log(this.name);
    
}
chai();
const chai1= function(){
    let name1="prem1"
    console.log(this.name1);
    
}

chai1()

const chai2 =  () => {
    let username2 = "hitesh"
    console.log(this);
}
chai2();

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))




