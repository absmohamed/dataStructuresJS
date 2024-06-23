/* Example 1: A Basic JavaScript Object */

const instagramUser = {
    handle: '@coolguy46',
    photos: ['cat', 'family', 'car'],
    businessAccount: false
}

// We can add properties with bracket and dot notation to objects.

instagramUser.location = 'Bali';
instagramUser['followers'] = 250;

console.log("Example 1:", instagramUser);

/* what are objects in JavaScript - Key/Pair Values

In JavaScript, an object is a standalone entity, with properties and type.
Compare it with a car, for example. A car is an object, with properties.
A car has a colour, a design, engine, a material it is made of, etc.
The same way, JavaScript objects can have properties, which define their characteristics.
*/

// Example 1: A  basic JavaScript object

const car = {
    colour: 'silver',
    maxSpeed: '300 KM/H',
    fast: true
}

/*
Build an uber app customer JavaScript object datatable.

1. Write an object called uberCustomer.
2. The object needs to take a minimum of 5 properties with values.
3. The properties and values can be whatever you think should be most appropriate as long as the values
are not blank.
4. At least two of the properties and values should be added with either bracket or dot notation.
*/

let uberCustomer = {
    pickUpspot: 'Downtown New York',
    dropOffSpot: 'Chicago',
    cost: '$2000'
};

uberCustomer.rating = 5;
uberCustomer["carSong"] = 'Adele - Rolling in the Deep';

console.log("Solution", uberCustomer);

/* Modifying Objects and Nested Objects in JavaScript
Objects can nested, just like arrays. We can access them similarly with dot and bracket notation in order
to modify the objects property values.

Example 1: Modifying and Accessing an Object in JavaScript
*/

let deepObject = {
    id: 100002,
    amount: 10,
    time: new Date(),
    geolocation: {
        city: 'Cancun',
        country: 'Mexico'
    }
};

let objectCountry = deepObject.geolocation.country;
// dynamically with function you would use bracket notation for object access
// let objectCountry = deepObject.geolocation["country"];

deepObject.geolocation.city = 'Tulum';


console.log("Example:", deepObject, objectCountry);

/* You are building a weather application and need to access and modify a copy of the API weather data.

1. Copy a real world Weather API data structure (taken from OpenWeatherMap) under exercise solution
from the description of this video.

2. Assign the weather data to an object called weatherAPI

3. Declare a function checkWeather which can dynamically return either the temperature, 
min temperature and humidity 

4. Log your results and celebrate good times! 
*/

