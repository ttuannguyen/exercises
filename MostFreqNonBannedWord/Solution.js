// Best solution 
function mostFrequentWord(paragraph, banned) {
    // Convert the paragraph to lowercase and replace punctuation with spaces
    let sanitizedParagraph = paragraph.toLowerCase().replace(/[!?',;.]/g, ' ');

    // Split the paragraph into words
    let words = sanitizedParagraph.split(/\s+/);

    // Create a set for banned words for O(1) lookups
    let bannedSet = new Set(banned);

    // Create a map to count the frequency of each word
    let wordCount = new Map();
    for (let word of words) {
        if (!bannedSet.has(word) && word !== '') {
            wordCount.set(word, (wordCount.get(word) || 0) + 1);
        }
    }

    // Find the word with the highest frequency
    let mostFrequent = '';
    let maxCount = 0;
    for (let [word, count] of wordCount) {
        if (count > maxCount) {
            maxCount = count;
            mostFrequent = word;
        }
    }

    return mostFrequent;
}

// Approach 1: Brute force
// Flawed: this only handles 1 single banned word
function find1(paragraph, banned) {
    
    let regExp = /[^a-z]/g;
    let regExp2 = /[!?',;.]/g;
    let sanitized = paragraph.toLowerCase().replace(regExp2, '');
    let strArray = sanitized.split(/\s+/);
    // console.log(strArray);

    let map = {};
    let highestCount = 0;
    let mostFrequentWord = '';

    for (let i = 0; i < strArray.length; i++) {
        if (strArray[i] !== banned) {
            if(map[strArray[i]] !== undefined) {
                map[strArray[i]]++;
            } else {
                map[strArray[i]] = 1;
            }
            if (map[strArray[i]] > highestCount) {
                highestCount = map[strArray[i]];
                mostFrequentWord = strArray[i];
            }
        }
    }

    console.log(mostFrequentWord);
    return mostFrequentWord;
}

const paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.";
const banned = "hit";

find(paragraph, banned);