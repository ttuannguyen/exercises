// Approach: 
function mostCommonWords2(text) {
    // Your code here
    let sanitized = text.toLowerCase().replace(/[!?',;.]/g, '');
    let words = sanitized.split(/\s+/);
    console.log(words);

    let map = new Map(); 

    for (const word of words) {
        if(word !== '') {
            map.set(word, (map.get(word) || 0), + 1);
        }
    }

    const punctuationRe = /[.,;!'"()]/g;
    const sanitizedText = text.replace(punctuationRe, ' ').toLowerCase();
    const wordArray = sanitizedText.split(/\s+/);
    console.log(wordArray);



    

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