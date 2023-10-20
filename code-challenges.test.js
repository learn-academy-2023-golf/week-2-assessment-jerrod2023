// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

describe("multiplyBy3", () => {
    it("returns an array with all the numbers multiplied by 3", () => {
      const numbersArray1 = [6, 7, 8, 9, 10]
      // Expected output: [18, 21, 24, 27, 30]
      const numbersArray2 = [24, 27, 30, 33, 36]
      // Expected output: [72, 81, 90, 99, 108]

      expect(multiplyBy3(numbersArray1)).toEqual([18, 21, 24, 27, 30])
      expect(multiplyBy3(numbersArray2)).toEqual([72, 81, 90, 99, 108])
    })
  })

function multiplyBy3(arr) {
    return arr.map(num => num * 3)
}
console.log(multiplyBy3)
    // Error: multiplyBy3 is not defined

// b) Create the function that makes the test pass.

// Pseudo code:

            //funtcion: multiplyBy3
            //input: make (array) for numbersArray1 and numbersArray2
            //Use .map() to access items in arry and multiply each by 3
            //returns an array of equal length 
            //output: Array1 = [18, 21, 24, 27, 30]
            //        Array2 = [72, 81, 90, 99, 108]


// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

describe("numDivBy3", (number) => {
    it("takes a object as an argument and decides if the number inside it is evenly divisible by three or not.", () => {
        const obj1 = { number: 15 }
        const obj2 = { number: 0 }
        const obj3 = { number: -7 }

        expect(numDivBy3(obj1)).toEqual("15 is divisible by three")
        expect(numDivBy3(obj2)).toEqual("0 is divisible by three")
        expect(numDivBy3(obj3)).toEqual("-7 is not divisible by three")
    })
})
//       expect(numDivBy3()).toEqual("15 is divisible by three")
//       expect(numDivBy3()).toEqual("0 is divisible by three")
//       expect(numDivBy3()).toEqual("-7 is divisible by three")
//     })
//   })

// const object1 = { number: 15 }
// // Expected output: "15 is divisible by three"
// const object2 = { number: 0 }
// // Expected output: "0 is divisible by three"
// const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.

function numDivBy3(obj) {
    const number = obj.number;

    if (number % 3 === 0) {
        return `${number} is divisible by three`
    } else {
        return `${number} is not divisible by three`
    }
}
// Pseudo code:
//              Create a function = numDivBy3
            //Parameter = number
            //create a conditional statement {if, else if statement}
            //.toEqual method check if the output function is equal to the expected output.
            //output: either divisible by 3 or not
            

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

describe("capitalizeWords", () => {
    it("should capitalize all words in the array", () => {
        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]

        const expected1 = ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
        const expected2 = ["Temperature", "Database", "Chopsticks", "Mango"]

        expect(capitalizeWords(randomNouns1)).toEqual(expected1)
        expect(capitalizeWords(randomNouns2)).toEqual(expected2)
    })
})

// const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]


// b) Create the function that makes the test pass.

function capitalizeWords(words) {
    return words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
}

// Pseudo code:
    //create a function = capitalizeWords
    //parameter (words)
    //use .charAt (it use to return the sepcific index, in this case 0, for the first letter.)
    //use .slice (separete the index1 and beyond to keep none capitalized)
    //use .toUpperCase method to Capitalized words (using .chartAt to specifiy the [index] to capitalized.)
