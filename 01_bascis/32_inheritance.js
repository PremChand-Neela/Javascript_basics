class User {
    constructor(username){
        this.username=username;
    }
    show(){
        console.log(`hi user:${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username);
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`A new coures was added by ${this.username}`);
        
    }

}

const user1 = new Teacher("prem",'prem@gmail.com','1234');
user1.addCourse();
user1.show();
const user2 = new User("chandu");
user2.show();
console.log(user1 instanceof Teacher);// True
console.log(user1 instanceof User);// True
console.log(user2 instanceof Teacher);// False


