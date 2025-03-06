function setuser(username){
    this.username=username;
    console.log("called");
    
}

function User(username,email,id){
    setuser.call(this,username)
    this.email = email;
    this.id = id;
}

const userone = new User("prem",'grsgf',123);
console.log(userone);
