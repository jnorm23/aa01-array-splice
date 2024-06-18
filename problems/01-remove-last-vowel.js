/*
Write a function removeLastVowel(word) that takes in a string and returns the
string with its last vowel removed.
Vowels are the letters "a", "e", "i", "o", "u".
*/

// Your code here 


function removeLastVowel(word) {
    const vowels = 'aeiou';                                   // Assign vowels within the function
    let arr = word.split('');                                      // Convert the string to an array to seperate the individual letters
    for (let i = arr.length - 1; i >= 0; i--) {                    // Loop thru the entire array starting from the end
        if (vowels.includes(arr[i])) {                             // Remove and break the loop if the character is a vowel
            arr.splice(i, 1);
            return arr.join('');;
        }
    }
    return word;                                           // Return the array joined together back into a string
}
// console.log(removeLastVowel('bootcamp')); // 'bootcmp'
// console.log(removeLastVowel('better')); // 'bettr'
// console.log(removeLastVowel('graph')); // 'grph'
// console.log(removeLastVowel('thy')); // 'thy'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = removeLastVowel;
