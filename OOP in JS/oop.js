const user = {
    name: "ROMESH",
    isLoggedIn: true,
    details: function(){
        console.log(`status : ${this.name}`);
        console.log(this);
    }
}

// user.details();

// Constructor function

function User(name, email){
    this.name = name;
    this.email = email;
    this.details = function(){
        console.log(`name : ${this.name}`);
    }
}

const newUser = new User('Romesh Tripathi', 'tripathi@gmail.com')
console.log(newUser.constructor)