// 1-  حول نوع البيانات الآتي ل number  

var text = "10"
console.log(+text)
console.log(-text)
console.log(Number(text));


/* 2-  احمد صاحب محل حلويات عنده البيانات دي في المحل 
The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
*/


const gummyBears = 1 ?? "";
console.log(gummyBears)

const lollipops = null ?? null;
const sourStrips = undefined ?? undefined;
const licorice = null ?? null;
console.log(lollipops)
console.log(sourStrips)
console.log(licorice)

/* task 3 */

let getShawarma  = function( age){
  if (age >= 20){
    console.log(`you have a shawrma meat`)
  } else{
    console.log(`you have a shawrma chicken`)
  }
}
getShawarma(25)

/* 4 */

const calculate = function(num1, num2 , method){
  if (method === "sum") {
    let result = num1 + num2 
    console.log(result)
  }
  else if (method === "sub") {
    let result = num1- num2
    console.log(result)
  }
  else if ( method === "multi"){
    let result = num1 * num2
    console.log(result)
  }
  else if ( method === "divided"){
    let result = num1 / num2
    console.log(result)
  }
  else {
    console.log("Unknown Method, Try Agin")
  } 
}
calculate(1, 4 , "unknown")
calculate(1, 4 , "sub")
calculate(1, 4 , "sum")
calculate(1, 4 , "multi")
calculate(1, 4 , "divided")

/* 6 switch*/

const day = "monday";
switch (day){
  case "saturday" :
  console.log(`today is ${day}`);
  break;
  case "sunday" :
  console.log(`today is ${day}`);
  break;
  case "monday" :
  console.log(`today is ${day}`);
  break;
  case "tuesday" :
  console.log(`today is ${day}`);
  break;
  case "Wednesday" :
  console.log(`today is ${day}`);
  break;
  case "thursday" :
  console.log(`today is ${day}`);
  break;
}

/* 7 */

const age = 26;
const beverage = age >= 21 ? "mo" : "ahmed";
console.log(beverage); 
