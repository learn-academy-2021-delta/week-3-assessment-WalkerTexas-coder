// ASSESSMENT 3: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.
// lets make a test
//describe block
 describe("fib", ()=>{
     // it block
     it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence", ()=>{
         //expect statments
         expect(fib(6)).toEqual([1, 1, 2, 3, 5, 8])
         expect(fib(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
     })
 })

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]



// b) Create the function that makes the test pass.
//PSEUDO CODE
// Create the function that takes in a number as an arugment
const fib = (number) => {
    // if a number is less than two return "enter a number greater than one"
    if(number < 2) {
        return "please enter a number greater than two"
    }
    // declare an array called sequence and assign values for index 0 and index 1 [1,1]
    let sequence = [1,1]
    // establish an a array with length equal to the input. 
        // for loop according to the number input
        //for loop starts at two
        for (let index = 2; index < number; index++) {
            // nextNum = sequence[index - 1] + sequence[index - 2]
            let nextNum = sequence[index - 1] + sequence[index - 2]
            // sequence.push(nextNum)
         sequence.push(nextNum)
        }
    // return sequence
    return sequence
}

// let numOne = 1
// let numTwo = 1
// let nextNum

// const fib = (number) => {
//     let sequence = []
//     if(number < 2){
//         return number
//     }
//     else{
//         for (let i = 0; i < number; i++) {
//             sequence.push(numOne)
//             nextNum = numOne + numTwo
//             numOne = numTwo
//             numTwo = nextNum
//         }
//         return sequence
//     }
// }

// declare variable numberOne = 1
// declare variable numberTwo = 1
// declare variable nextNum

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.
describe("oddOrder", ()=>{
    it("takes in an array and returns a new array of only odd numbers sorted from least to greatest", ()=>{
        expect(oddOrder(fullArr1)).toEqual([-9, 7, 9, 199])
        expect(oddOrder(fullArr2)).toEqual([-823, 7, 23])
    })
})

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]


// b) Create the function that makes the test pass.
    const oddOrder = (array) =>{
        // declare function oddOrder paramter is an array
        // declare variable to filter out numbers type of number and x % 2 != 0
        let oddArray = array.filter(value => typeof value === "number" && value % 2 !== 0)
        // return an array using sort method
        return oddArray.sort((a,b) => a-b)
    }


    

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.
describe("sum", ()=>{
    it("takes in an array and returns an array of the accumulating sum", ()=>{
        expect(sum(numbersToAdd1)).toEqual([2, 6, 51, 60])
        expect(sum(numbersToAdd2)).toEqual([0, 7, -1, 11])
        expect(sum(numbersToAdd3)).toEqual([])
    })
})

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = []
// Expected output: []



// b) Create the function that makes the test pass.


// declare a function that takes in an array as an arg


// inline .map() solution
    //  let sum = (array) => array.map((sum => value => sum += value)(0))
    
// for loop solution 
    // const sum = (array) => {
    //     let sumArray = []
    //     let sumOf = 0
    //     if(array.length === 0) {
    //         return sumArray
    //     }
    //     for (let i = 0; i < array.length; i++) {
    //        sumOf += array[i]
    //        sumArray.push(sumOf)
    //     }
    //     return sumArray
    // }
   
// foEach Solution
    // const accumulator = (array) => {
    //     sum = 0
    //     array.forEach((element, index) => {
    //         array[index] = element + sum
    //         sum = element + sum
    //     });
    //     return arr
    // }