let weatherAPI =                           
{
  "coord": {
    "lon": 10.99,
    "lat": 44.34
  },
  "weather": [
    {
      "id": 501,
      "main": "Rain",
      "description": "moderate rain",
      "icon": "10d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 298.48,
    "feels_like": 298.74,
    "temp_min": 297.56,
    "temp_max": 300.05,
    "pressure": 1015,
    "humidity": 64,
    "sea_level": 1015,
    "grnd_level": 933
  },
  "visibility": 10000,
  "wind": {
    "speed": 0.62,
    "deg": 349,
    "gust": 1.18
  },
  "rain": {
    "1h": 3.16
  },
  "clouds": {
    "all": 100
  },
  "dt": 1661870592,
  "sys": {
    "type": 2,
    "id": 2075663,
    "country": "IT",
    "sunrise": 1661834187,
    "sunset": 1661882248
  },
  "timezone": 7200,
  "id": 3163858,
  "name": "Zocca",
  "cod": 200
};

function checkWeather(scanTemp){
    let data = weatherAPI.main[scanTemp];
    return data;
}

console.log("Solution", checkWeather('humidity'));

/* checking object properties in JavaScript

We can use the hasOwnProperty method in JavaScript to check whether a property exists in a object.
hasOwnProperty will return a value of true if it exists and false if it does not.

Example 1: Check whether a property exists
*/

const restaurant = {
    salad: 'romaine',
    burgers: true
};

console.log("Example of checking object properties", restaurant.hasOwnProperty('salad'));
console.log("Second example of checking object properties", 'burgers' in restaurant);

delete restaurant.burgers;
console.log("Checking object properties", 'burgers' in restaurant);

/* Exercise: Fix a Bug for A Medical Company's Data 

You work at a medical company and you've been getting this weird bug 
where the data property 'fever', of whether a patient has a fever 
has been oddly and mistakenly replaced with the property 'shoes'.

const medicalData = {
  perscriptions: true,
  weight: 156,
  height: 508,
  shoes: false
};

Your boss says he spoke with the doctors and you need to fix this confusing information
ASAP so as not to distract the doctors from their hard work.

1. Write a function cleanUp which will check whether an object contains the property
shoes and delete it if it does. Additionally, create and assign the value of the 
property shoes to a new property fever. */

const medicalData = {
    perscriptions: true,
    weight: 156,
    height: 508,
    shoes: false
};

function cleanUp(){
    let data = medicalData;
    if('shoes' in data == true){
        delete data.shoes;
        data.fever = false;
    } else {
        return 'Shoes not found as a property within the object'
    }
    return data;
}

console.log("Solution:", cleanUp());

/* Iterate through objects with the for...in statements

The for...in statement iterates over all enumerable properties of an object that are keyed by strings, including inherited enumerable properties.

Example 1: iterate though an object with the for..in 
*/

let npc = {
    character: 'monster',
    weapon: 'bite',
    hairy: true
};

for(let attributes in npc){
    console.log("Example 1:", attributes);
    console.log("Example 1:", npc[attributes]);

};

/* Given the following object of login information:

let logins = {
    week1: true,
    week2: false,
    week3: true,
    week4: true,
    week5: true
};

1. Write a function which can calculate and return the total number of logins using a for...in statement.

*/

let logins = {
    week1: true,
    week2: false,
    week3: true,
    week4: true,
    week5: true
};

function calcLogins(obj){
    let num = 0;
    for(let week in obj){
        if(obj[week] === true) num += 1;
    }
    return num;
}

console.log(calcLogins(logins))


/* Object.keys in JavaScript  - storing keys into arrays
You can store all the keys in an object into an array with the Object.keys() method.
Objects.keys takes one argument which is the object you wish to extract the keys from.

Example 1: how to copy keys from an object into an array.
*/

let languages = {
    french: true,
    english: false,
    spanish: true
};

console.log("Object keys Example:", Object.keys(languages));

// writing some objects and storing their keys into arrays with Objects.keys

let movieGenresWatched = {
    thriller: true,
    action: true,
    horror: false,
    documentary: true
};

console.log("Object keys:", Object.keys(movieGenresWatched));


/* Objects in JS Basics Overviews
Given the following facebook user object: 

let facebookUser = {
  handle: "Krystal",
  age: 26,
  data: {
    fullname: "Krystal Ballington",
    joinDate: new Date(),
    profilePic: "httpsAWS...",
    friends: ["Bob", "Jerry", "Ashley"],
    groups: [
    "New York Squash", 
    "Spirtual Cooking", 
    "Fossil Hunting"]
  }
};

0. Copy the facebookUser object into your exercise solution

1. Write a function unfriend that can search through the 
facebook user's info (ie the facebookUser object) and dynamically remove 
a friend of choice. 

2. The function should take two arguments, the first argument being an object
and the second argument the friend the user wishes to remove. 

3. If the friend's name does not exist in the object, the function should return
an error message stating that the friend does not exist. 

4. The function should return an array of all of the facebook user's updated friends
list.

This exercise combines an overview of the basics we have been covering in this course
on objects and arrays in javaScript up to this point! 

*/

let facebookUser = {
    handle: "Krystal",
    age: 26,
    data: {
      fullname: "Krystal Ballington",
      joinDate: new Date(),
      profilePic: "httpsAWS...",
      friends: ["Bob", "Jerry", "Ashley"],
      groups: [
      "New York Squash", 
      "Spirtual Cooking", 
      "Fossil Hunting"]
    }
};

function unfriend(obj, friend){
    let array = obj.data.friends;
    let i = array.indexOf(friend);
    if(i >-1){
        array.splice(i, 1);
    } else {
        return 'You have no friends by that name'
    }
    // delete obj.data.friends[i];
    return array;

};

console.log("Final Object Exercise Solution:", unfriend(facebookUser, 'Bob'));

