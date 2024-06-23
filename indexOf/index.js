/* Search for items with indexOf in JavaScript

Array data can get fairly large and complex. It can also change and mutate over time including the order of
information and what is being added and removed from arrays.

That being said, we can use a very handy method called indexOf which quickly searches for us whether an 
element in an array exists and returns to us its position in the array (index location).

Basically, indexOf takes one parameter which is the element you are searching for and returns the index
position. If the element does not exist then indexOf will return the value of -1.

Example 1: Search through  an array with indexOf
*/

let  kingsCourt = ['jester', 'spooky advisor', 'throne', 'queen'];

console.log(
    'Example 1:', 
    kingsCourt.indexOf('throne'),
    kingsCourt.indexOf('magic arrows')
);


/* Exercise: Search for game items and clone the kingdom!

You are working for a gaming company and your boss comes over to your desk and hands you
an array holding the game's kingdom items and asks you for help.
She asks you to check to see if 'Magic Arrows' exists in the array and if it does to make
two copies of the array into a new array for further analysis without modifying the original data. 
She also notes that if you get this right this could mean a big up in your salary... 

1. Write a function called searchAndClone which takes two arguments: array and elem.
2. Log into the console searchAndClone passing in the following data from your bosses array: 
"Throne", "Silver sword", "Magic Arrows", "Queen", "Jester", "Spooky Advisor"

3. Back in the function searchAndClone write in logic using the indexOf method to search
and see whether or not the element 'Magic Arrows' exists in the searchAndClone array argument. 
If magic arrows does exist then add conditional logic so that the function will push two
copies of the argument array into a new array and return the new array. If the magic
arrows string does not exist as an element in the argument array then return an error message
to the console stating that: the Magic Arrows are not to be found. 
*/

// Solution

function searchAndClone(array, elem){
    let newArray = [];
    let num = 2;


    if(array.indexOf(elem) > -1) {
        while(num > 0){
            newArray.push([...array]);
            num--;
        }
        return newArray;
    } else {
        return 'the Magic Arrows are not to be found';
    }
};

console.log("Exercise Solution:", searchAndClone(["Throne", "Silver sword", "Magic Arrows", "Queen", "Jester", "Spooky Advisor"], "Magic Arrows"));