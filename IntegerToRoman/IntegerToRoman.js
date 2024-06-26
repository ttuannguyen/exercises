const num = 58; // => LVIII

const intToRoman = (num) => {

    let romans = {
        'M': 1000,
        'D': 500,
        'C': 100,
        'L': 50,
        'X': 10,
        'V': 5,
        'I': 1,
    }

    let str = '';

    let text = num.toString();

    if (text[0] !== '4' || text[0] !== '9') {
        const keys = Object.keys(romans);
        let remainder = num;
        let lastValue = 0;
        for (let i = 0; i < keys.length-1; i++) {
            console.log(keys[i], romans[keys[i]], romans[keys[i]] - remainder, remainder);
            if((romans[keys[i]] - remainder) <= 0) {
                if (i === keys.length-2) {
                    lastValue = -(romans[keys[i]] - remainder);
                }
                str += keys[i];
                remainder = num - romans[keys[i]];
            }
            
        }

        console.log(lastValue);
        
        // for (let key in romans) {
        //     console.log(key, romans[key],remainder, romans[key] - remainder);
        //     if((romans[key] - remainder) <= 0) {
        //         str += key;
        //         remainder = num - romans[key];
        //     }
        // }
    }

    console.log(str)
    return str;

}

intToRoman(num);