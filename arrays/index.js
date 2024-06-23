/* Data Structures - Fundamentals !

What are arrays?
Arrays store collections of data. One dimensional arrays only have one level (nests).
Arrays in JS can contain multiple types: booleans, integers, strings

The length property returns the number of elements within an array.

Arrays can get much more complex!
These are what we would call multi-dimensional arrays (arrays that contain other arrays). Observe that arrays
can even contain complex objects.

Code Examples:
*/
// One Dimensional Array
let loader = true;
let oneDimArray = [loader, 4, 'cat'];

console.log("Result is:", oneDimArray.length);


// Complex array examples:

let multiDimArray = [
    [
        {
            australia: 'Australia',
            finland: 'Finland'
        },
        {
            hot: true,
            cold: false
        }
    ],
    [
        {
            cat: 'Cat',
            dog: 'Dog'
        },
        {
            cute: true,
            cuddly: false
        }
    ],
]


/* Array Exercise
1. Write an array called simpleArray and assign it 6 different variables.
2. In order to pass this exercise, the array must contain at least 1 boolean, 2 strings and 1 integer.
3. Log out the length of the array in the console.


Exercise Solution:
*/
let simpleArray = [true, 'lion', 'mouse', 7, 7.8, 'bear'];
console.log('Solution 1:', simpleArray.length);


/* Learning to access data in arrays
Arrays are not only meant for storing data, but for retrieving data as well.

Every item in an array in JS is marked with an index.
It's important to note that in JS arrays start at the zero index. That means the first array is actually
starting at the 0 position and so on.

*/
let newArray = [1, 2, 3, 4, 5];

/* Example of assigning a value from an array to a variable */
let animalArray =  ['lion', 'cheetah', 'puma', 'parrot'];
let myFavouriteAnimal = animalArray[1];
console.log("Favourite Animal:", myFavouriteAnimal);

/* You can set the value to arrays by selecting the value of the array and defining said value */
// EX 2 (Set Array Value)

animalArray[3] = 'dinosaur';
console.log("Updated Array Values:", animalArray);

/* 
1. Given the following array: let cityWeatherData = [true, "cold", "summer", "new york"];
it is most likely incorrect that it's cold in the summer time in new york.
Your mission is to change the true value to false.
2. Log out the new values of cityWeatherData
Good luck!
*/

let cityWeatherData = [true, 'cold', 'summer', 'new york'];
cityWeatherData[0] = false;

console.log("Updated City Weather Data:", cityWeatherData);



/* Modifying Arrays - What is push and unshift in JavaScript
Modifying arrays by adding new items with the push and unshift method.

Arrays do not have a fixed size and they can be dynamically modified as to the items that they store.

Elements can be added and removed over time and therefore array data is mutable.

Let's take a look at 2 examples which can add new elements into an array by modifying the array at its 
beginning and end points.

** push adds elements to the end of an array while unshift add elements to the end of an array. 
Both methods can pass in one or more arguments depending on how many items you'd like to pass into an array.

Push and Unshift methods example:
*/

let kitchenItems = ['fork', 'knife', 'plates'];

// Adds elements to the start of an array
kitchenItems.unshift("cabinet");

// Deletes last element in an array
kitchenItems.pop();

// Adds elements to the end of an array
kitchenItems.push("Plates");

console.log('Exercise 1 of Modifying Arrays', kitchenItems);


/* Exercise
1. Write a function called dragonBallZ which takes an array parameter
and returns the array.
2. log the results of the dragonBallZ function passing into the argument the string 'Bulma'
into the array. 
3. Back in the function dragonBallZ, modify the array with the push and unshift methods.
Add to the beginning of the array the strings San Goku and Piccalo, and add at the end
of the array the string Vegeta. 
4. Write kamehameha in the DPO discord to celebrate your victory after successfully completing
the task. ;)  

*/

//let dbzArray = [];

function dragonBallZ(array){
    array.unshift("Son Goku", "Piccolo");
    array.push("Vegeta");

    return array;
}

console.log("Example", dragonBallZ(['Bulma']));

/* Modifying Arrays - Remove items with pop and shift in JavaScript

We've looked at the push() and unshift() method to add elements to an array. We can do the exact opposite
in JavaScript with the pop() and shift() method their scary counterparts.

The pop() method will remove the last item in an array whereas the shift() method will remove the first item
in an array.

It's important to note that while push() and unshift() can take multiple arguments the pop() and shift()
method do not take any methods


Example 1: of Pop and Shift:
*/

let outdoorClothes = ['raincoat', 'shoes', 'hat', 'umbrella'];

outdoorClothes.shift('raincoat');
outdoorClothes.pop('umbrella');

console.log("Example:", outdoorClothes);

/* Exercise - Modify Arrays: Remove items

1. Write a function called eBooks which takes an argument array.
2. Log eBooks in the console and pass into the array the following books as strings:
Lord of the Rings, Infinite Jest, JavaScript, The Good Parts.
3. Within the eBook function, using the pop and shift methods, modify  the array so that it removes ONLY
the Infinite  Jest book.

*/

function eBooks(arr){
// create 2 variables  that store pop and shift
    let _shift = arr.shift();
    let _pop = arr.pop();

    return [_pop, _shift];
}


console.log("Exercise Solution:", eBooks(['Lord of the Rings', 'Infinite Jest', 'JavaScript', 'The Good Parts']));

