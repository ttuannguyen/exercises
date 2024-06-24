const str = "IV";

const convertToInteger = (str) => {
    
    let romans = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 1000
    }

    let result = 0;
    
    for (let i = 0; i < str.length; i++) {
        let j = i+1;
        // console.log(romans[str[i+1]]);
        if (romans[str[i]] < romans[str[i+1]]) {
            result = result - romans[str[i]] + romans[str[i+1]]
        }
    }

    console.log(result);
    return result;

}

convertToInteger(str);

