const numbers = [4, 9, 16, 25, 29];
let first = numbers.find((value, index, array)=> {
  return value > 18;
});

console.log(first)