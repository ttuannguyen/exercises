function find(paragraph, banned) {
    
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