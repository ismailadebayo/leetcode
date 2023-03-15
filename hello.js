
    console.log("Question 1: https://leetcode.com/problems/merge-two-sorted-lists/ h");
/* Merge the two lists in a one sorted list. 
    
The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
*/
let list1 = [1, 2, 4];

let list2 = [1, 3, 4];

let myResult = [...list1, ...list2];

myResult.sort(function(a, b){
    let myResult= a-b;
    return myResult;
})
console.log(myResult);
/*Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution,
 and you may not use the same element twice.
You can return the answer in any order.

*/
console.log("Question 2: https://leetcode.com/problems/two-sum/" );


function addTwoNumberOfSpecificIndex(nums) {
nums.forEach(function (number, index){
    let result = nums[0] + nums[1];
    console.log("The addition of the first and second number is : " + result);
})
}
addTwoNumberOfSpecificIndex([4,5,7,9,10]);
addTwoNumberOfSpecificIndex([8,3,9,6,7,3]);
