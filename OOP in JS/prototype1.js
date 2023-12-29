String.prototype.trueLength = function(){ // Adding prototype function to the EXTRA PROPERTY
    return this.trim().length;
}

Object.prototype.romeshJi = function(){
    console.log('Present Romesh Ji')
}

let myName = new String('hitesh   ');
console.log(myName.trueLength());
Array.romeshJi();