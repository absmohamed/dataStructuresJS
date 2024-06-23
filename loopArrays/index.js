/*
Looping through arrays in JavaScript

In JavaScript, it can be quite useful to loop through each element in an array and do
something with the data. Whether it's to search for data or mutate the array, whatever
it may be, JavaScript offers multiple built-in methods for looping through arrays.

Some of the powerful methods include: map(), forEach(), every() but the most
workable one is the for loop.

Example 1: Push each word from a string into a single array.
*/

function convertStringToArray(words){
    let wordArray = [];
    let wordSplit = words.split(" ");

    for(let i = 0; i < wordSplit.length; i++){
        wordArray.push(wordSplit[i]);
    }
    return wordArray;
}

console.log(convertStringToArray('almonds blueberries strawberries burgers'));



/* Chunking arrays with nested loops

let chunked = [['a', 'b', 'c',], ['d','e', 'f'], ['g',  'h', 'i']];

Write a function called alphabet that 'unchunks' the nested arrays and returns all the string 
elements in chunked into a single array.

*/

let chunked = [['a', 'b', 'c',], ['d','e', 'f'], ['g',  'h', 'i']];

function alphabet(){
    let arr = [];

    // This is the chunked array
    for(let i = 0; i < chunked.length; i++){
        //each element
        for(let j = 0; j < chunked[i].length; j++){
            arr.push(chunked[i][j]);
        }
    }
    return arr;
}

console.log(alphabet("Exercise Solution:", alphabet()));