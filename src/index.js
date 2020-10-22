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
};

function decode(expr) {
    // write your solution here
    var encodedLetters = expr.match(/.{1,10}/g),
        encodedString = '';
        encodedLetters.forEach(function(value) {
            if(value === '**********') {
                encodedString += ' ';
            } else {
                var letters = value.match(/.{1,2}/g),
                    morseString = '';
                letters.forEach(function(val) {
                if(val !== '00') {
                    val === '10' ? morseString += '.' : morseString += '-';
                }
                })
                encodedString += MORSE_TABLE[morseString];
            }
        })
    return encodedString;
}

module.exports = {
    decode
}