const input = `
abcdef
bababc 
abbcde 
abcccd 
aabcdd 
abcdee 
ababab`;

// const input = `
// bababc
// `;

const inputPart2 = `abcde
fghij
klmno
pqrst
fguij
axcye
wvxyz`;

const inputArr = input.split('\n');
const inputArr2 = inputPart2.split('\n');


function part1(input) {
    let twoLetters = 0;
    let threeLetters = 0;
    let twoLetterFound = false;
    let threeLetterFound = false;
    for (var i = 0; i < input.length; i++) {
        let word = input[i];
        for (var j = 0; j < word.length; j++) {
            let char = word[j];
            let letterOcurrence = (word.match(new RegExp(char, "g")) || []).length;
            if (letterOcurrence === 2 && !twoLetterFound) {
                twoLetters++;
                twoLetterFound = true;
            } else if (letterOcurrence === 3 && !threeLetterFound) {
                threeLetters++;
                threeLetterFound = true;
            }
            if (twoLetterFound && threeLetterFound) {
                continue;
            }
        }
        twoLetterFound = false;
        threeLetterFound = false;
    }

    console.log('two letters', twoLetters);
    console.log('three letters', threeLetters);

    return twoLetters * threeLetters;
}


function part2(input) {
    input.sort();
    console.log(input);
    for(var i = 0; i < input.length; i++) {
        var word1 = input[i];
        // console.log(word1);
        for (var j = 1; j < input.length; j++) {
            var word2 = input[j];
            // console.log(word2);
            let diff = 0;
            for (var k = 0; k < word1.length;k++) {
                // console.log(word1.charAt(k));
                // console.log(word2.charAt(k));
                if (word1.charAt(k) != word2.charAt(k)) {
                    diff++;
                }
            }
            if (diff === 1) {
                return word1 + ' ' + word2;
            }
        }    
    }
}

// console.log('part1: ', part1(inputArr));
console.log('part2: ', part2(inputArr2));
