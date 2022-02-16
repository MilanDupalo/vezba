const num = 3;
function multipleBy2(inputNumber) {
  const res = inputNumber * 2;
  return res;
}
const output = multipleBy2(4);
const newOutput = multipleBy2(10);

let x = "Hello World!";
function a() {
  console.log("It is the first function");
  function b() {
    console.log("It is the second function");
  }
  b();
}
a();
console.log("It is GEC");

function test(x, y) {
  var z = 10;

  var w = 5;
  w = function () {
    return x - y;
  };
}
test(12, 3);

let abc = "Hello World!";
function first() {
  console.log("Inside first function");
  second();
  console.log("Again inside first function");
}
function second() {
  console.log("Inside second function");
}
first();
console.log("Inside Global Execution Context");
