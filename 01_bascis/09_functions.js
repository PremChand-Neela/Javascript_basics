function saymyname(){
    console.log("p");
    console.log("r");
    console.log("e");
    console.log("m");
    
}
saymyname();

function addtwonumbers(num1,num2){
    return num1+num2;
}
const res = addtwonumbers(2,3);
console.log(res);
function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Prem"))

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500,600, 2000))

const user= {
    username:"prem",
    prices:200
}

function handleObject(anyobject){
    console.log(`Username is${anyobject.username} and price is ${anyobject.prices}`);
    
}

handleObject(user);
handleObject({
    username: "sam",
    price: 399
})
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
 
console.log(returnSecondValue([200, 400, 500, 1000]));