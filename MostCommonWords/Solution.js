function mostCommonWords(text) {
    // Your code here
    let sanitized = text.toLowerCase().replace(/[!?',;.]/g, '');
    let words = sanitized.split(/\s+/);

    let map = {};

    for (let i = 0; i < words.length; i++) {
        if (map[words[i]] !== undefined) {
            map[words[i]]++;
        } else {
            map[words[i]] = 1;
        }
    }
    
    let arr = [];
    for (const word in map) {
        arr.push([word, map[word]]);
    }

    // Challenge: sort 

  }
  
  // debug your code below
  console.log(mostCommonWords("It was the best of times, it was the worst of times."));