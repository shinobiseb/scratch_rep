var isPalindrome = function(x) {
    //Covert x to string
    let string = x.toString().split("").reverse().join("")
    //split string at every letter to array
    //reverse array
    //join array together
    //parse int array
    let output = parseInt(string)
    console.log(output)
    //Check if output = x
    if(output === x) {
        return true
    } else {
        return false
    }
};

isPalindrome(131)