console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


// 1. - Create a global variable named `basket` and set it to an empty array.

// - Create a function called `addItem`. It should:
// - take an input parameter for a string `item`
// - add the new item to the global array `basket`.
// - return `true` indicating the item was added

let basket = [];

function addItem (item) {
    basketItem = item;
    basket.push(basketItem);
    for (let basketIndex = 0; basketIndex < basket.length; basketIndex ++){ // cycles through each item of the variable.
        for (basketIndex in basket) {
            if ( item === basket[basketIndex]){ // this one is comparing to each item
                return true;
            }
        }
    }

}
addItem("grape");
addItem("soda");
addItem("orange");
console.log(basket);



// // 2. - Create a function called `listItems`. It should:
//   - loop over the items in the `basket` array
//   - console.log each individual item on a new line

function listItems () {
    return basket.join('\n')
    }
console.log(listItems());

// // 3. - Create a function called `empty`. It should:
//   - reset the `basket` to an empty array
console.log('!!!!Num3!!!')
function empty () {
    console.log(basket);
}

empty();

// //### Stretch Goals
// Remember that Stretch Goals are not required, but will help you to further develop concepts from the skills we have covered.

// __Using functions in other functions!__

// 1. Add a global `const` named `maxItems` and set it to 5.

// 2. Create a function called isFull(). It should:
//   - return `false` if the basket contains *less* than max number of items
//   - return `true` otherwise (equal or more than maxItems)

// 3. Update the required `addItem` function to:
//   - Use the `isFull` function to prevent more than `maxItems` from being added to the basket. 
//   - If an item was added to the array, return `true`
//   - If there was no room and the item could not be added return `false`







// 4. Create a function called `removeItem`. It should:
// - Take an input parameter for a string `item`
// - Use [Array.indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) to find the index of the first matching item in the basket.
// - Use [Array.splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) to remove the first matching item from the basket.
// - Return the item removed or `null` if the item was not found



// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
