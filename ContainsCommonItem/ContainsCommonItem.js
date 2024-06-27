// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
// For Example:
// const array1 = ['a', 'b', 'c', 'x'];
//const array2 = ['z', 'y', 'i'];
// should return false.
// -----------
// const array1 = ['a', 'b', 'c', 'x'];
//const array2 = ['z', 'y', 'x'];
// should return true.

const arr1 = ['a', 'b', 'c', 'x'];
const arr2 = ['z', 'y', 'x'];

const containsCommonItem = (arr1, arr2) => {
    // Apprach: 2 separate for loops => time complexity: O(a+b), space complexity: O(a)  

    let map = {};

    // #9 Worth mentioning: modularize code => maybe create a function mayArrayToObject somewhere that does the conversion
    for (let i = 0; i < arr1.length; i++) {
        if (!map[arr1[i]]) { // check if the property exists 
            map[arr1[i]] = true;
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        // if (map.hasOwnProperty(arr2[i])) {
        //     return true;
        // } 
        if (map[arr2[i]]) {
            return true;
        } 
    }
    return false;
}


const containsCommonItem2 = (arr1, arr2) => {
    // Leverage: .some() and .includes()
    return arr1.some(item => arr2.includes(item))
    // if some elements inlcude the item in the array, return true
}

const answer = containsCommonItem2(arr1, arr2);
console.log(answer);