// Write your code here
//ez
console.log(2 == "2"); //true
console.log(2 === 2); //true
console.log(10 % 3 === 0); //false
console.log(10 % 3 === 1); //true
console.log(true && false); //false
console.log(false || true); //true
console.log(true || false); //true
console.log(5 + 8 >= 12 || 19 < 90 || !false); //true
console.log("Josh" == "josh" && !true && false && 17.9 + 0.1 == 18.1); //false
console.log(0.1 + 0.2 == 0.3); //false
console.log(Math.min(0, 1, 2, 10, 11, 100) && Math.max(-100, -90, -1, -0.9, 0)); //0
console.log(Math.max(0, 1, 2, 10, 11, 100) && Math.min(-100, -90, -1, -0.9, 0)); //-100
console.log(Math.min(0, 1, 2, 10, 11, 100) || Math.min(-100, -90, -1, -0.9, 0)); //-100
console.log(!Math.min(0, 1, 2, 10, 11, 100) || !Math.max(-100, -90, -1, -0.9, 0)); //true