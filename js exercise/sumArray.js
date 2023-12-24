function sumArray(numbers) {
        let result = 0;
        for(let i = 0; i < numbers.length; i++){
            result += numbers[i]
        }
        return result
  }
  
  // Test the function
  console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
  
  console.log(3 === '3')