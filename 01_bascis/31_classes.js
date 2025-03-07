class User {
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password
    }

    encryptpassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const one = new User("prem",'chai@gmail.com','1234')
console.log(one.encryptpassword());
console.log(one.changeUsername());


function user(username1,email1,password1){
    this.username1=username1;
    this.email1=email1;
    this.password1=password1;

}
user.prototype.encrypt = function(){
    return `${this.password1}abc`;
}
user.prototype.change = function(){
    return `${this.username1.toUpperCase()}`
}

const user1 = new user('chand','chand@gmail.com','12345');
console.log(user1);
console.log(user1.encrypt());

