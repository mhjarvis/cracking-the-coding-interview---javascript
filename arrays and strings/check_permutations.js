/*
 * Given two strings, write a method to decide if one is a permutation of the other.
 * Input will be cleaned to allow upper case/lower case and removes whitespace.
 */

/* Get user input -- remove comments to enable*/
//let str1 = prompt("Please enter the first string: ");
//let str2 = prompt("Please enter the second string: ");

let str1 = "thedogisanodfoiwjfeowifjwofijwifjwoeifjwoifjwofjroifjwofjofjrojfowfj";
let str2 = "thedogisanodfoiwjfeowifjwofijwifjwoeifjwoifjwofjroifjwofjofjrojofwfj";

/* Test speed performance for each function run */
let t2 = performance.now();
console.log(betterTestForPermutation(str1, str2));
let t3 = performance.now();

let t0 = performance.now();
console.log(isPermutation(str1, str2));
let t1 = performance.now();

console.log("Time to complete 'isPermutation' function: " + (t1 - t0));
console.log("Time to complete 'betterTestForPerm' function: " + (t3 - t2));

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

/* Function that tests permutation using the 128 ASCII character set */
function betterTestForPermutation(str1, str2) {

    /* Remove whitespace */
    str1 = str1.trim();
    str2 = str2.trim();

    /* Test to see if the strings are of the same length */
    if(str1.length != str2.length) {
        return false;
    }

    /* Create arrays to hold 0s for the 128 ascii character set */
    let arr1 = Array(128);
    let arr2 = Array(128);

    arr1.fill(0);
    arr2.fill(0);

    /* Go through strings, convert to ascii, and increment array position */
    for(let i = 0; i < str1.length && i < str2.length; i++) {

        let n = str1.charCodeAt(i);
        let o = str2.charCodeAt(i);

        arr1[n]++;
        arr2[o]++;
    }

    /* Compare both arrays to each other */
    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] !== arr2[i]) {
            return false;
        }
    } return true;
}