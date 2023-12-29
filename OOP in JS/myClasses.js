// ES6

class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    // Declare functions.
    encryptPassword(){
        return `${this.password}abc`;
    }

    name(){
        return `${this.username.toUpperCase()}`;
    }

}

// Inheritance

class Teacher extends User{
    constructor(teachername, email, password, coursename){
        super(teachername, email, password);
        this.coursename = coursename
    }
    addCourse(){
        console.log(`course added by ${this.username}`);
    }
}

const chai = new User('chai', 'chai@gmail.com', '1234');

console.log(chai.encryptPassword());
console.log(chai.name());

const teacher = new Teacher('coffee', 'coffee@cup.com', '1234', 'Java');
console.log(teacher.name());
teacher.addCourse();

// Behind the scene


