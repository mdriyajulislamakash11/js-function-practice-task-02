// Task-3:
// Write a function to count the number of vowels in a string.
function checkVowels (str) {
      let vowel = "aeiouAEIOU";
      let count = 0;
      for(let i of str){
            if(vowel.includes(i)){
                  console.log(i)
                  count++;
            }
      }
      return count;
};
const find = "hello, how are you all namgladesh";
const checkVowel = checkVowels(find);
console.log(checkVowel);