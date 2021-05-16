
/* 
 * Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?
 */

/* Array to hold 26 values coresponding to the alphabet*/
let arr = [];

/* Get user input */
let str = prompt("Please enter a string to test: ");

testString(str);

/* Function to test uniqueness by using array */
function isUnique(str) {

    str.toLowerCase;                                //set string to lowercase

    /* Populate array with 0 values */
    for(let i = 0; i < 26; i++) {
        arr[i] = 0;
    }

    /* Test each character to values in array */
    for(let i = 0; i < str.length; i++) {

        let index = str.charCodeAt(i) - 97;         //ascii conversion for index use
        
        if(arr[index] === 1) {                      //if value has already been updated in array
            return false;
        } else if(arr[index] === 0) {               //update value in array
            arr[index] = 1;
        }
    }   return true;
}

/* Function to output isUnique result to screen */
function testString(str) {
    result = isUnique(str);
    
    if(result) {
        console.log("String '" + str + "' IS unique.");
    }
    if(!result) {
        console.log("String '" + str + "' IS NOT unique");
    }
}
