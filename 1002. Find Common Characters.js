// Given a string array words, return an array of all
// characters that show up in all strings within the
// words (including duplicates). You may return the answer in any order.
//
//
//
// Example 1:
// Input: words = ["bella","label","roller"]
// Output: ["e","l","l"]
//
// Example 2:
// Input: words = ["cool","lock","cook"]
// Output: ["c","o"]

// const commonChars = words => {
//     const characters = [];
//     for (let i = 1; i < words.length; i++) {
//         for (let j = 0; j < words[0].length; j++) {
//             if (words[i].split('').includes(words[0][j]) ) {
//                 characters.push(words[0][j])
//             }
//         }
//     }
//
//     return characters;
// };

const commonChars = words => {
    const characters = [];
    let i = 0;
    let char = '';
    let tmpGlag = false;
    while (i < words.length) {
        // debugger
        let j = 1;
        while (j < words[0].length) {
            if (words[i].split('').includes(words[0][j])) {
                // debugger
                char = words[0][j];
                tmpGlag = true;
                console.log('boo');

                j++;
                // continue tmp;
            } else if (!words[i].split('').includes(words[0][j]) && j === words[0].length - 1) {
                // debugger
                char = '';
                tmpGlag = false;
                console.log('foo');
                j++;
                // continue tmp;
            }
        }

        i++;

        if (i === words.length - 1) {
            debugger
            console.log('loo');
            console.log('char.length => ', char.length);
            if (tmpGlag && char.length > 0) {
                characters.push(char)
                debugger
                console.log('finish');
            }
        }
    }


    return characters;
};

console.log(commonChars(["bella", "label", "roller"]));