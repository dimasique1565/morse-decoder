const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    'fffff':  ' ',
};

function decode(expr) {
    let res = '';
    let arr = [];
    for (let i = 0; i < expr.length; i += 10) {
        arr.push(expr.slice(i, i + 10));
    }
    for(let i = 0; i < arr.length; i++) {
        let zna = '';
        for(let j = 10; j > 0; j -= 2) {
            if(arr[i].slice(j - 2, j) == '10') zna = '.' + zna;
            else if(arr[i].slice(j - 2, j) == '11') zna = '-' + zna;
            else if(arr[i].slice(j - 2, j) == '**') zna += 'f';
        }
        res += MORSE_TABLE[zna];
    }
    return res;
}

module.exports = {
    decode
}