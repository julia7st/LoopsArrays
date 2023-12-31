 var freqAlphabets = function (s) {
    const letters = {
        '1': 'a',
        '2': 'b',
        '3': 'c',
        '4': 'd',
        '5': 'e',
        '6': 'f',
        '7': 'g',
        '8': 'h',
        '9': 'i',
        '10#': 'j',
        '11#': 'k',
        '12#': 'l',
        '13#': 'm',
        '14#': 'n',
        '15#': 'o',
        '16#': 'p',
        '17#': 'q',
        '18#': 'r',
        '19#': 's',
        '20#': 't',
        '21#': 'u',
        '22#': 'v',
        '23#': 'w',
        '24#': 'x',
        '25#': 'y',
        '26#': 'z'
    }

    let str = '';

    for (let i = 0; i < s.length; i++) {

        if (s[i + 2] == '#') {
            let substr = s[i] + s[i + 1] + s[i + 2];
            str += letters[substr];
            i += 2;
        } else {
            str += letters[s[i]];
        }
    }

    return str;
};


var a = "10#11#12";
var result = freqAlphabets(a);
console.log(result); 


var a = "1326#";
var result = freqAlphabets(a);
console.log(result); 





