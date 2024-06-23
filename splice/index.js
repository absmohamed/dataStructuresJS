/* What is Splice?
Remove  items in an array with the splice method

Now that we've covered how to remove elements in the first position and the last position, let's now look
at a customizable way to remove items anywhere we want inside an array - The Splice Method.

Splice can remove any number of items from an array consecutively given a starting input which we define.

Splice takes three arguments:
1. The first argument is for selecting the starting position of where we want to remove elements.
2. The second argument denotes how many items will be consecutively deleted from the starting position.

Splice can also be used to create a new copy of the array with the removed items.

Code examples:
Example 1: Splice Method
*/

let coloursArray = ['blue', 'gold', 'silver', 'grey', 'purple'];

coloursArray.splice(2, 2);
console.log("Example 1:", coloursArray);

/* Example 2 Splice Method to return a new array

*/
let array = [1,2,3,4,5];
let newArray = array.splice(2, 2);

console.log("Example 2:", newArray);

/* Exercise OBJ: You work for the CIA and your job is to decode an unusual communication of strings
(a sequence of strings) with a hidden message using the splice method. 

The final sentence should only contain the following sequence of indexed 
values of the INITIAL strings in the given array: 2,3,5,6,7

1. Initialize an array called jumbled with the following strings consecutively:
'unlock', 'hidden', 'the', 'cat', 'messages', 'jumped', 'over', 'the moon'  

2. You can only use the splice method to selectively decode and return the final message
logged in the console. 

BONUS Return the deleted items to a new variable called CIAConfidential and share both 
confidential decoded logs in the discord in the #datastructures channel. 

Good luck saving the world! */

let exerciseArray = ['unlock', 'hidden', 'the', 'cat', 'messages', 'jumped', 'over', 'the moon'];

let array1 = exerciseArray.splice(0,2);
let array2 = exerciseArray.splice(2,1);

console.log(array1 + array2);

console.log("Solution", exerciseArray);


/* Adding to arrays with splice

We've seen how the first two arguments of splice are used for selecting a starting position and then removing
a number of elements in an array.
Splice also takes a third argument as well.

The third argument of the splice method allows you to swap out the elements you are removing with new
variables at the position that you set.

Example 1: The Splice method third argument (swapping in new elements)
*/

let fixMePlease = ['this', 'sentence', 'broken', 'pie', 'now'];

// You can add to arrays using the third argument of Splice.
fixMePlease.splice(2, 2, 'is', 'fixed');

console.log("Example of Adding to arrays with Splice", fixMePlease);

/* Exercise
1. Declare a function updateUserNames which takes an array as an argument and returns the array.
2. Log to the console updateUserNames and append the following string literal names to the array:
'Thomas', 'Suzie', 'Jessica', 'Jonny'
3. Back in the updateUserNames function, update the user names of the array by replacing 'Suzie', with the
new user  'Bob' using the splice method.

*/

function updateUserNames(arr){
    arr.splice(1, 1, "Bob");
    return arr;
}

console.log("Solution", updateUserNames(['Thomas', 'Suzie', 'Jessica', 'Jonny']));