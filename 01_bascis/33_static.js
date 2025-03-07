class User{
    constructor(username){
        this.username=username
    }
    logme(){
        console.log(`user:${this.username}`);
        
    }
    static createID(){
        return '123';
    }
}

const h1 = new User("premchand");
h1.logme();
//h1.createID(); we can not access the static method

class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email=email;
    }
    show(){
        console.log(`you eamil is ${this.email}`);
        
    }
}
let h2 = new Teacher("chandu","@132");
//h2.createID()// it can not be accesssedth