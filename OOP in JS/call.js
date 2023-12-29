function NewProp(age){
    this.age = age;
}
function SetUsername(username){
    // complex DB calls
    console.log('called');
    this.username = username;
    NewProp.call(this, 45)
}

function createUser(username, email, password){
    SetUsername.call(this, username); // to pass referenct of caller object/this
    this.email = email;
    this.password = password;
}

const chai = new createUser("chai", "chai@fb.com", '123');
console.log(chai);