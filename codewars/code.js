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

function direction(facing, turn){
  
}

//-----------------------------------------------//



