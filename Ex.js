const people = ["Aaron","Mel","John"];
const one = 1;
const str = "hello world";
const b = true;
const employee = {
    firstName: "Anirach",
    lastName: "Mingkhwan",
};

function sayHello(preson) {
    console.log("Hello" + preson.firstName);

}
console.log(typeof people);
console.log(typeof sayHello)
console.log(employee instanceof Array);
sayHello(employee);