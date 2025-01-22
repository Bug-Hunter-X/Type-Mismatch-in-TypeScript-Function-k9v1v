function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return add(a, b);
  } else {
    console.error('One or both arguments are not numbers.');
    return 0; // or throw an error
  }
}

let result1 = addSafe(5, 10); // Correct usage: 15
let result2 = addSafe("hello", 5); //Safe usage: prints error, returns 0
let result3 = addSafe(5, "world");//Safe usage: prints error, returns 0
console.log(result1); //15
console.log(result2); //0
console.log(result3); //0