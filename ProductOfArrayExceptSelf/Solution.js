// Approach 3: 2 passes (using 2 separate for loops)
function productExceptSelf2(nums) {
    if (nums.length === 0) {
        return [];
    }
}

// Approach 2: Flawed bc we need to deal with running into division by 0
function productExceptSelf2(nums) {
    // Aha: The key here is to recognize the mathematical patterns 
    if (nums.length === 0) {
        return [];
    }

    let n = nums.length;

    let arr = [];

    let product = 1;
    for (let i = 0; i < n; i++) {
        product = product * nums[i];
    };

    for (let i = 0; i < n; i++) {
        arr.push(product / nums[i]);
    }

    return arr;

}


// Approach (brute force): Nested for loop
function productExceptSelf1(nums) {
    if (nums.length === 0) {
        return [];
    }
    
    let result = [];
    
    for (let i = 0; i < nums.length; i++) {
        let product = 1;

        for (let j = 0; j < nums.length; j++) {
            if (j !== i) {
                product = product * nums[j];
            }
        }
        result.push(product);
    }

    return result;
}

// debug your code below
console.log(productExceptSelf1([1, 2, 3, 4]));
console.log(productExceptSelf2([1, 2, 3, 4]));