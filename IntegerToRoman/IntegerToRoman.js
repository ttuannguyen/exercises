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
    let remainingValues = 0;

    if (text[0] !== '4' || text[0] !== '9') {
        const keys = Object.keys(romans);
        let remainder = num;
        for (let i = 0; i < keys.length-1; i++) {
            console.log(keys[i], romans[keys[i]], romans[keys[i]] - remainder, remainder);
            if((romans[keys[i]] - remainder) <= 0) {
                if (i === keys.length-2) {
                    // To save the remaining value at the last iteration
                    remainingValues = -(romans[keys[i]] - remainder);
                }
                str += keys[i];
                remainder = num - romans[keys[i]];
            }
            
        }
        
        for (let i = 0; i < remainingValues; i++) {
            str += "I";     
        }

        // const found = Object.keys(romans).find(key => romans[key] === 1);
    


    }
    console.log(str)
    return str;

}

intToRoman(num);