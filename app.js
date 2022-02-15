// basic

var a = "Hello World";

function b() {
  console.log("Call B!");
}

b();
console.log(a);

// execution stack!!!

function b() {
  console.log("function B");
}

function abc() {
  b();
}
abc();

// U ovom primeru pravi se execution stack na sledeci nacin:

b();
abc();
// Global Execution Context

function a() {
  b();
  var c;
}

function b() {
  var d;
}

abc();
var d;

// execution stack pr.3

var n = 2;

function square(num) {
  var ans = num * num;
  return ans;
}

var square2 = square(n);
var square4 = square(4);

// primer 4

function b() {
  var myVar;
  console.log(myVar);
}

function aa() {
  var myVar = 2;
  console.log(myVar);
  b();
}

var myVar = 1;
console.log(myVar);
aa();

const num = 3;
function multipleBy2(inputNumber) {
  const res = inputNumber * 2;
  return res;
}
const name = "konj";
