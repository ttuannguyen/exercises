function productExceptSelf(nums) {
    // your code goes here
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++)
        console.log(i, j)
    }

}

// debug your code below
console.log(productExceptSelf([1, 2, 3, 4]));