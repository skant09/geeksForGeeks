function add(number) {
  if (typeof number !== "number") throw Error("Requires a number input");
  return function (anotherNumber) {
    if (typeof anotherNumber === "undefined") return number;
    if (typeof anotherNumber !== "number") throw Error("Requires a number input");
    return add(number + anotherNumber);
  };
}

// const result = add(1)(2)(3)(4)();
// const result1 = add(1)(2)(3)();

// console.log(result, result1); // 10 6

function add1(number) {
  if (typeof number === "undefined") {
      number = add1.cache;
      add1.cache = 0;
      return number;
  };
  add1.cache = add1.cache ? add1.cache + number : number;
  return add1;
}

const result = add1(1)(2)(3)(4);
const result1 = add1(1)(2)(3)();

console.log(result, result1); // 10 6
