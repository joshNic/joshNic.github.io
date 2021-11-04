// var rudyTimer = (function () {
//   let timer = null; // stores ID of interval timer
//   return function delayMsg2() {
//     if (timer === null) {
//       timer = setInterval(rudy, 1000);
//     } else {
//       clearInterval(timer);
//       timer = null;
//     }
//   }
// })();

// function rudy() {
//   // called each time the timer goes off
//   document.getElementById("output").innerHTML += " Rudy!";
// }

// var foo = 1;
// function bar() {
// if (!foo) {
// var foo = 10;
// }
// alert(foo);
// }
// bar();

x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
  console.log("x1: " + x);
  console.log("a2: " + a);
  var f = function () {
    b = a;
    console.log("b3: " + b);
    b = c;
    var a = 3;
  };
  f();
  console.log("b4: " + b);
  x = 6;
};
c(8, 9, 7);
console.log("b5: " + b);
console.log("x6: " + x);
