/* Complex Arrays in JavaScript
In the previous lessons, we worked with nested arrays, but with only one level.
Arrays can nest much more than just one level of arrays (actually have an infinite amount).


Example 1: Deeply Nested Array Structure
*/

let deeplyNestedArray = [
    [
        ['third level', 
            ['fourth level', 
                ['fifth level']
            ]
        ]
    ]
];

console.log("Example 1", deeplyNestedArray[0][0][0]);



/*
Exercise - Skyrim Dungeon master - Multi-Dimensional Array

1. Declare an array called dungeonLevelSeven
2. The array should have seven nested levels.
3. On the third level the array should contain the strings Treasure and Goblins.
4. On the fifth level the array should contain the strings Ghosts and Nooby Trap.
5. On the sixth level the array should contain the string Easter Egg.
6. On the deepest level the array should contain the string Big Boss.
7. Bonus - First access the treasure and skip the goblins and then access the Easter Egg!
 */

let dungeonLevelSeven = [
    [
        ['Treasure', 'Goblins',
            [
                ['Ghosts', 'Nooby Trap',
                    ['Easter Egg',
                        ['Big Boss']
                    ]
                ]
            ]
        ]
    ]
];

console.log("Solution", dungeonLevelSeven[0][0][0], dungeonLevelSeven[0][0][2][0][2][0]);