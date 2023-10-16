// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

// describe("numMultBy3", () => {
//     it("takes in an array of numbers and returns an array with all the numbers multiplied by 3.", () => {
//         const numbersArray1 = [6, 7, 8, 9, 10]
//         const numbersArray2 = [24, 27, 30, 33, 36]
//       //expect(numMultBy3r(numbersArray1)).toEqual([18, 21, 24, 27, 30])
//       //expect(numMultBy3r(numbersArray1)).toEqual([72, 81, 90, 99, 108])
//     })
//   })

//   const numMultBy3 = (array) => { 
//     return array.map(numbersArray1 => numbersArray1 * 3) 
//     return array.map(numbersArray2 => numbersArray2 * 3)
// }

  
// // b) Create the function that makes the test pass.


// const numbersArray1 = [6, 7, 8, 9, 10]
// const numbersArray2 = [24, 27, 30, 33, 36]
// // Pseudo code:
//     //Create a Function = "numMultBy3"
//     ////.map method to return the new arrays    that will multiply by 3
//     // //input: Arrays of [6, 7, 8, 9, 10] and [24, 27, 30, 33, 36]
//     //output:
// const numMultBy3 = (array) => { 
//     return array.map(numbersArray1 => numbersArray1 * 3) 
//     return array.map(numbersArray2 => numbersArray2 * 3)
// }

    


// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

// describe("numDivBy3", (number) => {
//     it("takes a object as an argument and decides if the number inside it is evenly divisible by three or not.", () => {
//       expect(numDivBy3()).toEqual("15 is divisible by three")
//       expect(numDivBy3()).toEqual("0 is divisible by three")
//       expect(numDivBy3()).toEqual("-7 is divisible by three")
//     })
//   })
  
// // 
// const numDivBy3 = (object) => {
//     if (number%3 === 0) {
//         return `${number} is divisible by  three`
//     } else {
//         return `${number} is not divisible by three`
//     }
// }

// const object1 = { number: 15 }
// // Expected output: "15 is divisible by three"
// const object2 = { number: 0 }
// // Expected output: "0 is divisible by three"
// const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.

// Pseudo code:
//              Create a function = numDivBy3
            //Parameter = number
            //create a conditional statement
            //output: either divisible by 3 or not
            

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.
// describe("newArray", () => {
//     it("takes in an array of words and returns an array with all the words capitalized.", () => {
//       expect(randomNouns1()).toEqual["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
//       expect(randomNouns2()).toEqual["Temperature", "Database", "Chopsticks", "Mango"]
//     })
//   })
// const newArray = (array, string) => {
//     return array.toUpperCase[0](randomNouns1)
//     return array.toUpperCase[0](randomNouns2)
// }
// const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.

// Pseudo code:
    //create a function = newArray
    //parameter (array, string)
    //use .toUpperCase method
