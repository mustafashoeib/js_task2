# Task Four

```
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
```