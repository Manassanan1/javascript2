function circumfernce(r) {
    if(Number.isNaN(Number.parseFloat(r))){
        return 0;
    }
    return parseFloat(r) * 2.0 * Math.PI;
}

console.log(circumfernce("4.567abcdefgh"));
//expected output: 28.6953007297889173
console.log(circumfernce("abcdefgh"));
// expected ouput: 0