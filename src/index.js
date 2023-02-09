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
    const length = 10;
    const pattern = new RegExp(".{1," + length + "}", "ig");
    let res = expr.match(pattern).map(item => item.padEnd(length, "."));
    for(let key in res){
        res[key] = res[key].slice(res[key].indexOf('1'))
        res[key] = res[key].replaceAll('10',".")
        res[key] = res[key].replaceAll('11',"-")
        res[key] = res[key].replaceAll('*'," ")
        let k = 0;
        for(let i of Object.keys(MORSE_TABLE)){
            k = k + 1;
            if(i === res[key]){
                res[key] = res[key].replace(res[key], Object.values(MORSE_TABLE)[k-1]);
            }}}
    let result = res.join('');
    return result;
}

module.exports = {
    decode
}