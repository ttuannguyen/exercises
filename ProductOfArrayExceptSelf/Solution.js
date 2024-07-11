// Approach: brute force
function productExceptSelf(nums) {
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

    console.log(result);
    return result;

}

// debug your code below
console.log(productExceptSelf([1, 2, 3, 4]));