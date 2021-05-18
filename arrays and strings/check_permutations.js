/*
 * Given two strings, write a method to decide if one is a permutation of the other.
 * Input will be cleaned to allow upper case/lower case and removes whitespace.
 */

/* Get user input */
let str1 = prompt("Please enter the first string: ");
let str2 = prompt("Please enter the second string: ");

console.log(isPermutation(str1, str2));

/* Function to test for permutation */
function isPermutation(str1, str2) {

    /* Clean input: remove whitespace, set to lowercase, transform to array, and sort */
    str1 = str1.trim().toLowerCase().split("").sort();
    str2 = str2.trim().toLowerCase().split("").sort();

    /* Test to see if the strings are of the same length */
    if(str1.length != str2.length) {
        return false;
    }

    /* Compare each sorted string index to the other */
    for(let i = 0; i < str1.length; i++) {
        if(str1[i] != str2[i]) {
            return false;
        }
    } return true;
}



function betterTestForPermutation(str1, str2) {










}