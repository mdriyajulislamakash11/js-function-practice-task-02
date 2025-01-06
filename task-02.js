/*
Task-2:
You are given an array of numbers. Count how many times 
the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]
find: 5
output: 2

sample-input:
numbers = [5,6,11,12,98, 5]
find: 25
output: 0
*/
const numbers = [5, 6, 11, 12, 98, 5];
function check(array, target) {

      let repeated = [];
      for (let number of array) {
            if (number === target) {
                  repeated++
            }
      }
      return repeated
};
const target = 5;
const result = check(numbers, target);
console.log(result, target)

const numbers = [5,6,11,12,98, 5,];
function check (arr, find){
      let count = 0;
      for(let num of arr){
            if(num === find){
                  count++
            }
      }
      return count;
};
const find = 25;
const send = check(numbers, find);
console.log(`the name is ${find} number length ${send}`)