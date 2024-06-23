/* Slice is a method which can copy an array's data to new storage without modifying the original array.

Slice can take 2 arguments. The first argument is the position to start copying data and the second argument
indicates where we stop copying data (up to and NOT including the index value)

Example 1: How to copy an Array with  Slice
*/

let trainingData = ['10000 steps', '7 JavaScript exercises', '4 react videos'];

let codingData = trainingData.slice(1, 3);

console.log('Coding Data:', codingData, 'Training Data:', trainingData);

/* Exercise: Update CryptoCurrency Portfolio Data

1. Declare a function called cryptoPortfolio which returns the argument array of an array.
2. Log out cryptoPortfolio into the console passing the following crypto data as strings:
'Bitcoin', 'Ethereum', 'Solana', 'Ada', 'Chainlink' 
3. Within the crpyotPortfolio function, duplicate our user's 
crypto portfolio of only the large caps (Bitcoin and Ethereum) 
into a new array called newArray and modify the function so that it 
returns the new array instead of the original one. */

function cryptoPortfolio(arr){
    newArray = arr.slice(0, 2);
    return newArray;
}

console.log('Exercise Solution:', cryptoPortfolio(['Bitcoin', 'Ethereum', 'Solana', 'Ada', 'Chainlink']));



/* Clone arrays without modifying them using the Spread Operator

If you just want to simply copy all of an array's data with making specifications we can easily employ
ES6's very helpful method, the spread operator.

Simple and easy syntax:
Example 1: How to copy an array with the spread operator.
*/

let weatherReport = ['cold', '13 degrees', 'cloudy', 'incoming tornado'];

let copyWeatherReport  = [...weatherReport];

console.log("Example 1:", copyWeatherReport);

/* Exercise: Make multiple copies of an array with the spread operator.
1. Declare a variable called numberOfCopies and set the value to 4.
2. Create a function called makeFourCopies which takes an argument array as an array.
3. Log into the console the function makeFourCopies passing into it the following string data:
'gains', 'losses', 'losses'
4. Back in the makeFourCopies function, write the logic in order to make multiple copies of the array data
(make the EXACT amount of copies as the value in numberOfCopies) into a new array return the new array.
*/


let numberOfCopies = 4;

function makeFourCopies(arr){
    let cloneArr = [];
    for(let i = 0; i < numberOfCopies; i++){
        cloneArr.push([...arr]);
    }
    return cloneArr;
}

console.log("Solution", makeFourCopies(['gains', 'losses', 'losses']));