/*
Task-4:
Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming
*/

const longestStr = "I am learning Programming to become a programmer"
function longest(str){
      let word = str.split(" ")
      let newStr = "";
      for(let i of word){
            if( i.length > newStr.length){
                  newStr = i;
            }
      }
      return newStr;
};
const check = longest(longestStr);
console.log(check)