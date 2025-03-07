const user = {
    username:"premchand",
    loginCount:6,
    signIN:true,

    getUserdetails:function(){
        console.log("Got the user details from database");
        console.log(`UserName: ${this.username}`);
        console.log(`${this}`);
        
        
        

    }
}

console.log(user.username);
console.log(user.getUserdetails);
console.log(this);

// Constucter

function User(username,logincount,islogined){
    this.username=username;
    this.logincount=logincount;
    this.islogined=islogined;

}

const userone = new User("prem",2,true);
const usertwo = new User("chand",4,true);

console.log(userone);
console.log(usertwo);
console.log(userone.constructer);


