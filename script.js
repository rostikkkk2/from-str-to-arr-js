var arr = "1+22+333";
var DELIMETER = "+";
var i = 0;
var result = [];
var accumulator = "";

while (i < arr.length) {
  if (arr[i] != DELIMETER) {
    accumulator += arr[i];
  }else{
    result[result.length] = accumulator;
    accumulator = "";
  }
  i++;
}
if(accumulator != ""){
  result[result.length] = accumulator;
}

console.log(result);
