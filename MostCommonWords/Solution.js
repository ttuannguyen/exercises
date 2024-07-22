// Approach: 
function mostCommonWords2(text) {
    // Your code here
    let sanitized = text.toLowerCase().replace(/[.,;!'"()]/g, '');
    let words = sanitized.split(/\s+/);
    console.log(words);

    let wordFreq = new Map(); 

    for (const word of words) {
        if(word !== '') {
            wordFreq.set(word, (wordFreq.get(word) || 0) + 1);
        }
    }

    const sortedWords = Array.from(wordFreq.entries()).sort((a, b) => {
        if (b[1] !== a[1]) { // comparing frequencies of the two words
            return b[1] - a[1];
        } else { // if the frequencies are the same, compare the words alphabetically
            // localeCompare is a string method that compares two strings according to the sort order of the current locale.
            return a[0].localeCompare(b[0]);
        }
    })

    console.log(sortedWords);

}


  // Approach: brute force / incomplete
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

    let sortedArr = arr.sort();
    console.log(sortedArr);

    // Challenge: sort alphabetically and t

  }
  
  // debug your code below
  console.log(mostCommonWords2("It was the best of times, it was the worst of times."));