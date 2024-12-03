let num1 = '150';
let flot  = '1.50';
console.log("******Converting string t ointegers****");
// Converting strings to integers
console.log(parentInt('100'));
console.log(parentInt(num1));
console.log(parseInt('ABC'));
console.log(parseInt('0xf')); // hexadecimal number
console.log("******Converting strings to float***");
//Converting strings to float
console.log(parseFloat('1.25abc'));
console.log(parseFloat(flot));
console.log(parseInt('ABC'));
console.log ("*****More Conversison Examples*****")
//More conversin Examples
//Number after special charaters are ignored
console.log(parseInt('1.5'));
console.log(parseInt('1 + 1'));

//Using Template liteals
console.log(parseInt(`${1 + 1}`));
console.log("Converting number to strings**");
//Converting number to strings
console.log(num1.toString());
console.log(flot.toString());
console.log((100).toString());