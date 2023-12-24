function reverseString(str) {
    // Your code here
    let res = ""
    for(let i = 0; i < str.length; i++){
        res = str[i]+res
    }
    return res
  }
  
  // Test the function
  console.log(reverseString("hello")); // Output: "olleh"
  