// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

var twoSum = function(nums, target) {
    let num1 = nums[0]
    let num2 = nums[1]

    for(let i = 0; i < nums.length; i++) {
        if(num1 + num2 === target) {
            return [num1, num2]
        } else {
            num2 = nums[i + 1]
        } else {

        }
    }
};

console.log(twoSum([1, 2, 3, 4], 4))