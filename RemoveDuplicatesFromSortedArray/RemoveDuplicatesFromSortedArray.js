const removeDuplicates = (nums) => {
    // Note: we need to maintain the in-place approach; thus, we can't use Set
    if (nums.length === 0) return 0;

    let i = 0; // pointer to track the position of the last unique element

    for (let j = 0; j < nums.length; j++) {
        console.log(nums[j], nums[i])
        if (nums[j] !== nums[i]) {
            i++; // increment i to move to the next position for the unique element
            nums[i] = nums[j]; // update the position i with the new unique element
        }
    }
    
    return i + 1; // since i is intialized to 0, the total number of unique elements is i + 1
        
    // Note: if we don't care about in-place positioning, use a Set to get only the unique values
    // const seen = new Set();
    // for (let i  = 0; i < nums.length; i++) {
    //     seen.add(nums[i]);
    // }


}

let nums = [1,1,2]; 
const answer = removeDuplicates(nums);
// console.log(answer);