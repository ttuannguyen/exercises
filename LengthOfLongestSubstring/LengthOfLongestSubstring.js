function lengthOfLongestSubstring(s) {
    
    let charSet = new Set();
    let maxLength = 0;
    let left = 0;
    
    for (let right = 0; right < s.length; right++) {
        // if (!charSet.has(right)) {
        //     charSet.add(right);
        // } 
        
        // Incorrect:
        // if (charSet.has(s[right])) {
        //     charSet.delete(s[left]);
        //     left++;
        // } 
        // charSet.add(s[right]);

        // Note: use while loop to keep removing characters until duplicate is gone
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        } 
        charSet.add(s[right]);

        maxLength = Math.max(maxLength, right - left + 1);
    }

    
    // for (const right of s) {
    //     // if (!charSet.has(right)) {
    //     //     charSet.add(right);
    //     // } 
    //     if (charSet.has(right)) {
    //         charSet.delete(s[left]);
    //         left++;
    //     } else {
    //         charSet.add(right);
    //     }

    //     maxLength = Math.max(maxLength, right - left + 1);
    // }

    console.log(charSet);


    return maxLength;


}

console.log(lengthOfLongestSubstring("abbcab")); // Output: 3

//  **     
// abbcab