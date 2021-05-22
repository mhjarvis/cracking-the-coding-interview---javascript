/* Write a method to replace all spaces in a string with '%20'. Assume that the string
 * has sufficient space at the end to hold the additional characters.
 */

let t0 = performance.now();
console.log("URLify Function: \n\t" + URLify("Mr John Smith   "));
let t1 = performance.now();

let t2 = performance.now();
console.log("simpleURLify Function: \n\t" + simpleURLify("Mr John Smith   "));
let t3 = performance.now();

console.log("\nURLify function: " + (t1 - t0));
console.log("\nsimpleURLIFY function: " + (t3 - t2))

/* Function to URLify string using basic for loop */
function URLify(str) {

    str = str.trim().split("");
    
    for(let i = 0; i < str.length; i++) {
        if(str[i] == ' ') {
            str[i] = '%20';
        }
    }
    str = str.join("");
    return str;
}

/* Simpler version of urlify function */
function simpleURLify(str) {
    return str.trim().replace(/\s/g, '%20');
}