// // Create a function which answers the question "Are you playing banjo?".
// // If your name starts with the letter "R" or lower case "r", you are playing banjo!

// // The function takes a name as its only argument, and returns one of the following strings:

// // name + " plays banjo" 
// // name + " does not play banjo"




// // function run(name) {
// // const testChar = name.charAt(0)
// // return testChar
// // }

// // const testRun = run("Shinobisyntax")

// // console.log(testRun)

//-----------------------------------------------//

// function areYouPlayingBanjo(name) {
//     const findR = name.charAt(0)
//     if (findR === "r" || findR === "R") {
//         return name + " plays banjo"
//     } else {
//         return name + " doesn't play banjo"
//     }
// } 

// console.log(areYouPlayingBanjo("Reb"))

//-----------------------------------------------//

    // Sentence Smash
    // Write a function that takes an array of words and smashes them together into a   sentence and returns the sentence. You can ignore any need to sanitize words or   add punctuation, but you should add spaces between each word. Be careful, there   shouldn't be a space at the beginning or the end of the sentence!

    // Example
    // ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

// function smash (words) {
//    return words.join(" ")
// };

// console.log(smash(["hello", "world,", "I", "am", "Seb"]))

//-----------------------------------------------//

    // Make a function that will return a greeting statement that uses an input; your   program should return, "Hello, <name> how are you doing today?".

    // [Make sure you type the exact thing I wrote or the program may not execute properly]

// function greet(name){
//     return `Hello, ${name} how are you doing today?`
// }

// console.log(greet("ShinobiSyntax"))

//-----------------------------------------------//

    //Your task is to create a function that does four basic mathematical operations.

    // The function should take three arguments - operation(string/char), value1(number), value2(number).
    // The function should return result of numbers after applying the chosen operation.

    // Examples(Operator, value1, value2) --> output
    // ('+', 4, 7) --> 11
    // ('-', 15, 18) --> -3
    // ('*', 5, 5) --> 25
    // ('/', 49, 7) --> 7

function basicOp(operation, value1, value2) {
    if (operation === "+") {
        return value1 + value2
    }
    else if (operation === "-") {
        return value1 - value2
    }
    else if (operation === "/") {
        return value1 / value2
    }
    else if (operation === "*") {
        return value1 * value2
    }
    else {
        return "Please input all fields correctly"
    }
}

//-----------------------------------------------//

    // You receive the direction you are facing (one of the 8 directions: N, NE, E, SE, S, SW, W, NW) and a certain degree to turn (a multiple of 45, between -1080 and 1080); positive means clockwise, and negative means counter-clockwise.

    // Return the direction you will face after the turn.

    // Examples
    // "S",  180  -->  "N"
    // "SE", -45  -->  "E"
    // "W",  495  -->  "NE"

// function direction(facing, turn){
  
// }

//--------------------------------------------------//

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// function solution(str, ending){
//     return str.endsWith(ending)
// }

// console.log(solution("rap", "ap"))

// console.log(solution("rap", "ra"))

//-------------------------------------------------//

// You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).

// It is guaranteed that a and b are both present in arr.

function consecutive(arr, a, b) {
  //find a
  const IndexA = arr.indexOf(a)
  //find b
  const IndexB = arr.indexOf(b)
  //check if a or b are + 1 of the other
  if(IndexA === IndexB + 1 || IndexB === IndexA + 1) {
      return true
  } else {
      return false
  }
}

console.log(consecutive([3,4,5,6], 4, 6))

//-------------------------------------------------//

