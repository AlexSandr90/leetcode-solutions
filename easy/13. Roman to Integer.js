

// Не решил

const romanToInt = romanStr => {
    const initialObj = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let count = 0;
    const tempArr = romanStr.split('');
    console.log(initialObj.hasOwnProperty(tempArr[0]));
    for (let i = 0; i < tempArr.length; i++) {
        if (initialObj.hasOwnProperty(tempArr[i])) {
            count = count + initialObj[tempArr[i]]
        }
    }

    return count;
};

console.log(romanToInt('MCMXCIV'));